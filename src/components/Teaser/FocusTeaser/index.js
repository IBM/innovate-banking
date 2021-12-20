import RichText from '@/components/RichText';
import { Column, Link } from 'carbon-components-react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './styles.module.scss';

const FocusTeaser = ({ headline, text, image, link, teaserIndex, teaserCount, light, dark, condensed }) => {
	let IconComponent = null;

	if (link && link.url) {
		IconComponent = dynamic(() => import('@carbon/icons-react').then(mod => mod[link.icon || 'ArrowRight24']));
	}

	const smSizeOuter = 4;
	let mdSizeOuter = 4;
	let lgSizeOuter = 8;
	let maxSizeOuter = 8;

	const smSizeLeft = 4;
	let mdSizeLeft = 8;
	let lgSizeLeft = 16;

	if (image) {
		mdSizeOuter = 8;
		lgSizeOuter = 16;
		mdSizeLeft = 4;
		lgSizeLeft = 8;
		maxSizeOuter = 16;
	}

	if (condensed && image === undefined) {
		mdSizeOuter = 4;
		lgSizeOuter = 8;
	}

	return (
		<Column
			sm={smSizeOuter}
			md={mdSizeOuter}
			lg={lgSizeOuter}
			max={maxSizeOuter}
			className={clsx(Styles.FocusTeaserColumn)}
		>
			<Link
				className={clsx(
					Styles.FocusTeaser,
					light && Styles.IsLight,
					dark && Styles.IsDark,
					link.url === undefined && Styles.IsInactive
				)}
				href={link.url}
				title={link.title}
			>
				<Column sm={smSizeLeft} md={mdSizeLeft} lg={lgSizeLeft} className={Styles.LeftColumn}>
					<h5 className={Styles.Headline} dangerouslySetInnerHTML={{ __html: headline }} />
					<RichText content={text} className={Styles.RichText} />
					{link && (
						<span className={Styles.Link}>
							{link.title && <span className={Styles.Text}>{link.title}</span>}
							{IconComponent && <IconComponent />}
						</span>
					)}
				</Column>
				{image && image.simulate !== true && (
					<Column sm={0} md={4} lg={8} className={Styles.RightColumn}>
						<Image
							src={image.src}
							width={image.width}
							height={image.height}
							layout={image.layout || 'intrinsic'}
						/>
					</Column>
				)}
			</Link>
		</Column>
	);
};

FocusTeaser.propTypes = {
	headline: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	image: PropTypes.shape({
		src: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		layout: PropTypes.string,
		simulate: PropTypes.bool,
	}),
	link: PropTypes.shape({
		title: PropTypes.string,
		url: PropTypes.string,
		icon: PropTypes.string,
	}),
	teaserIndex: PropTypes.number,
	teaserCount: PropTypes.number,
	light: PropTypes.bool,
	dark: PropTypes.bool,
	condensed: PropTypes.bool,
};

export default FocusTeaser;
