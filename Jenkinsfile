pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description:"enter the script path that you want to execute")
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
                bat "npx cypress run"
            }
        }
        stage('reporting'){
            steps{
                echo "deploy the app"
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }    
}