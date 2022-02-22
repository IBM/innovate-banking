import RichText from '@/components/RichText'
import { ArrowRight24 } from '@carbon/icons-react'
import { Column, Link } from 'carbon-components-react'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

type ImageTextTeaserProps = {
  readonly text: string
  readonly image: {
    readonly src: string
    readonly width: number
    readonly height: number
    readonly layout?: ImageProps['layout']
  }
  readonly link: string
}

const ImageTextTeaser = ({ text, image, link }: ImageTextTeaserProps) => {
  return (
    <Column sm={4} md={4} lg={8}>
      <Link href={link} className={styles.ImageTextTeaser} target="_blank">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
          layout={image.layout || 'intrinsic'}
          className={styles.Image}
        />
        <RichText content={text} className={styles.RichText} />
        <ArrowRight24 className={styles.Icon} />
      </Link>
    </Column>
  )
}

export default ImageTextTeaser
