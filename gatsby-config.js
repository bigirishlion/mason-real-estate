/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Isaiah Mason Real Estate Broker`,
    siteUrl: `https://www.isaiahmasonrealestate.com`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/elk-head.png"
    }
  }]
};