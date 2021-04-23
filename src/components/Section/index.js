import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
	return <section>{children}</section>;
};

Section.propTypes = {
	children: PropTypes.any,
};

export default Section;
