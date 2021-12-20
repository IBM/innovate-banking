import ConditionalWrapper from '@/components/ConditonalWrapper';
import RichText from '@/components/RichText';
import { Column, Grid, Row } from 'carbon-components-react';
import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import Styles from './styles.module.scss';

const Section = props => {
	const {
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
		marginBottom,
		fullWidth,
	} = props;
	let backgroundStyle = null;

	const sectionRef = useRef();
	const { inViewport } = useInViewport(
		sectionRef,
		{
			threshold: 0,
		},
		{
			disconnectOnLeave: true,
		},
		{
			onEnterViewport: () => {
				if (window !== undefined && id !== undefined) {
					window.dispatchEvent(
						new CustomEvent('SectionInViewportChange', {
							detail: {
								id,
								inViewport,
								enter: true,
							},
						})
					);
				}
			},
			onLeaveViewport: () => {
				if (window !== undefined && id !== undefined) {
					window.dispatchEvent(
						new CustomEvent('SectionInViewportChange', {
							detail: {
								id,
								inViewport,
								leave: true,
							},
						})
					);
				}
			},
		}
	);

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
			ref={sectionRef}
			className={Styles.SectionWrapper}
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
						noSpace && noSpace.top && Styles.IsNoSpaceTop,
						marginBottom && Styles.HasMarginBottom
					)}
				>
					{images && images.top && (
						<Row>
							<div
								className={Styles.TopImage}
								style={
									({
										display: images.top.layout === 'intrinsic' ? 'flex' : null,
										justifyContent: images.top.layout === 'intrinsic' ? 'center' : null,
										margin: images.top.margin,
									},
									{ ...images.top.style })
								}
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
					{images && images.rightMobile && (
						<Row>
							<div
								className={Styles.RightImageMobile}
								style={
									({
										display: images.rightMobile.layout === 'intrinsic' ? 'flex' : null,
										justifyContent: images.rightMobile.layout === 'intrinsic' ? 'center' : null,
										margin: images.rightMobile.margin,
									},
									{ ...images.rightMobile.style })
								}
							>
								<Image
									src={images.rightMobile.src}
									layout={images.rightMobile.layout || 'intrinsic'}
									width={images.rightMobile.layout !== 'fill' ? images.rightMobile.width : null}
									height={images.rightMobile.layout !== 'fill' ? images.rightMobile.height : null}
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
										className={clsx(Styles.Title, Styles.TitleLeft)}
										content={titles.left !== true ? titles.left : '&nbsp;'}
										style={{
											transform: titles.offsetLeft ? `translateY(${titles.offsetLeft})` : null,
										}}
									/>
								)}
								{images && images.left && (
									<div
										className={Styles.LeftImage}
										style={
											({
												margin: images.left.margin,
											},
											{ ...images.left.style })
										}
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
											span: hasLeftOrRightContent ? (fullWidth ? 10 : 8) : 16,
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
						{images && images.right && (
							<Column
								sm={4}
								md={1}
								lg={{
									span: 2,
									offset: 1,
								}}
							>
								<div
									className={clsx(
										Styles.RightImage,
										images.rightMobile && Styles.RightImageHiddenMobile
									)}
									style={
										({
											display: images.right.layout === 'intrinsic' ? 'flex' : null,
											justifyContent: images.right.layout === 'intrinsic' ? 'center' : null,
											margin: images.right.margin,
										},
										{ ...images.right.style })
									}
								>
									<Image
										src={images.right.src}
										layout={images.right.layout || 'intrinsic'}
										width={images.right.layout !== 'fill' ? images.right.width : null}
										height={images.right.layout !== 'fill' ? images.right.height : null}
									/>
								</div>
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
								className={clsx(
									Styles.BottomImage,
									images.bottomMobile && Styles.BottomImageHiddenMobile
								)}
								style={
									({
										display: images.bottom.layout === 'intrinsic' ? 'flex' : null,
										justifyContent: images.bottom.layout === 'intrinsic' ? 'center' : null,
										margin: images.bottom.margin,
									},
									{ ...images.bottom.style })
								}
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
					{images && images.bottomMobile && (
						<Row>
							<div
								className={Styles.BottomImageMobile}
								style={
									({
										display: images.bottomMobile.layout === 'intrinsic' ? 'flex' : null,
										justifyContent: images.bottomMobile.layout === 'intrinsic' ? 'center' : null,
										margin: images.bottomMobile.margin,
									},
									{ ...images.bottomMobile.style })
								}
							>
								<Image
									src={images.bottomMobile.src}
									layout={images.bottomMobile.layout || 'intrinsic'}
									width={images.bottomMobile.layout !== 'fill' ? images.bottomMobile.width : null}
									height={images.bottomMobile.layout !== 'fill' ? images.bottomMobile.height : null}
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
	fullWidth: false,
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
	marginBottom: PropTypes.bool,
	images: PropTypes.shape({
		top: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
			style: PropTypes.object,
		}),
		right: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
			style: PropTypes.object,
		}),
		rightMobile: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
			style: PropTypes.object,
		}),
		bottom: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
			style: PropTypes.object,
		}),
		bottomMobile: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
			style: PropTypes.object,
		}),
		left: PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number,
			layout: PropTypes.string,
			margin: PropTypes.string,
			style: PropTypes.object,
		}),
	}),
	background: PropTypes.shape({
		dark: PropTypes.bool,
		color: PropTypes.string,
		gradient: PropTypes.string,
	}),
	inViewport: PropTypes.bool,
};

export default Section;
