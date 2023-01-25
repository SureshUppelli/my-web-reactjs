pipeline {
    agent{
        label 'nodejs'
    }
    environment {
        DOCKER_TAG = "v${env.BUILD_NUMBER}"
    }
    options{
        // Stop the build early in case of compile or test failures
        skipStagesAfterUnstable()
    }
    stages {
        
        stage("Testing"){
            steps{
                echo "no script"
                
                sh label: '', script: 'chmod +x changeTag.sh'
                sh label: '', script: './changeTag.sh ${DOCKER_TAG}'

            }
        }
        stage("Build Project"){
            steps{
                sh label: '', script: '''npm install --production
npm install react-scripts -g --silent
CI=false npm run build'''
            }
        }
        stage("Building Frontend Image"){
            steps{
                
                    sh label: '', script: '''docker build -t novisync-web-react-front-prod:v1 .
docker tag novisync-web-react-front-prod:v1 docker-registry-server:5000/novisync-web-react-front-prod:${DOCKER_TAG}'''
                
                
            }
        }
        stage("Docker push Frontend Image"){
            steps{
                sh label: '', script: 'docker push docker-registry-server:5000/novisync-web-react-front-prod:${DOCKER_TAG}'
            }
        }
        stage("Deploy Frontend to k8s"){
            steps{
                
                   sh label: '', script: 'sshpass -f "/root/suresh/k8s-pro" scp -o StrictHostKeyChecking=no novisync-web-react-frontend.yml root@192.168.6.110:/root/suresh/'
               sh label: '', script: 'sshpass -f "/root/suresh/k8s-pro" ssh -o StrictHostKeyChecking=no root@192.168.6.110 \'kubectl apply -f /root/suresh/novisync-web-react-frontend.yml\''
            }        
        }
        
    }
} 
def getDockerTag(){
    def tag = sh script: ' git rev-parse HEAD', returnStdout: true
    return tag
}
