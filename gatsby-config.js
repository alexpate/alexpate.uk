module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: 'Alex Pate',
    title: `Alex Pate - UI Engineer`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/articles`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
  ],
};