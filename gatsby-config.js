/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Josie & Jonny`,
    description: `Please join us in celebrating the wedding of Josie Hiron & Jonny Brewster on 31st July, 2021 at Barnbougle Castle, Edinburgh`,
    author: `@haiw0n`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
  ],
}
