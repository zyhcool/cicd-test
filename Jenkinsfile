node {

    stage("Prepare"){
        echo "Preparing..."
    }

    stage('Build') {
        echo "Building..."
        sh "docker run -t cicd-test ."
    }

    stage('Deploy-Testing-Env') {
        echo "Deploying..."
        sh "docker-compose up -d"
    }
}
