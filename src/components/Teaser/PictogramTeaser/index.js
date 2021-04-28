import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'carbon-components-react';

import dynamic from 'next/dynamic';

import Styles from './styles.module.scss';
import clsx from 'clsx';

const PictogramTeaser = ({ icon, headline, text, teaserIndex, teaserCount }) => {
	const IconComponent = dynamic(() => import('@carbon/pictograms-react').then(mod => mod[icon]));

	return (
		<Column sm={4} md={8} lg={5} className={Styles.PictogramTeaserCol}>
			<div
				className={clsx(
					Styles.PictogramTeaser,
					Styles[`TeaserIndex${teaserIndex}`],
					Styles[`TeaserCount${teaserCount}`]
				)}
			>
				<span className={Styles.IconWrapper}>
					<IconComponent className={Styles.Icon} />
				</span>
				<h5 className={Styles.Headline}>{headline}</h5>
				<p className={Styles.Text}>{text}</p>
			</div>
		</Column>
	);
};

PictogramTeaser.propTypes = {
	icon: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	teaserIndex: PropTypes.number.isRequired,
	teaserCount: PropTypes.number.isRequired,
};

export default PictogramTeaser;
