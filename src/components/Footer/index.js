import { Column, Grid, Link, Row } from 'carbon-components-react';
import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import BackToTopButton from '../BackToTopButton';
import Styles from './styles.module.scss';

const Footer = ({ links }) => {
	return (
		<>
			<footer className={Styles.Footer}>
				<Grid>
					<Row>
						<Column sm={4} md={2} lg={5} className={clsx(Styles.Logo, Styles.FooterColumn)}>
							<Link href="/">
								<Image src="/svg/ibm-logo.svg" width={88} height={35} />
							</Link>
						</Column>
						<Column sm={4} md={2} lg={4} className={clsx(Styles.Claim, Styles.FooterColumn)}>
							Innovate Banking ist eine Initiative von&nbsp;IBM zur&nbsp;nachhaltigen digitalen
							Transformation.
						</Column>
						<Column
							sm={4}
							md={{
								span: 3,
								offset: 1,
							}}
							lg={{
								span: 5,
								offset: 1,
							}}
						>
							<ul className={Styles.LinkList}>
								{links.map((link, index) => {
									return (
										<li className={Styles.LinkListItem} key={index}>
											<Link href={link.url} className={Styles.Link}>
												{link.title}
											</Link>
										</li>
									);
								})}
							</ul>
						</Column>
					</Row>
				</Grid>
			</footer>
			<BackToTopButton />
		</>
	);
};

Footer.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Footer;
