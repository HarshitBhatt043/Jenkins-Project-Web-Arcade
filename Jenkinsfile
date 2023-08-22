pipeline {
    agent { label 'prod-agent' }

    options {
        buildDiscarder(logRotator(numToKeepStr:'5'))
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        TOKEN = credentials('telegramToken')
        CHAT_ID = credentials('telegramChatid')
        CURRENT_BUILD_NUMBER = "${currentBuild.number}"
        TEXT_BREAK = '------------------------------------------------------------------------'
    }

    stages {
        stage('Getting Code') {
            steps {
                echo 'Cloning the project'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git']]])
            }
        }
        stage('Capture Git Info') {
            steps {
                script {
                    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                    GIT_MESSAGE = sh(returnStdout: true, script: "git log -n 1 --format=%s ${GIT_COMMIT}").trim()
                    GIT_AUTHOR = sh(returnStdout: true, script: "git log -n 1 --format=%ae ${GIT_COMMIT}").trim()
                    GIT_COMMIT_SHORT = sh(returnStdout: true, script: "git rev-parse --short ${GIT_COMMIT}").trim()
                    GIT_INFO = "Branch(Version): main\nLast Message: ${GIT_MESSAGE}\nAuthor: ${GIT_AUTHOR}\nCommit: ${GIT_COMMIT_SHORT}"
                }
            }
        }
        stage('Pre-Build') {
            steps {
                sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${TEXT_BREAK}\n${GIT_INFO}\n${JOB_NAME} is Building\n${TEXT_BREAK}' --form chat_id='${CHAT_ID}'"
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
            sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${JOB_NAME} is Success' --form chat_id='${CHAT_ID}'"
        }
        failure {
            sh "curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' --form text='${JOB_NAME} is Failure' --form chat_id='${CHAT_ID}'"
        }
        always {
            echo 'Logging out of Docker Hub'
            sh 'docker logout'
            echo 'Running Docker cleanup'
            sh 'docker system prune -af'
        }
    }
}
