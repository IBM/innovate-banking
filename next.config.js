const path = require('path')

module.exports = {
  async redirects() {
    return [
      {
        source: '/banking-plattform',
        destination: '/banking-platform',
        permanent: true,
      },
    ]
  },
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
}
