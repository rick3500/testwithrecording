const cucumberHtmlReporter = require('cucumber-html-reporter');
const { mkdirSync } = require('fs');
const { join } = require('path');

const reportsDirectory = join(process.cwd(), 'reports');

if (!fs.existsSync(reportsDirectory)) {
  mkdirSync(reportsDirectory);
}

exports.config = {
  specs: ['./features/**/*.feature'],
  cucumberOpts: {
    require: ['./step_definitions/**/*.js'],
    format: ['json:reports/cucumber.json', 'html:reports/cucumber.html'],
    strict: true
  },
  onPrepare: () => {
    console.log('Running Cucumber with Protractor');
  },
  onComplete: () => {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'reports/cucumber.json',
      output: 'reports/cucumber.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
    };

    cucumberHtmlReporter.generate(options);
  }
};
