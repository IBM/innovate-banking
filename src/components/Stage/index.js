import { Column, Grid, Row } from 'carbon-components-react';
import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './styles.module.scss';

const Stage = ({ heading, subheading, image, imageMobile, isHome }) => {
	return (
		<div className={clsx(Styles.Stage, isHome && Styles.StageHome)}>
			<div className={Styles.ImageHiddenMobile}>
				<Image
					src={image.src}
					alt={image.alt}
					layout="fill"
					quality="100"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className={Styles.ImageMobile}>
				<Image
					src={imageMobile.src}
					alt={imageMobile.alt}
					layout="fill"
					quality="100"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			{(heading || subheading) && (
				<Grid>
					<Row>
						<Column sm={4}>
							<div className={clsx(Styles.HeadingWrapper, isHome && Styles.HeadingWrapperHome)}>
								{heading && (
									<h1
										className={clsx(Styles.Heading, isHome && Styles.HeadingHome)}
										dangerouslySetInnerHTML={{ __html: heading }}
									/>
								)}
								{subheading && (
									<h2
										className={Styles.Subheading}
										dangerouslySetInnerHTML={{ __html: subheading }}
									/>
								)}
							</div>
						</Column>
					</Row>
				</Grid>
			)}
		</div>
	);
};

Stage.defaultProps = {
	isHome: false,
};

Stage.propTypes = {
	heading: PropTypes.string,
	subheading: PropTypes.string,
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		alt: PropTypes.string.isRequired,
	}),
	imageMobile: PropTypes.shape({
		src: PropTypes.string.isRequired,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		alt: PropTypes.string.isRequired,
	}),
	isHome: PropTypes.bool,
};

export default Stage;
