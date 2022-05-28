import React from 'react'
import { ImageAccordionItem, ImageAccordionItemProps } from './ImageAccordionItem'
import styles from './styles.module.scss'

type ImageAccordionProps = {
  readonly items: ReadonlyArray<ImageAccordionItemProps>
}

const ImageAccordion = ({ items }: ImageAccordionProps) => {
  return (
    <div className={styles.Accordion}>
      {items.map((item, index) => {
        return <ImageAccordionItem key={index} {...item} />
      })}
    </div>
  )
}

export default ImageAccordion
