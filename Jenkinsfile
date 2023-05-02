pipeline{
    agent any

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2E/**/*.feature", description:"enter the script path blablabla")
        choice(name: 'Browser', choices: ['chrome', 'edge'], description: "browser choice blablabla") 
    }

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