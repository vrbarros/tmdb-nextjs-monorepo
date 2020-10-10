const { MOVIES_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/movies/:path*',
        destination: `${MOVIES_URL}/movies/:path*`,
      },
    ];
  },
};
