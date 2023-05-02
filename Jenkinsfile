pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description:"enter the script path that you want to execute")
    }

    stages{
        stage('build'){
            steps{
                echo "building app"
            }
        }
        stage('testing'){
            steps{
                bat "npm i"
                bat "npx cyress run"
            }
        }
        stage('deploying'){
            steps{
                echo "deploy the app"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/videos', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}