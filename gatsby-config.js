module.exports = {
  siteMetadata: {
      title: `Project Gatsby the cats`,
      description: `My very first Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `About`,
        link: `/about`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
    ]
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
        __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
  ]
};