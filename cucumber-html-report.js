const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: 'cypress/reports/cucumber-htmlreport.html/',
  metadata: {
    browser: {
      name: "chrome",
      version: "125",
    },
    device: "Local test machine",
    platform: {
      name: "macOS",
      version: "14.5",
    },
  },
  displayDuration: true,
  customData: {
    title: 'Cypress POM Cucumber Report',
    data: [
      { label: 'Project', value: 'E-Commerce-project' },
      { label: 'Generated On', value: new Date().toLocaleDateString() }
    ]
  }
});