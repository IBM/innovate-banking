import { Grid, Row } from 'carbon-components-react'
import PropTypes from 'prop-types'
import React from 'react'
import AccordionItem from '../AccordionItem'
import Styles from './styles.module.scss'

const Accordion = ({ items, showVisual }) => {
  return (
    <Grid className={Styles.Accordion}>
      <Row>
        {items.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              icon={item.icon}
              headline={item.headline}
              content={item.content}
              showVisual={showVisual}
            />
          )
        })}
      </Row>
    </Grid>
  )
}

Accordion.defaultProps = {
  showVisual: false,
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      showVisual: PropTypes.bool,
    })
  ),
}

export default Accordion
