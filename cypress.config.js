const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://jsonplaceholder.typicode.com', // HTTP
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {},
  },
})