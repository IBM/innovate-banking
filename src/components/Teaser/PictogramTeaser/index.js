import { Column } from 'carbon-components-react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import React from 'react'
import Styles from './styles.module.scss'

const PictogramTeaser = ({ icon, headline, text, teaserIndex, teaserCount, size }) => {
  const IconComponent = dynamic(() => import('@carbon/pictograms-react').then((mod) => mod[icon]))

  return (
    <Column sm={4} md={8} lg={size === 'sm' ? 4 : 5} className={Styles.PictogramTeaserCol}>
      <div
        className={clsx(
          Styles.PictogramTeaser,
          Styles[`TeaserIndex${teaserIndex}`],
          Styles[`TeaserCount${teaserCount}`],
          size === 'sm' && Styles.PictogramTeaserSmall
        )}
      >
        <span className={Styles.IconWrapper}>
          <IconComponent className={Styles.Icon} />
        </span>
        <div className={Styles.Content}>
          <h5 className={Styles.Headline}>{headline}</h5>
          <p className={Styles.Text} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </Column>
  )
}

PictogramTeaser.defaultProps = {
  size: 'md',
}

PictogramTeaser.propTypes = {
  icon: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  teaserIndex: PropTypes.number.isRequired,
  teaserCount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
}

export default PictogramTeaser
