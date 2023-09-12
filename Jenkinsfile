pipeline {
    agent { label 'prod-agent' }

    options {
        buildDiscarder(logRotator(numToKeepStr:'5'))
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        TOKEN = credentials('telegramToken')
        CHAT_ID = credentials('telegramChatid')
        SONARNOTIFY = credentials('sonarnotify')
        SONARURL = credentials('sonarurl')
    }

    stages {
        stage('Getting Code') {
            steps {
                echo 'Cloning the project'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git']]])
            }
        }
        stage('Capture SCM Info') {
            steps {
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
        stage('SonarQube Analysis') {
            steps {
                echo 'Running analysis on the code'
                script {
                    scannerHome = tool 'sonarscanner'
                }
                withSonarQubeEnv('sonarserver') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Quality Gate Check') {
            steps {
                echo 'Checking if code has passed or not'
                timeout(time: 1, unit: 'HOURS') {
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
                    def sonarQubeResult = sh(script: "curl --user ${SONARNOTIFY}: '${SONARURL}api/measures/component?component=${projectKey}&metricKeys=${metricKeys}'", returnStdout: true).trim()
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
SonarQube URL: [${projectKey}](${SONARURL}/dashboard?id=${projectKey})
${text_break}
"""
                    sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${notificationMessage}' --form chat_id='${CHAT_ID}' --form parse_mode='Markdown'"
                }
            }
        }
        stage('Clonning Project Assets') {
            steps {
                echo 'Installing OR Checking rclone'
                sh 'curl https://rclone.org/install.sh | bash'
                sh 'rclone --config=/root/rclone.conf sync "project:" "/root/cloud/" --transfers=20 --checkers=20 --tpslimit 10 --size-only --stats-one-line -P'
                sh 'cp "/root/cloud/*" "${WORKSPACE}"'
            }
        }
        stage('Building Docker Image') {
            steps {
                echo 'Building docker image of the project'
                sh 'docker build -t harshitbhatt043/arcade:latest .'
            }
        }
        stage('Login Into Dockerhub') {
            steps {
                echo 'Loging in into docker hub using provided credentials'
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Pushing Image To Dockerhub') {
            steps {
                echo 'Pushing latest docker image of the project to docker hub'
                    sh 'docker push harshitbhatt043/arcade:latest'
            }
        }
        stage('Deploying Project Arcade') {
            steps {
                echo 'Finalising and starting project ARCADE'
                sh 'docker compose down && docker compose up -d'
            }
        }
        stage('Health Checks') {
            steps {
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
            echo 'Logging out of Docker Hub'
            sh 'docker logout'
            echo 'Running Docker cleanup'
            sh 'docker system prune -af'
        }
    }
}
