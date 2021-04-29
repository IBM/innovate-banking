import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.module.scss';
import RichText from '@/components/RichText';
import clsx from 'clsx';

import AnimateHeight from 'react-animate-height';

import dynamic from 'next/dynamic';
import { Column, Grid, Row } from 'carbon-components-react';
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react';

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
										<span className={Styles.AccordionHeader}>
											<IconComponent className={Styles.Icon} />
											<RichText content={item.headline} className={Styles.RichTextHeading} />
											{index === activeItemIndex && <ChevronUp32 />}
											{index !== activeItemIndex && <ChevronDown32 />}
										</span>
										<AnimateHeight duration={500} height={index === activeItemIndex ? 'auto' : 0}>
											<RichText content={item.content} className={Styles.RichText} />
										</AnimateHeight>
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
