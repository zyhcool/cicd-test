node {

    stage("Prepare"){
        echo "Preparing..."
        checkout scm
        echo "Prepare success"
    }

    stage('Build') {
        echo "Building..."
        sh "docker build -t cicd-test ."
        echo "Build success"
    }

    stage('Deploy-Testing-Env') {
        echo "Deploying..."
        sh "docker-compose up -d"
        echo "Deploy success"
    }
}
