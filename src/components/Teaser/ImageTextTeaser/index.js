import RichText from '@/components/RichText';
import { ArrowRight24 } from '@carbon/icons-react';
import { Column, Link } from 'carbon-components-react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './styles.module.scss';

const ImageTextTeaser = ({ text, image, link }) => {
	return (
		<Column sm={4} md={4} lg={8}>
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
