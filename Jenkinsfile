pipeline {
    agent { label 'prod-agent' }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Getting Code') {
            steps {
                git url: 'https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git', branch: 'main'
            }
        }

        stage('SonarQube Analysis') {
            steps {
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
                sh 'docker build -t harshitbhatt043/arcade:latest .'
            }
        }

        stage('Login Into Dockerhub') {
            steps {
                echo 'loging in into docker hub using provided credentials'
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Pushing Image To Dockerhub') {
            steps {
                echo 'pushing latest image to docker hub'
                    sh 'docker push harshitbhatt043/arcade:latest'
            }
        }

        stage('Deploying Project Arcade') {
            steps {
                sh 'docker compose down && docker compose up -d'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
