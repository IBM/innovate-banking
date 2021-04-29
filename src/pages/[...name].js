import PropTypes from 'prop-types';
import Head from 'next/head';
import MainLayout from '@/layouts/main';

import { renderComponent, cleanUrl } from '@/utils';

const NamedPage = ({ meta, components }) => {
	let pageTitle = null;
	if (meta && meta.title) pageTitle = meta.title;
	if (meta && meta.slogan) pageTitle = pageTitle += ' - ' + meta.slogan;

	return (
		<>
			<Head>{pageTitle && <title>{pageTitle}</title>}</Head>
			<MainLayout>
				{components &&
					components.map((componentData, index) =>
						renderComponent(componentData.name, componentData.props, index, meta)
					)}
			</MainLayout>
		</>
	);
};

NamedPage.propTypes = {
	meta: PropTypes.object,
	components: PropTypes.array,
};

export const getServerSideProps = async context => {
	const pageDataReq = await fetch(cleanUrl(`${process.env.NEXT_ABSOLUTE_APP_URL}/api/page/${context.query.name}`));

	let pageData = {};

	if (pageDataReq.status === 200) {
		pageData = await pageDataReq.json();
	}

	return {
		props: pageData,
	};
};

export default NamedPage;
