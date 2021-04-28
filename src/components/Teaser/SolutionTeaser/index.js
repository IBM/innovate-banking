import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'carbon-components-react';

import dynamic from 'next/dynamic';

import Styles from './styles.module.scss';
import clsx from 'clsx';

const SolutionTeaser = ({ icon, headline, text, teaserIndex, teaserCount }) => {
	const IconComponent = dynamic(() => import('@carbon/icons-react').then(mod => mod[icon]));

	return (
		<Column sm={4} md={4} lg={4} className={Styles.SolutionTeaserCol}>
			<div
				className={clsx(
					Styles.SolutionTeaser,
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

SolutionTeaser.propTypes = {
	icon: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	teaserIndex: PropTypes.number.isRequired,
	teaserCount: PropTypes.number.isRequired,
};

export default SolutionTeaser;
