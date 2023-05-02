pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description:"enter the script path that you want to execute")
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

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/videos', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}