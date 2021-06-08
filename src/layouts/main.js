import PropTypes from 'prop-types';
import React from 'react';
import Styles from './main.styles.module.scss';

const MainLayout = ({ children }) => {
	return <div className={Styles.MainLayout}>{children}</div>;
};

MainLayout.propTypes = {
	children: PropTypes.any,
};

export default MainLayout;
