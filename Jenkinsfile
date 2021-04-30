@Library('jenkins-library-acid-base-github@0.49.0') _
pipeline {
  agent {
    label 'ibmdocker'
  }
  options {
    disableConcurrentBuilds()
  }
  environment {
    PROJECT_KEY = 'smarter-banking-campaign'
    HARBOR_URL = 'acid-harbor.aperto.de'
    RELEASE_NUMBER = 0.0.1
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
        sh "docker build -t ${HARBOR_URL}/${PROJECT_KEY}:${BRANCH_NAME} ."
      }
    }
    stage ('Build Docker Images') {
      when {
        branch 'master'
      }
      steps {
        sh "docker build -t ${HARBOR_URL}/${PROJECT_KEY}:${RELEASE_NUMBER} ."
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
        sh "echo test"
      }
    }
  }
  post {
     always {
        cleanWs()
     }
  }
}
