pipeline {
    agent { label 'prod-agent' }

    options {
        buildDiscarder(logRotator(numToKeepStr:'5'))
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        TOKEN = credentials('telegramToken')
        CHAT_ID = credentials('telegramChatid')
        SONARURL = credentials('sonarurl')
        ASSET = credentials('asset')
        ASSETPATH = credentials('assetpath')
        ASSETNAME = credentials('assetname')
    }

    stages {
        stage('Code & SCM Info') {
            steps {
                echo 'Cloning the project'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git']]])
                echo 'Capturing details for later use'
                script {
                    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                    GIT_MESSAGE = sh(returnStdout: true, script: "git log -n 1 --format=%s ${GIT_COMMIT}").trim()
                    GIT_AUTHOR = sh(returnStdout: true, script: "git log -n 1 --format=%ae ${GIT_COMMIT}").trim()
                    GIT_COMMIT_SHORT = sh(returnStdout: true, script: "git rev-parse --short ${GIT_COMMIT}").trim()
                    GIT_INFO = "Branch(Version): main\nLast Message: ${GIT_MESSAGE}\nAuthor: ${GIT_AUTHOR}\nCommit: ${GIT_COMMIT_SHORT}"
                }
            }
        }
        stage('Tests & Analysis') {
            steps {
                echo 'SonarQube Analysis'
                script {
                    scannerHome = tool 'sonarscanner'
                }
                withSonarQubeEnv('sonarserver') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
                echo 'Quality Gate Check'
                timeout(time: 5, unit: 'MINUTES') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
                    }
                }
            }
        }
        stage('Sending Notification') {
            steps {
                echo 'Sending available details'
                script {
                    def buildStatus = 'Building'
                    def buildDuration = currentBuild.durationString
                    def buildUrl = env.BUILD_URL
                    def sonarPropertiesFile = "${WORKSPACE}/sonar-project.properties"
                    def projectKey = sh(script: "grep '^sonar.projectKey=' \"${sonarPropertiesFile}\" | cut -d'=' -f2 | tr -d '[:space:]'", returnStdout: true).trim()
                    def metricKeys = 'bugs,vulnerabilities,security_hotspots,code_smells,duplicated_lines_density,ncloc,cognitive_complexity,critical_violations,major_violations,sqale_index,alert_status'
                    def sonarQubeResult = sh(script: "curl '${SONARURL}api/measures/component?component=${projectKey}&metricKeys=${metricKeys}'", returnStdout: true).trim()
                    def metricsMap = readJSON text: sonarQubeResult
                    def text_break = '------------------------------------------------------------------------'
                    def info_break = '------------------------------------'
                    def notificationMessage = """${text_break}
*Build Information:*
Job: ${JOB_NAME}
Build Number: ${BUILD_NUMBER}
Status: *${buildStatus}*
Duration: ${buildDuration}
Build URL: [${JOB_NAME}](${buildUrl})
${info_break}
*SCM Information:*
${GIT_INFO}
${info_break}
*SonarQube Information:*
Quality Gate: ${metricsMap.component.measures.find { it.metric == 'alert_status' }?.value ?: 'N/A'}
Code Lines: ${metricsMap.component.measures.find { it.metric == 'ncloc' }?.value ?: 'N/A'}
Bugs: ${metricsMap.component.measures.find { it.metric == 'bugs' }?.value ?: 'N/A'}
Duplications: ${metricsMap.component.measures.find { it.metric == 'duplicated_lines_density' }?.value ?: 'N/A'}%
Vulnerabilities: ${metricsMap.component.measures.find { it.metric == 'vulnerabilities' }?.value ?: 'N/A'}
Security Hotspots: ${metricsMap.component.measures.find { it.metric == 'security_hotspots' }?.value ?: 'N/A'}
Critical Violations: ${metricsMap.component.measures.find { it.metric == 'critical_violations' }?.value ?: 'N/A'}
Major Violations: ${metricsMap.component.measures.find { it.metric == 'major_violations' }?.value ?: 'N/A'}
Code Smells: ${metricsMap.component.measures.find { it.metric == 'code_smells' }?.value ?: 'N/A'}
Code Complexity: ${metricsMap.component.measures.find { it.metric == 'cognitive_complexity' }?.value ?: 'N/A'}
Technical debt: ${metricsMap.component.measures.find { it.metric == 'sqale_index' }?.value ?: 'N/A'} minutes
SonarQube URL: [${projectKey}](${SONARURL}dashboard?id=${projectKey})
${text_break}
"""
                    sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${notificationMessage}' --form chat_id='${CHAT_ID}' --form parse_mode='Markdown'"
                }
            }
        }
        stage('Clonning Project Assets') {
            steps {
                echo 'Checking path and downloading asset'
                script {
                    def directory_path = "${ASSETPATH}"
                    def filesCount = sh(script: "ls -1 ${directory_path} | wc -l", returnStdout: true).trim().toInteger()
                    if (filesCount > 0) {
                        echo "Asset already available."
                    } else {
                        sh "mkdir -p ${directory_path}"
                        sh "wget -q ${ASSET} -P ${directory_path}"
                        sh "mv ${directory_path}/* ${ASSETNAME}"
                        filesCount = sh(script: "ls -1 ${ASSETNAME} | wc -l", returnStdout: true).trim().toInteger()
                        if (filesCount > 0) {
                            echo "Asset download successful."
                        } else {
                            error "Pipeline aborted due to failure: Link changed or Expired"
                        }
                    }
                }
            }
        }
        stage('Building & Deploying Project') {
            steps {
                echo 'Building Docker Image'
                sh 'docker build -t harshitbhatt043/arcade:latest .'
                echo 'DockerHub Login'
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                echo 'Pushing Docker Image'
                    sh 'docker push harshitbhatt043/arcade:latest'
                echo 'Deploying Project'
                sh 'docker compose stop arcade && docker compose pull arcade && docker compose up -d arcade'
                echo 'Performing health checks'
                script {
                    def appUrl = 'http://localhost:5000'
                    def maxRetries = 3
                    def retryInterval = 10
                    def retries = 0
                    def healthy = false
                    while (retries < maxRetries) {
                        try {
                            sh "curl -sSf $appUrl -o /dev/null"
                            healthy = true
                            break
                        } catch (Exception e) {
                            retries++
                            sleep retryInterval
                        }
                    }
                    if (healthy) {
                        echo 'Health checks passed, the application is healthy'
                    } else {
                        error 'Health checks failed, the application may be unhealthy'
                    }
                }
            }
        }
    }
    post {
        success {
            sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${JOB_NAME} Deployed Successfully Took ${currentBuild.durationString.minus(' and counting')}' --form chat_id='${CHAT_ID}'"
        }
        failure {
            script {
                def buildLogUrl = "${BUILD_URL}console"
                def notificationMessage = "${JOB_NAME} Deployment Failed: Check [Build Logs](${buildLogUrl})"
                sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${notificationMessage}' --form chat_id='${CHAT_ID}' --form parse_mode='Markdown'"
            }
        }
        always {
            echo 'Docker Hub Logout'
            sh 'docker logout'
            echo 'Docker cleanup'
            sh 'docker system prune -af'
        }
    }
}
