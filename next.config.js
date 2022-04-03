const path = require('path')

module.exports = {
  async redirects() {
    return [
      {
        source: '/anwendungssysteme',
        destination: '/core-banking',
        permanent: true,
      },
      {
        source: '/banking-plattform',
        destination: '/banking-platform',
        permanent: true,
      },
      {
        source: '/kundenerlebnis',
        destination: '/customer-experience',
        permanent: true,
      },
      {
        source: '/prozess-transformation',
        destination: '/digitales-banking',
        permanent: true,
      },
      {
        source: '/risk-compliance',
        destination: '/banking-compliance',
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
