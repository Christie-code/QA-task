const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
const APPURL = process.env.REACT_APP_URL || 'http://localhost:3000';


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  getCompareSnapshotsPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },

  env: {
    login: APPURL+'/',
    explore: APPURL+'/explore',
    sketch: APPURL+'/sketch',
  },
  
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});