import PropTypes from 'prop-types';
import Head from 'next/head';
import MainLayout from '@/layouts/main';

import { renderComponent, cleanUrl } from '@/utils';

const DefaultPage = ({ meta, components }) => {
	let pageTitle = null;
	if (meta && meta.title) pageTitle = meta.title;
	if (meta && meta.slogan) pageTitle = pageTitle += ' - ' + meta.slogan;

	return (
		<>
			<Head>
				{pageTitle && <title>{pageTitle}</title>}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#5bbad5" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<MainLayout>
				{components &&
					components.map((componentData, index) =>
						renderComponent(componentData.name, componentData.props, index, meta)
					)}
			</MainLayout>
		</>
	);
};

DefaultPage.propTypes = {
	meta: PropTypes.object,
	components: PropTypes.array,
};

export const getServerSideProps = async context => {
	const pageDataReq = await fetch(cleanUrl(`${process.env.NEXT_ABSOLUTE_APP_URL}/api/page/index`));

	let pageData = {};

	if (pageDataReq.status === 200) {
		pageData = await pageDataReq.json();
	}

	return {
		props: pageData,
	};
};

export default DefaultPage;
