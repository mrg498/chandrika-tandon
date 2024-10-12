module.exports = {
  pathPrefix: "/chandrika-tandon",
  siteMetadata: {
    title: `Chandrika Tandon`,
    description: `Chandrika Tandon is a recognized business leader, Grammy-nominated artist and humanitarian who is dedicated to addressing issues in education, the arts, and wellbeing. A former partner of McKinsey and Company, Ms. Tandon founded and chairs her advisory and investment firm, Tandon Capital Associates, focusing on transformation of institutions to achieve excellence. Additionally, she oversees the Krishnamurthy Tandon Foundation and Soul Chants Music, a nonprofit music label. She has produced several albums, of which Soul Call was nominated for a Grammy award. Her “limpid, serene voice” (The New York Times) has filled major venues around the world. Ms. Tandon staged her most recent album’s world premiere, Shivoham - The Quest, at the John F. Kennedy Center for the Performing Arts.`,
    author: `@milesgrossenbacher`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `index_videos`,
        path: `${__dirname}/content/index/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/chandrika-tandon/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
