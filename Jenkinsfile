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
        stage('deploying'){
            steps{
                echo "deploy the app"
            }
        }
    }
}