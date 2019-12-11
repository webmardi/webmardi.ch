module.exports = {
  pathPrefix: "/webmardi.ch",
  siteMetadata: {
    title: `Webmardi`,
    author: `@webmardi`,
    description: `Webmardi is a Swiss-based association that organises free monthly events in western Switzerland. We offer the opportunity for people to meet their local community and bring together developers, designers, project owners, founders & many more.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sliderImages`,
        path: `${__dirname}/src/images/images-slider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sessions`,
        path: `${__dirname}/data/sessions`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `webmardi`,
        short_name: `webmardi`,
        start_url: `/`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
