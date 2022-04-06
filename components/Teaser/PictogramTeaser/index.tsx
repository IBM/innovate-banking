import * as carbonPictograms from '@carbon/pictograms-react'
import { Column } from 'carbon-components-react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import React from 'react'
import styles from './styles.module.scss'

type PictogramTeaserProps = {
  readonly icon: keyof typeof carbonPictograms
  readonly headline: string
  readonly text: string
  readonly teaserIndex: number
  readonly teaserCount: number
  readonly size: 'sm' | 'md' | 'lg'
  readonly light?: boolean
}

const PictogramTeaser = ({
  icon,
  headline,
  text,
  teaserIndex,
  teaserCount,
  light = false,
  size = 'md',
}: PictogramTeaserProps) => {
  const IconComponent = dynamic(() => import('@carbon/pictograms-react').then((mod) => mod[icon]))

  return (
    <Column
      sm={4}
      md={8}
      lg={size === 'sm' ? 4 : size === 'md' ? 5 : 8}
      className={clsx(size === 'lg' && styles.MarginBottom)}
    >
      <div
        className={clsx(
          styles.PictogramTeaser,
          styles[`TeaserIndex${teaserIndex}`],
          styles[`TeaserCount${teaserCount}`],
          size === 'sm' && styles.PictogramTeaserSmall,
          light && styles.IsLight
        )}
      >
        <span className={styles.IconWrapper}>
          {/* @ts-ignore */}
          <IconComponent className={styles.Icon} />
        </span>
        <div className={styles.Content}>
          <h5 className={styles.Headline}>{headline}</h5>
          <p className={styles.Text} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </Column>
  )
}

export default PictogramTeaser
