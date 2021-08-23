module.exports = {
  siteMetadata: {
    title: `Samuel N.`,
    description: `Pagina web personal.`,
    author: `SamuelNarciso`,
    siteUrl: `samuelnarciso.tk`,
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                p:'parrafo',
                h1: 'titulo',
                h2: 'subtitulo',
                code: 'gatsby-highlight'
              }
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              quality: 80,
              showCaptions: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'nofollow',
            },
          },

          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "SamuelNarciso",
              short_name: "SamuelN",
              start_url: "/",
              background_color: "#f1f1f1",
              theme_color: "#2d3047",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/images/icon.png", // This path is relative to the root of the site.
              // An optional attribute which provides support for CORS check.
              // If you do not provide a crossOrigin option, it will skip CORS for manifest.
              // Any invalid keyword or empty string defaults to `anonymous`
              crossOrigin: `use-credentials`,
            },
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
