/* eslint-disable react/prop-types */
import App from 'next/app';
import { createIntlCache, createIntl, RawIntlProvider } from 'react-intl';

import de_DE from '../i18n/de-DE.flat.json';
import en_US from '../i18n/en-US.flat.json';

import '../styles/globals.css';

const cache = createIntlCache();

function MyApp({ Component, pageProps, locale, messages }) {
	const intl = createIntl(
		{
			locale,
			messages,
		},
		cache
	);

	return (
		<RawIntlProvider value={intl}>
			<Component {...pageProps} />
		</RawIntlProvider>
	);
}

MyApp.getInitialProps = async appContext => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps, locale: appContext.router.locale, messages: { de_DE, en_US } };
};

export default MyApp;
