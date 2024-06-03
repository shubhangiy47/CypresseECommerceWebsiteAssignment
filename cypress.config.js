const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  env: {
    baseUrl: 'https://automationteststore.com/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())

      on('after:run', () => {
        // Merge and generate the report after the run completes
        const { merge } = require('mochawesome-merge')
        const { create } = require('mochawesome-report-generator')

        merge({
          files: ['./cypress/reports/*.json']
        }).then(report => create(report))
      })
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: false,
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  }
  
});
