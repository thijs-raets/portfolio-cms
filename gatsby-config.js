module.exports = {
    siteMetadata: {
        title: "Portfolio Thijs Raets",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/data`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [],
            },
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/img/favicon.png",
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-5V856XD",
                includeInDevelopment: false,
                defaultDataLayer: {platform: "gatsby"},
            },
        },
        "gatsby-plugin-netlify", // make sure to keep it last in the array
    ],
};
