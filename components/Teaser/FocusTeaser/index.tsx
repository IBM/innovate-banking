import RichText from '@/components/RichText'
import * as carbonIconsReact from '@carbon/icons-react'
import { Column, Link } from 'carbon-components-react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

type FocusTeaserProps = {
  readonly headline: string
  readonly text: string
  readonly image?: {
    readonly src?: string
    readonly width?: number
    readonly height?: number
    readonly layout?: ImageProps['layout']
    readonly simulate?: boolean
  }
  readonly link?: {
    readonly title?: string
    readonly url?: string
    readonly icon?: keyof typeof carbonIconsReact
  }
  readonly light?: boolean
  readonly condensed?: boolean
}

const FocusTeaser = ({ headline, text, image, link, light, condensed }: FocusTeaserProps) => {
  let IconComponent = null

  if (link && link.url) {
    IconComponent = dynamic(() => import('@carbon/icons-react').then((mod) => mod[link.icon || 'ArrowRight24']))
  }

  const smSizeOuter = 4
  let mdSizeOuter = 4
  let lgSizeOuter = 8
  let maxSizeOuter = 8

  const smSizeLeft = 4
  let mdSizeLeft = 8
  let lgSizeLeft = 16

  if (image) {
    mdSizeOuter = 8
    lgSizeOuter = 16
    mdSizeLeft = 4
    lgSizeLeft = 8
    maxSizeOuter = 16
  }

  if (condensed && image === undefined) {
    mdSizeOuter = 4
    lgSizeOuter = 8
  }

  return (
    <Column
      sm={smSizeOuter}
      md={mdSizeOuter}
      lg={lgSizeOuter}
      max={maxSizeOuter}
      className={clsx(styles.FocusTeaserColumn)}
    >
      <Link
        className={clsx(styles.FocusTeaser, light && styles.IsLight, link.url === undefined && styles.IsInactive)}
        href={link.url}
        title={link.title}
      >
        <Column sm={smSizeLeft} md={mdSizeLeft} lg={lgSizeLeft} className={styles.LeftColumn}>
          <h5 className={styles.Headline} dangerouslySetInnerHTML={{ __html: headline }} />
          <RichText content={text} className={styles.RichText} />
          {link && (
            <span className={styles.Link}>
              {link.title && <span className={styles.Text}>{link.title}</span>}
              {IconComponent && <IconComponent />}
            </span>
          )}
        </Column>
        {image && image.simulate !== true && (
          <Column sm={0} md={4} lg={8} className={styles.RightColumn}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
              layout={image.layout || 'intrinsic'}
            />
          </Column>
        )}
      </Link>
    </Column>
  )
}

export default FocusTeaser
