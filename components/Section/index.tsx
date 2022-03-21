import ConditionalWrapper from '@/components/ConditonalWrapper'
import RichText from '@/components/RichText'
import { Column, Grid, Row } from 'carbon-components-react'
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React, { CSSProperties, ReactNode, useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import styles from './styles.module.scss'

type SectionImage = {
  src: string
  alt?: string
  width?: number
  height?: number
  layout?: ImageProps['layout']
  margin?: string
  style?: CSSProperties
}

type SectionProps = {
  readonly id?: string
  readonly titles?: {
    readonly top?: string | boolean
    readonly left?: string | boolean
  }
  readonly children?: ReactNode
  readonly images?: {
    readonly top?: SectionImage
    readonly right?: SectionImage
    readonly rightMobile?: SectionImage
    readonly bottom?: SectionImage
    readonly bottomMobile?: SectionImage
    readonly left?: SectionImage
  }
  readonly background?: {
    readonly dark?: boolean
    readonly color?: string
    readonly gradient?: string
  }
  readonly paddingTop?: 'default' | 'narrow' | 'condensed' | 'no'
  readonly paddingBottom?: 'default' | 'narrow' | 'condensed' | 'no'
  readonly marginBottom?: boolean
  readonly colWrapChildren?: boolean
  readonly fullWidth?: boolean
  readonly inViewport?: boolean
}

const Section = ({
  id,
  titles,
  children,
  images,
  background,
  paddingTop,
  paddingBottom,
  marginBottom,
  colWrapChildren = true,
  fullWidth = false,
}: SectionProps) => {
  let backgroundStyle = null

  const sectionRef = useRef()
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
          )
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
          )
        }
      },
    }
  )

  if (background && background.color) {
    backgroundStyle = background.color
  }

  if (background && background.gradient) {
    backgroundStyle = background.gradient
  }

  let hasLeftOrRightContent = false
  if (titles && titles.left) hasLeftOrRightContent = true
  if (images && images.left) hasLeftOrRightContent = true
  if (images && images.right) hasLeftOrRightContent = true

  return (
    <section
      id={id}
      style={{
        background: backgroundStyle,
      }}
      ref={sectionRef}
      className={styles.SectionWrapper}
    >
      <Grid>
        <div
          className={clsx(
            styles.Section,
            titles && styles.Titled,
            titles && titles.top && styles.HasTopTitle,
            titles && titles.left && styles.HasLeftTitle,
            images && images.top && styles.HasTopImage,
            images && images.right && styles.HasRightImage,
            images && images.bottom && styles.HasBottomImage,
            images && images.left && styles.HasLeftImage,
            background && background.dark && styles.HasDarkBackground,
            paddingTop === 'condensed' && styles.IsCondensedTop,
            paddingBottom === 'condensed' && styles.IsCondensedBottom,
            paddingTop === 'narrow' && styles.IsNarrowTop,
            paddingBottom === 'narrow' && styles.IsNarrowBottom,
            paddingTop === 'no' && styles.IsNoSpaceTop,
            paddingBottom === 'no' && styles.IsNoSpaceBottom,
            marginBottom && styles.HasMarginBottom
          )}
        >
          {images && images.top && (
            <Row>
              <div
                className={styles.TopImage}
                style={{
                  display: images.top.layout === 'intrinsic' ? 'flex' : null,
                  justifyContent: images.top.layout === 'intrinsic' ? 'center' : null,
                  margin: images.top.margin,
                  ...images.top.style,
                }}
              >
                <Image
                  src={images.top.src}
                  layout={images.top.layout || 'intrinsic'}
                  width={images.top.layout !== 'fill' ? images.top.width : null}
                  height={images.top.layout !== 'fill' ? images.top.height : null}
                  alt={images.top.alt ?? ''}
                />
              </div>
            </Row>
          )}
          {images && images.rightMobile && (
            <Row>
              <div
                className={styles.RightImageMobile}
                style={{
                  display: images.rightMobile.layout === 'intrinsic' ? 'flex' : null,
                  justifyContent: images.rightMobile.layout === 'intrinsic' ? 'center' : null,
                  margin: images.rightMobile.margin,
                  ...images.rightMobile.style,
                }}
              >
                <Image
                  src={images.rightMobile.src}
                  layout={images.rightMobile.layout || 'intrinsic'}
                  width={images.rightMobile.layout !== 'fill' ? images.rightMobile.width : null}
                  height={images.rightMobile.layout !== 'fill' ? images.rightMobile.height : null}
                  alt={images.rightMobile.alt ?? ''}
                />
              </div>
            </Row>
          )}
          {titles && titles.top && (
            <Row>
              <Column sm={4} md={6} lg={8}>
                <RichText className={styles.Title} content={titles.top !== true ? titles.top : '&nbsp;'} />
              </Column>
            </Row>
          )}
          <Row>
            {((titles && titles.left) || (images && images.left)) && (
              <Column sm={4} md={2} lg={4} className={styles.LeftSide}>
                {titles && titles.left && (
                  <RichText
                    className={clsx(styles.Title, styles.TitleLeft)}
                    content={titles.left !== true ? titles.left : '&nbsp;'}
                  />
                )}
                {images && images.left && (
                  <div
                    className={styles.LeftImage}
                    style={{
                      margin: images.left.margin,
                      ...images.left.style,
                    }}
                  >
                    <Image
                      src={images.left.src}
                      layout={images.left.layout || 'intrinsic'}
                      width={images.left.width || null}
                      height={images.left.height || null}
                      alt={images.left.alt ?? ''}
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
                  className={clsx(styles.RightImage, images.rightMobile && styles.RightImageHiddenMobile)}
                  style={{
                    display: images.right.layout === 'intrinsic' ? 'flex' : null,
                    justifyContent: images.right.layout === 'intrinsic' ? 'center' : null,
                    margin: images.right.margin,
                    ...images.right.style,
                  }}
                >
                  <Image
                    src={images.right.src}
                    layout={images.right.layout || 'intrinsic'}
                    width={images.right.layout !== 'fill' ? images.right.width : null}
                    height={images.right.layout !== 'fill' ? images.right.height : null}
                    alt={images.right.alt ?? ''}
                  />
                </div>
              </Column>
            )}
          </Row>
          {images && images.bottom && (
            <Row>
              <div
                className={clsx(styles.BottomImage, images.bottomMobile && styles.BottomImageHiddenMobile)}
                style={{
                  display: images.bottom.layout === 'intrinsic' ? 'flex' : null,
                  justifyContent: images.bottom.layout === 'intrinsic' ? 'center' : null,
                  margin: images.bottom.margin,
                  ...images.bottom.style,
                }}
              >
                <Image
                  src={images.bottom.src}
                  layout={images.bottom.layout || 'intrinsic'}
                  width={images.bottom.layout !== 'fill' ? images.bottom.width : null}
                  height={images.bottom.layout !== 'fill' ? images.bottom.height : null}
                  alt={images.bottom.alt ?? ''}
                />
              </div>
            </Row>
          )}
          {images && images.bottomMobile && (
            <Row>
              <div
                className={styles.BottomImageMobile}
                style={{
                  display: images.bottomMobile.layout === 'intrinsic' ? 'flex' : null,
                  justifyContent: images.bottomMobile.layout === 'intrinsic' ? 'center' : null,
                  margin: images.bottomMobile.margin,
                  ...images.bottomMobile.style,
                }}
              >
                <Image
                  src={images.bottomMobile.src}
                  layout={images.bottomMobile.layout || 'intrinsic'}
                  width={images.bottomMobile.layout !== 'fill' ? images.bottomMobile.width : null}
                  height={images.bottomMobile.layout !== 'fill' ? images.bottomMobile.height : null}
                  alt={images.bottomMobile.alt ?? ''}
                />
              </div>
            </Row>
          )}
        </div>
      </Grid>
    </section>
  )
}

export default Section
