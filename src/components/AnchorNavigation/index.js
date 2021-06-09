import { translate } from '@/utils';
import { AddComment20 } from '@carbon/icons-react';
import { Column, Dropdown, Grid, Link, Row } from 'carbon-components-react';
import clsx from 'clsx';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import Sticky from 'react-sticky-el';
import Styles from './styles.module.scss';

const AnchorNavigation = ({ intl, items, router, pageMeta }) => {
	const sloganListItemRef = React.createRef(null);
	const [activeItem, setActiveItem] = useState(null);
	const [sectionInViewportChangeEvent, setSectionInViewportChangeEvent] = useState(false);

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

	const mobileItems = items.slice(1);

	const onSectionInViewportChangeEvent = event => {
		for (let index = 0; index < items.length; index++) {
			const item = items[index];
			if (
				item.link === event.detail.id &&
				((event.detail.inViewport === true && event.detail.leave === false) ||
					(event.detail.inViewport === false && event.detail.enter === true))
			) {
				return setActiveItem(index);
			}
		}
	};

	useEffect(() => {
		if (sectionInViewportChangeEvent === false && window !== undefined) {
			window.addEventListener('SectionInViewportChange', onSectionInViewportChangeEvent);
			setSectionInViewportChangeEvent(true);
		}
	}, [sectionInViewportChangeEvent]);

	return (
		<>
			<Sticky className={Styles.StickyWrapper} onFixedToggle={onFixedToggle}>
				<div className={Styles.AnchorNavigation} ref={sloganListItemRef}>
					<Grid className={Styles.Grid}>
						<Row>
							<Column sm={0} md={8}>
								<ul className={Styles.List}>
									{items.map((item, index) => {
										return (
											<li
												key={index}
												className={clsx(
													Styles.ListItem,
													item.isTop && Styles.IsSloganItem,
													item.isLetsTalkItem && Styles.IsLetsTalkListItem
												)}
											>
												<Link
													href={`#${item.link}`}
													className={clsx(
														Styles.Link,
														activeItem === index && Styles.IsActive,
														item.isLetsTalkItem && Styles.IsLetsTalkLink
													)}
													onClick={event => {
														onAnchorClick(event, index);
													}}
												>
													{!item.isLetsTalkItem && item.name}
													{item.isLetsTalkItem &&
														translate(
															intl,
															'components.AnchorNavigation.letsTalkButtonText'
														)}
													{item.isLetsTalkItem && (
														<AddComment20 className={Styles.LetsTalkIcon} />
													)}
												</Link>
											</li>
										);
									})}
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
							items={mobileItems}
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
