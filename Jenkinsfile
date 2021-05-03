@Library('jenkins-library-acid-base-github@0.49.0') _
pipeline {
  agent {
    label 'ibmdocker'
  }
  options {
    disableConcurrentBuilds()
  }
  environment {
    APP_KEY = 'node-app'
    PROJECT_KEY = 'smarter-banking-campaign'
    HARBOR_URL = 'acid-harbor.aperto.de'
    RELEASE_NUMBER = "0.0.1"
  }
  stages {
    stage ('Build Docker Images') {
      when {
        anyOf {
          branch 'develop'
          branch 'stage'
        }
      }
      steps {
        script {
          def secrets = [
             [$class: 'VaultSecret', path: "se/account/ldap_service_account/usr_docker_registry", secretValues: [
               [$class: 'VaultSecretValue', envVar: 'HARBOR_PASSWORD', vaultKey: 'password'],
             ]]
          ]
          wrap([$class: 'VaultBuildWrapper', vaultSecrets: secrets]) {
            sh '''
              echo "${HARBOR_PASSWORD}" | docker login --username="usr_docker_registry" --password-stdin acid-harbor.aperto.de
              docker build -t ${HARBOR_URL}/${PROJECT_KEY}/${APP_KEY}:${BRANCH_NAME} .
              docker push ${HARBOR_URL}/${PROJECT_KEY}/${APP_KEY}:${BRANCH_NAME}
              docker logout acid-harbor.aperto.de
            '''
          }
        }
      }
    }
    stage ('Build Docker Release Image') {
      when {
        branch 'master'
      }
      steps {
        script {
          def secrets = [
             [$class: 'VaultSecret', path: "se/account/ldap_service_account/usr_docker_registry", secretValues: [
               [$class: 'VaultSecretValue', envVar: 'HARBOR_PASSWORD', vaultKey: 'password'],
             ]]
          ]
          wrap([$class: 'VaultBuildWrapper', vaultSecrets: secrets]) {
            sh '''
              echo "${HARBOR_PASSWORD}" | docker login --username="usr_docker_registry" --password-stdin acid-harbor.aperto.de
              docker build -t ${HARBOR_URL}/${PROJECT_KEY}/${APP_KEY}:${RELEASE_NUMBER} .
              docker push ${HARBOR_URL}/${PROJECT_KEY}/${APP_KEY}:${RELEASE_NUMBER}
              docker logout acid-harbor.aperto.de
            '''
          }
        }
      }
    }
    stage ('Deploy Stage') {
      when {
        anyOf {
          branch 'develop'
          branch 'stage'
        }
      }
      steps {
        acidDeploy(
          this,
            [
              server: 'ibm-smarter-banking-campaign.stage.aperto.systems',
              user: 'ibm-smarter-banking-campaign',
              sourceDir: "docker-compose.yml",
              sourceDirIsDirectory: false,
              remoteDir: ".",
              executeCmds: """
                echo 'VERSION=${BRANCH_NAME}' > .env
                docker-compose pull
                docker-compose up -d --force-recreate
              """
            ]
        )
      }
    }
  }
  post {
     always {
        cleanWs()
     }
  }
}
