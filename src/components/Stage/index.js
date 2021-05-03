import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { Row, Grid, Column } from 'carbon-components-react';

import Styles from './styles.module.scss';

const Stage = ({ heading, subheading, image }) => {
	return (
		<div className={Styles.Stage}>
			<Image
				src={image.src}
				alt={image.alt}
				layout="fill"
				quality="100"
				objectFit="cover"
				objectPosition="center"
			/>
			{(heading || subheading) && (
				<Grid>
					<Row>
						<Column sm={4}>
							<div className={Styles.HeadingWrapper}>
								{heading && (
									<h1 className={Styles.Heading} dangerouslySetInnerHTML={{ __html: heading }} />
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

Stage.propTypes = {
	heading: PropTypes.string,
	subheading: PropTypes.string,
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		alt: PropTypes.string.isRequired,
	}),
};

export default Stage;
