import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Row, Grid, Column, Button } from 'carbon-components-react';

import clsx from 'clsx';

import Styles from './styles.module.scss';
import { Menu32 } from '@carbon/icons-react';

const MainNavigation = ({ items, logoTitle }) => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpenState = () => {
		if (!isOpen) {
			document.body.style.position = 'fixed';
			document.body.style.top = `-${window.scrollY}px`;
		} else {
			document.body.style.position = null;
			document.body.style.top = null;
		}
		setIsOpen(!isOpen);
	}

	return (
		<header className={clsx(Styles.NavHeader, isOpen && Styles.IsOpen)}>
			<Button className={Styles.MobileMenuIcon} onClick={toggleOpenState}>
				<Menu32 />
			</Button>
			<Grid className={Styles.NavGrid}>
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
									return item.active ? (
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
									) : null;
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
