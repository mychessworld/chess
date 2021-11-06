/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-image`,
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
            `gatsby-transformer-remark`,
              {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
              },
            },
          ],
            siteMetadata: {
              title: 'Simple Chess',
              description: 'Site about chess',
              copyright: 'This website is copyright 2021 Simple chess',
              contact: 'sergnakhodka@gmail.com'
            },
}


