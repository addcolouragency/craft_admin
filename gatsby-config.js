module.exports = {
  siteMetadata: {
    title: `Craft Admin`,
    description: `The best ecommerce software.`,
    author: `@addcolouragency`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //  resolve: `gatsby-source-filesystem`,
    //  options: {
    //    name: `images`,
    //    path: `${__dirname}/src/images`,
    //  },
    // },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `medusa-admin`,
        short_name: `medusa`,
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/a/*`] },
    },
    "gatsby-plugin-portal",
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
  ],
}