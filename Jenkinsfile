pipeline {
    agent { label 'prod-agent' }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Getting Code') {
            steps {
                echo 'Clonning the project'
                git url: 'https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git', branch: 'main'
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
    }
    post {
        always {
            echo 'Logging out of docker hub'
            sh 'docker logout'
            echo 'Running docker cleanup'
            sh 'docker system prune -af'
        }
    }
}
