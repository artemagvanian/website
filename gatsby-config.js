module.exports = {
  siteMetadata: {
    title: `Artem Agvanian`,
    description: `Hi! My name is Artem and I am a front-end web developer. This is my personal website. Welcome!`,
    author: `Artem Agvanian`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artem Agvanian`,
        short_name: `Artem Agvanian`,
        start_url: `/`,
        background_color: `#f0f4ef`,
        theme_color: `#f0f4ef`,
        display: `minimal-ui`,
        icons: [],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
};
