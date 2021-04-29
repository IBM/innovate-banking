import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.module.scss';
import { Column, Link } from 'carbon-components-react';

import RichText from '@/components/RichText';
import Image from 'next/image';
import { ArrowRight24 } from '@carbon/icons-react';

const ImageTextTeaser = ({ text, image, link }) => {
	return (
		<Column sm={2} md={4} lg={8}>
			<Link href={link} className={Styles.ImageTextTeaser} target="_blank">
				<Image
					src={image.src}
					width={image.width}
					height={image.height}
					layout={image.layout || 'intrinsic'}
					className={Styles.Image}
				/>
				<RichText content={text} className={Styles.RichText} />
				<ArrowRight24 className={Styles.Icon} />
			</Link>
		</Column>
	);
};

ImageTextTeaser.propTypes = {
	text: PropTypes.string.isRequired,
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		layout: PropTypes.string,
	}).isRequired,
	link: PropTypes.string.isRequired,
};

export default ImageTextTeaser;
