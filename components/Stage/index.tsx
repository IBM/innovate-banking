import { Column, Grid, Row } from 'carbon-components-react'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

type StageProps = {
  readonly heading?: string
  readonly subheading?: string
  readonly image: {
    readonly src: string
    readonly alt: string
  }
  readonly imageMobile: {
    readonly src: string
    readonly alt: string
  }
  isHome?: boolean
}

const Stage = ({ heading, subheading, image, imageMobile, isHome }: StageProps) => {
  return (
    <div className={clsx(styles.Stage, isHome && styles.StageHome)}>
      <div className={styles.ImageHiddenMobile}>
        <Image src={image.src} alt={image.alt} layout="fill" quality="100" objectFit="cover" objectPosition="center" />
      </div>
      <div className={styles.ImageMobile}>
        <Image
          src={imageMobile.src}
          alt={imageMobile.alt}
          layout="fill"
          quality="100"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {(heading || subheading) && (
        <Grid>
          <Row>
            <Column sm={4}>
              <div className={clsx(styles.HeadingWrapper, isHome && styles.HeadingWrapperHome)}>
                {heading && (
                  <h1
                    className={clsx(styles.Heading, isHome && styles.HeadingHome)}
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                )}
                {subheading && <h2 className={styles.Subheading} dangerouslySetInnerHTML={{ __html: subheading }} />}
              </div>
            </Column>
          </Row>
        </Grid>
      )}
    </div>
  )
}

export default Stage
