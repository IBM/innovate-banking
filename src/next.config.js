module.exports = {
	distDir: './.dist', // throws error when building into ../dst
	i18n: {
		localeDetection: false,
		locales: ['en-US', 'de-DE'],
		defaultLocale: 'de-DE',
	},
};
