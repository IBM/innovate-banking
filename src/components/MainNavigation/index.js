import PropTypes from 'prop-types';
import React from 'react';

const MainNavigation = props => {
	return (
		<nav id="main">
			<ul>
				<li>Item #1</li>
				<li>Item #2</li>
				<li>Item #3</li>
			</ul>
		</nav>
	);
};

MainNavigation.propTypes = {
	items: PropTypes.array.isRequired,
};

export default MainNavigation;
