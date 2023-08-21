pipeline {
    agent { label 'prod-agent' }

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

        stage('Building') {
            steps {
                sh 'docker build . -t arcade'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 7000:80 arcade'
            }
        }
    }
}
