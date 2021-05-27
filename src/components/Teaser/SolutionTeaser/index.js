import { Column } from 'carbon-components-react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './styles.module.scss';

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
				<div className={Styles.IconHeadlineWrapper}>
					<span className={Styles.IconWrapper}>
						<IconComponent className={Styles.Icon} />
					</span>
					<h5 className={Styles.Headline}>{headline}</h5>
				</div>
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
