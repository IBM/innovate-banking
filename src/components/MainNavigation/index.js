import PropTypes from 'prop-types';
import React from 'react';
import { Row, Grid, Column } from 'carbon-components-react';

import clsx from 'clsx';

import Styles from './styles.module.scss';

const MainNavigation = ({ items, logoTitle }) => {
	return (
		<header className={Styles.NavHeader}>
			<Grid>
				<Row>
					<Column sm={4}>
						<nav className={clsx(Styles.MainNavigation, logoTitle && Styles.HasLogoTitle)}>
							<ul className={Styles.List}>
								<li className={clsx(Styles.ListItem, logoTitle && Styles.HasLogoTitle)}>
									<a href="/" className={Styles.ListItemLink}>
										<img src="/svg/logo.svg" height={42} width={66} />
										{logoTitle && <span className={Styles.LogoTitle}>{logoTitle}</span>}
									</a>
								</li>
								{items.map((item, index) => {
									return (
										<li
											key={index}
											className={clsx(Styles.ListItem, item.current && Styles.ListItemActive)}
										>
											<a
												href={item.url}
												className={clsx(
													Styles.ListItemLink,
													item.current && Styles.ListItemLinkActive,
													index === 0 && Styles.IsFirstLink
												)}
												style={{
													display: !item.active ? 'none' : null,
												}}
											>
												{item.name}
											</a>
										</li>
									);
								})}
							</ul>
						</nav>
					</Column>
				</Row>
			</Grid>
		</header>
	);
};

MainNavigation.propTypes = {
	items: PropTypes.array.isRequired,
	pageMeta: PropTypes.object,
	logoTitle: PropTypes.string,
};

export default MainNavigation;
