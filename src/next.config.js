const path = require('path');

module.exports = {
	i18n: {
		localeDetection: false,
		locales: ['en-US', 'de-DE'],
		defaultLocale: 'de-DE',
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'node_modules')],
	},
	future: {
		webpack5: true,
	},
};
