const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@tmdb/components'], {
  unstable_webpack5: true,
});

const { MOVIES_URL } = process.env;

module.exports = withTM();

// module.exports = withPlugins([withTM], {
//   target: 'serverless',
//   async rewrites() {
//     return [
//       {
//         source: '/movies',
//         destination: `${MOVIES_URL}/movies`,
//       },
//       {
//         source: '/movies/:path*',
//         destination: `${MOVIES_URL}/movies/:path*`,
//       },
//     ];
//   },
// });
