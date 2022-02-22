import { Column } from 'carbon-components-react'
import * as carbonIcons from '@carbon/icons-react'
import dynamic from 'next/dynamic'
import React from 'react'
import styles from './styles.module.scss'

type SolutionTeaserProps = {
  readonly icon: keyof typeof carbonIcons
  readonly headline: string
  readonly text: string
  readonly teaserIndex: number
  readonly teaserCount: number
}

const SolutionTeaser = ({ icon, headline, text }: SolutionTeaserProps) => {
  const IconComponent = dynamic(() => import('@carbon/icons-react').then((mod) => mod[icon]))

  return (
    <Column sm={4} md={4} lg={4} className={styles.SolutionTeaserCol}>
      <div className={styles.SolutionTeaser}>
        <div className={styles.IconHeadlineWrapper}>
          <span className={styles.IconWrapper}>
            {/* @ts-ignore */}
            <IconComponent className={styles.Icon} />
          </span>
          <h5 className={styles.Headline} dangerouslySetInnerHTML={{ __html: headline }} />
        </div>
        <p className={styles.Text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </Column>
  )
}

export default SolutionTeaser
