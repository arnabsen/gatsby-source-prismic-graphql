/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const { registerLinkResolver } = require('@prismicio/gatsby-source-prismic-graphql');

registerLinkResolver(require('./src/utils/linkResolver').linkResolver);
