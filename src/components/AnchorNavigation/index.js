import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Grid, Column, Link, Dropdown } from 'carbon-components-react';
import Sticky from 'react-sticky-el';
import { withRouter } from 'next/router';

import { injectIntl } from 'react-intl';
import clsx from 'clsx';

import { translate } from '@/utils';

import Styles from './styles.module.scss';
import { AddComment20 } from '@carbon/icons-react';

const AnchorNavigation = ({ intl, items, router, pageMeta }) => {
	const sloganListItemRef = React.createRef(null);
	const [activeItem, setActiveItem] = useState(null);

	const onAnchorClick = (event, index) => {
		setActiveItem(index);
	};

	const onFixedToggle = fixed => {
		if (fixed) {
			sloganListItemRef.current.classList.add(Styles.IsFixed);
		} else {
			sloganListItemRef.current.classList.remove(Styles.IsFixed);
		}
	};

	const onDropdownChange = event => {
		setActiveItem(event.selectedItem.index);
		window.location.hash = `#${event.selectedItem.link}`;
	};

	return (
		<>
			<Sticky className={Styles.StickyWrapper} onFixedToggle={onFixedToggle}>
				<div className={Styles.AnchorNavigation} ref={sloganListItemRef}>
					<Grid>
						<Row>
							<Column sm={0} md={8}>
								<ul className={Styles.List}>
									{pageMeta && pageMeta.slogan && (
										<li className={clsx(Styles.ListItem, Styles.IsSloganItem)}>
											<Link
												href="#top"
												title={pageMeta.slogan}
												className={clsx(Styles.Link, activeItem === null && Styles.IsActive)}
												onClick={event => {
													onAnchorClick(event, null);
												}}
											>
												{pageMeta.slogan}
											</Link>
										</li>
									)}
									{items.map((item, index) => {
										return (
											<li key={index} className={Styles.ListItem}>
												<Link
													href={`#${item.link}`}
													className={clsx(
														Styles.Link,
														activeItem === index && Styles.IsActive
													)}
													onClick={event => {
														onAnchorClick(event, index);
													}}
												>
													{item.name}
												</Link>
											</li>
										);
									})}
									<li className={clsx(Styles.ListItem, Styles.IsLetsTalkListItem)}>
										<Link
											href="#letstalk"
											className={clsx(
												Styles.Link,
												Styles.IsLetsTalkLink,
												activeItem === items.length + 1 && Styles.IsActive
											)}
											onClick={event => {
												onAnchorClick(event, items.length + 1);
											}}
										>
											{translate(intl, 'components.AnchorNavigation.letsTalkButtonText')}
											<AddComment20 className={Styles.LetsTalkIcon} />
										</Link>
									</li>
								</ul>
							</Column>
						</Row>
					</Grid>
				</div>
			</Sticky>
			<Grid>
				<Row>
					<Column sm={4} md={0} className={Styles.DropdownColumn}>
						<Dropdown
							id="inline"
							label={translate(intl, 'components.AnchorNavigation.dropdownLabel')}
							items={items}
							itemToString={item => (item ? item.name : '')}
							onChange={onDropdownChange}
							className={Styles.Dropdown}
						/>
					</Column>
				</Row>
			</Grid>
		</>
	);
};

AnchorNavigation.propTypes = {
	intl: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
	router: PropTypes.object,
	pageMeta: PropTypes.object,
};

export default withRouter(injectIntl(AnchorNavigation));
