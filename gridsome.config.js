// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.WEB_USER,
  siteUrl: '',
  siteDescription: 'THIS WEBSITE IS A TEST SITE',
  // userName: process.env.API_USER,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  plugins: [
    {
      use: '@gridsome/source-faker',
      options: {
        numNode: 50
      }
    }
  ]
}
