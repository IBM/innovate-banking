import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.module.scss';
import { Column } from 'carbon-components-react';

import Image from 'next/image';
import { Email32, LogoLinkedin32 } from '@carbon/icons-react';

const LetsTalkTeaser = ({ headline, copy, image, links }) => {
	return (
		<Column sm={4} md={4} lg={8} className={Styles.LetTalkTeaserColumn}>
			<div className={Styles.LetsTalkTeaser}>
				<Image src={image.src} width={image.width} height={image.height} layout="responsive" />
				<div className={Styles.Content}>
					<h5 className={Styles.Headline}>{headline}</h5>
					<p className={Styles.Copy}>{copy}</p>
					<ul className={Styles.LinkList}>
						{links.map((link, index) => {
							return (
								<li className={Styles.LinkListItem} key={index}>
									<a
										href={link.url}
										title={link.title}
										target="_blank"
										rel="noreferrer"
										className={Styles.Link}
									>
										<span>{link.title}</span>
										<span>
											{link.type === 'linkedIn' && <LogoLinkedin32 />}
											{link.type === 'email' && <Email32 />}
										</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Column>
	);
};

LetsTalkTeaser.propTypes = {
	headline: PropTypes.string.isRequired,
	copy: PropTypes.string.isRequired,
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	}).isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default LetsTalkTeaser;
