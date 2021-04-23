import PropTypes from 'prop-types';
import Head from 'next/head';

import { renderComponent } from '@/utils';

const DefaultPage = ({ pageData, ...props }) => {
	return (
		<>
			<Head>
				<title>{pageData.meta.title}</title>
			</Head>
			<div id="main">
				{pageData.components &&
					pageData.components.map((componentData, index) =>
						renderComponent(componentData.name, componentData.props, index)
					)}
			</div>
		</>
	);
};

DefaultPage.propTypes = {
	pageData: PropTypes.object.isRequired,
};

export default DefaultPage;
