import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import ConditionalWrapper from '@/components/ConditonalWrapper';

import Styles from './styles.module.scss';
import clsx from 'clsx';

import { Grid, Row, Column } from 'carbon-components-react';

import RichText from '@/components/RichText';

const Section = ({
	id,
	titles,
	children,
	images,
	background,
	colWrapChildren,
	rowWrapChildren,
	condensed,
	noSpace,
	narrow,
	fullWidth,
}) => {
	let backgroundStyle = null;

	if (background && background.color) {
		backgroundStyle = background.color;
	}

	if (background && background.gradient) {
		backgroundStyle = background.gradient;
	}

	let hasLeftOrRightContent = false;
	if (titles && titles.left) hasLeftOrRightContent = true;
	if (titles && titles.right) hasLeftOrRightContent = true;
	if (images && images.left) hasLeftOrRightContent = true;
	if (images && images.right) hasLeftOrRightContent = true;

	return (
		<section
			id={id}
			style={{
				background: backgroundStyle,
			}}
		>
			<Grid>
				<div
					className={clsx(
						Styles.Section,
						titles && Styles.Titled,
						titles && titles.top && Styles.HasTopTitle,
						titles && titles.right && Styles.HasRightTitle,
						titles && titles.bottom && Styles.HasBottomTitle,
						titles && titles.left && Styles.HasLeftTitle,
						images && images.top && Styles.HasTopImage,
						images && images.right && Styles.HasRightImage,
						images && images.bottom && Styles.HasBottomImage,
						images && images.left && Styles.HasLeftImage,
						background && background.dark && Styles.HasDarkBackground,
						condensed && condensed.top && Styles.IsCondensedTop,
						condensed && condensed.bottom && Styles.IsCondensedBottom,
						narrow && narrow.top && Styles.IsNarrowTop,
						narrow && narrow.bottom && Styles.IsNarrowBottom,
						noSpace && noSpace.bottom && Styles.IsNoSpaceBottom,
						noSpace && noSpace.top && Styles.IsNoSpaceTop
					)}
				>
					{images && images.top && (
						<Row>
							<div
								className={Styles.TopImage}
								style={{
									display: images.top.layout === 'intrinsic' ? 'flex' : null,
									justifyContent: images.top.layout === 'intrinsic' ? 'center' : null,
									margin: images.top.margin,
								}}
							>
								<Image
									src={images.top.src}
									layout={images.top.layout || 'intrinsic'}
									width={images.top.layout !== 'fill' ? images.top.width : null}
									height={images.top.layout !== 'fill' ? images.top.height : null}
								/>
							</div>
						</Row>
					)}
					{titles && titles.top && (
						<Row>
							<Column sm={4} md={6} lg={8}>
								<RichText
									className={Styles.Title}
									content={titles.top !== true ? titles.top : '&nbsp;'}
									style={{
										transform: titles.offsetTop ? `translateY(${titles.offsetTop})` : null,
									}}
								/>
							</Column>
						</Row>
					)}
					<Row>
						{((titles && titles.left) || (images && images.left)) && (
							<Column sm={4} md={2} lg={4} className={Styles.LeftSide}>
								{titles && titles.left && (
									<RichText
										className={Styles.Title}
										content={titles.left !== true ? titles.left : '&nbsp;'}
										style={{
											transform: titles.offsetLeft ? `translateY(${titles.offsetLeft})` : null,
										}}
									/>
								)}
								{images && images.left && (
									<div
										className={Styles.LeftImage}
										style={{
											margin: images.left.margin,
										}}
									>
										<Image
											src={images.left.src}
											layout={images.left.layout || 'intrinsic'}
											width={images.left.width || null}
											height={images.left.height || null}
										/>
									</div>
								)}
							</Column>
						)}
						{children && (
							<ConditionalWrapper
								condition={colWrapChildren === true}
								wrapper={() => (
									<Column
										sm={4}
										md={hasLeftOrRightContent ? 6 : 12}
										lg={{
											span: hasLeftOrRightContent ? 10 : 16,
											offset: hasLeftOrRightContent ? 1 : 0,
										}}
									>
										{children}
									</Column>
								)}
							>
								{children}
							</ConditionalWrapper>
						)}
						{titles && titles.right && (
							<Column sm={4} md={2} lg={5}>
								<RichText
									className={Styles.Title}
									content={titles.right !== true ? titles.right : '&nbsp;'}
									style={{
										transform: titles.offsetRight ? `translateY(${titles.offsetRight})` : null,
									}}
								/>
							</Column>
						)}
					</Row>
					{titles && titles.bottom && (
						<Row>
							<Column sm={4} md={2} lg={5}>
								<RichText
									className={Styles.Title}
									content={titles.bottom !== true ? titles.bottom : '&nbsp;'}
									style={{
										transform: titles.offsetBottom ? `translateY(${titles.offsetBottom})` : null,
									}}
								/>
							</Column>
						</Row>
					)}
					{images && images.bottom && (
						<Row>
							<div
								className={Styles.BottomImage}
								style={{
									display: images.bottom.layout === 'intrinsic' ? 'flex' : null,
									justifyContent: images.bottom.layout === 'intrinsic' ? 'center' : null,
									margin: images.bottom.margin,
								}}
							>
								<Image
									src={images.bottom.src}
									layout={images.bottom.layout || 'intrinsic'}
									width={images.bottom.layout !== 'fill' ? images.bottom.width : null}
									height={images.bottom.layout !== 'fill' ? images.bottom.height : null}
								/>
							</div>
						</Row>
					)}
				</div>
			</Grid>
		</section>
	);
};

Section.defaultProps = {
	colWrapChildren: true,
	rowWrapChildren: true,
	fullWidth: true,
};

Section.propTypes = {
	id: PropTypes.string,
	titles: PropTypes.shape({
		top: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		offsetTop: PropTypes.number,
		right: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		offsetRight: PropTypes.number,
		bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		offsetBottom: PropTypes.number,
		left: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		offsetLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	}),
	children: PropTypes.any,
	colWrapChildren: PropTypes.bool,
	rowWrapChildren: PropTypes.bool,
	fullWidth: PropTypes.bool,
	condensed: PropTypes.shape({
		top: PropTypes.bool,
		bottom: PropTypes.bool,
	}),
	narrow: PropTypes.shape({
		top: PropTypes.bool,
		bottom: PropTypes.bool,
	}),
	noSpace: PropTypes.shape({
		top: PropTypes.bool,
		bottom: PropTypes.bool,
	}),
	images: PropTypes.shape({
		top: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
		}),
		right: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
		}),
		bottom: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
		}),
		left: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
		}),
	}),
	background: PropTypes.shape({
		dark: PropTypes.bool,
		color: PropTypes.string,
		gradient: PropTypes.string,
	}),
};

export default Section;
