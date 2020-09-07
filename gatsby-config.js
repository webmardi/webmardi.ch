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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158849142-1",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://webmardi.us3.list-manage.com/subscribe/post?u=7d8f67d1605a1d4858b9a8c32&amp;id=27d71f62b4',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
