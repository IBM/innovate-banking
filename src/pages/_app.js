/* eslint-disable react/prop-types */
import { createIntlCache, createIntl, RawIntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

import de_DE from '@/i18n/de-DE.flat.json';
import en_US from '@/i18n/en-US.flat.json';

import '@/styles/reset.css';
import '@/styles/globals.scss';
import '@/styles/carbon-theme.scss';

const cache = createIntlCache();

function MyApp({ Component, pageProps, pageData, locale, messages }) {
	const router = useRouter();

	const intl = createIntl(
		{
			locale,
			messages: messages[router.locale || router.defaultLocale],
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
	// const appProps = await App.getInitialProps(appContext);
	// const pageName = typeof appContext.router.query.name !== 'undefined' ? appContext.router.query.name : 'home';
	// const pageDataReq = await fetch(cleanUrl(`${process.env.NEXT_ABSOLUTE_APP_URL}/api/page/${pageName}`));

	// let pageData = {};

	// if (pageDataReq.status === 200) {
	// 	pageData = await pageDataReq.json();
	// }

	// appProps.pageData = pageData;

	return {
		locale: appContext.router.locale,
		messages: { 'de-DE': de_DE, 'en-US': en_US },
	};
};

export default MyApp;
