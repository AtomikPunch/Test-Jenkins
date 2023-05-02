pipeline{

    options{
        ansiColor('xterm')
    }

    stages{
        stage('build'){
            echo "building app"
        }
        stage('testing'){
            steps{
                bat "npm i"
                bat "npx cyress run"
            }
        }
        stage('deploying'){
            echo "deploy the app"
        }
    }
}