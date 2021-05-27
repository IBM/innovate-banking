import RichText from '@/components/RichText';
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react';
import { Column, Grid, Row } from 'carbon-components-react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { createRef, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Styles from './styles.module.scss';

const Accordion = ({ items }) => {
	const [activeItemIndex, setActiveItemIndex] = useState(null);

	const contentRefs = [];

	const onHeaderClick = (event, index) => {
		event.preventDefault();
		setActiveItemIndex(index === activeItemIndex ? null : index);
	};

	return (
		<Grid className={Styles.Accordion}>
			<Row className={Styles.AccordionList}>
				{items.map((item, index) => {
					const IconComponent = dynamic(() => import('@carbon/pictograms-react').then(mod => mod[item.icon]));

					const contentRef = createRef(null);
					contentRefs.push(contentRef);

					return (
						<Column
							sm={4}
							md={{
								span: 6,
								offset: 1,
							}}
							lg={{
								span: 12,
								offset: 2,
							}}
							className={clsx(Styles.AccordionListItem)}
							key={index}
							onClick={event => onHeaderClick(event, index)}
						>
							<div className={Styles.AccordionContent}>
								<Row>
									<Column
										sm={4}
										md={{
											span: 6,
											offset: 1,
										}}
										lg={{ span: 14, offset: 1 }}
									>
										<Row>
											<Column sm={4} md={8} lg={2}>
												<IconComponent className={Styles.Icon} />
											</Column>
											<Column
												sm={4}
												md={8}
												lg={{ offset: 1, span: 13 }}
												className={Styles.AccordionHeader}
											>
												<RichText content={item.headline} className={Styles.RichTextHeading} />
												{index === activeItemIndex && (
													<ChevronUp32 className={Styles.OpenCloseIcon} />
												)}
												{index !== activeItemIndex && (
													<ChevronDown32 className={Styles.OpenCloseIcon} />
												)}
											</Column>
										</Row>
										<Row>
											<Column sm={4} md={7} lg={{ offset: 3, span: 13 }}>
												<AnimateHeight
													duration={500}
													height={index === activeItemIndex ? 'auto' : 0}
												>
													<RichText content={item.content} className={Styles.RichText} />
												</AnimateHeight>
											</Column>
										</Row>
									</Column>
								</Row>
							</div>
						</Column>
					);
				})}
			</Row>
		</Grid>
	);
};

Accordion.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
			headline: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
		})
	),
};

export default Accordion;
