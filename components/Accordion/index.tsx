import AccordionItem, { AccordionItemProps } from '@/components/AccordionItem'
import { Grid, Row } from 'carbon-components-react'
import React from 'react'
import styles from './styles.module.scss'

type AccordionProps = {
  readonly items: ReadonlyArray<AccordionItemProps>
  readonly showVisual?: boolean
}

const Accordion = ({ items, showVisual }: AccordionProps) => {
  return (
    <Grid className={styles.Accordion}>
      <Row>
        {items.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              icon={item.icon}
              headline={item.headline}
              content={item.content}
              introContent={item.introContent}
              showVisual={showVisual}
            />
          )
        })}
      </Row>
    </Grid>
  )
}

export default Accordion
