pipeline{

    agent any

    parameters{
        //string(name: 'SPEC', defaultValue: "cypress/e2e/**", description:"enter the script path that you want to execute")
        choice(name: 'SPEC', choices: ['duckduckgo', 'test', 'anotherone'], description: 'enter the script path that you want to execute')
    }

    stages{
        stage('install prerequisite'){
            steps{
                bat "npm install cypress"
                bat "npm install -save-dev cypress-cucumber-preprocessor "
            }
        }
        stage('testing'){
            steps{
                bat "npx cypress run --reporter mochawesome"
            }
        }
        stage('reporting'){
            steps{
                echo "deploy the app"
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }    
}