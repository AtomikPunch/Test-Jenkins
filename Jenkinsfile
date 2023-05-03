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
                //npm install -g mochawesome-report-generator
            }
        }
        stage('testing'){
            steps{
                bat "npx cypress run --reporter mochawesome"
            }
        }
        stage('generating general report'){
            steps{
                echo "generate general reporting in json format"
                bat "npx mochawesome-merge cypress/reports/*.json -o cypress/reports/final_report.json"
                echo "generate report in html format"
                bat "npx marge cypress/reports/final_report.json -o cypress/reports --reportFilename report.html"
            }
        }
        stage('publish report'){
            steps{
                echo "publish reporting in jenkins"
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, includes: '**/*', keepAll: false, reportDir: 'cypress/reports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }    
}