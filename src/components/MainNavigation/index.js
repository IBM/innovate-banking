import PropTypes from 'prop-types';
import React from 'react';

import clsx from 'clsx';

import Styles from './styles.module.scss';

const MainNavigation = ({ items }) => {
	return (
		<nav id="main" className={Styles.MainNavigation}>
			<ul className={Styles.List}>
				{items.map((item, index) => {
					return (
						<li key={index} className={clsx(Styles.ListItem, item.current && Styles.ListItemActive)}>
							<a
								href={item.url}
								className={clsx(Styles.ListItemLink, item.current && Styles.ListItemLinkActive)}
							>
								{item.name}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

MainNavigation.propTypes = {
	items: PropTypes.array.isRequired,
};

export default MainNavigation;
