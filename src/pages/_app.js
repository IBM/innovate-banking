/* eslint-disable react/prop-types */
import App from 'next/app';
import { createIntlCache, createIntl, RawIntlProvider } from 'react-intl';
import { cleanUrl } from '@/utils';

import de_DE from '@/i18n/de-DE.flat.json';
import en_US from '@/i18n/en-US.flat.json';

const cache = createIntlCache();

function MyApp({ Component, pageProps, pageData, locale, messages }) {
	const intl = createIntl(
		{
			locale,
			messages,
		},
		cache
	);

	return (
		<RawIntlProvider value={intl}>
			<Component {...pageProps} pageData={pageData} />
		</RawIntlProvider>
	);
}

MyApp.getInitialProps = async appContext => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	const pageDataReq = await fetch(
		cleanUrl(`${process.env.NEXT_ABSOLUTE_APP_URL}/api/page/${appContext.router.pathname}`)
	);

	let pageData = {};

	if (pageDataReq.status === 200) {
		pageData = await pageDataReq.json();
	} else {
		throw new Error(pageDataReq.statusText);
	}

	appProps.pageData = pageData;

	return { ...appProps, locale: appContext.router.locale, messages: { de_DE, en_US } };
};

export default MyApp;
