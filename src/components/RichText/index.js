import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.module.scss';
import clsx from 'clsx';

const RichText = ({ content, pageMeta, ...otherProps }) => {
	const mergedClassName = otherProps.className || null;
	delete otherProps.className;

	return (
		<div
			className={clsx(Styles.RichText, mergedClassName)}
			dangerouslySetInnerHTML={{ __html: content }}
			{...otherProps}
		/>
	);
};

RichText.propTypes = {
	content: PropTypes.any.isRequired,
	pageMeta: PropTypes.object,
};

export default RichText;
