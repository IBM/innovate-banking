import RichText from '@/components/RichText'
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react'
import * as carbonPictograms from '@carbon/pictograms-react'
import { CarbonPictogramType } from '@carbon/pictograms-react'
import { Column, Row } from 'carbon-components-react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { ComponentType, MouseEventHandler, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import styles from './styles.module.scss'

export type ImageAccordionItemProps = {
  readonly image: {
    readonly src: string
  }
  readonly headline: string
  readonly content: string
  readonly introContent?: string
  readonly isOpenDefault?: boolean
}

export const ImageAccordionItem = ({
  headline,
  content,
  introContent,
  icon,
  image,
  isOpenDefault,
  showVisual,
}: ImageAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  const onHeaderClick: MouseEventHandler = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={clsx(styles.AccordionItem)} onClick={(event) => onHeaderClick(event)}>
      <div className={styles.AccordionContent}>
        <div>
          <div className={styles.AccordionHeader}>
            <div className={styles.AccordionImage}>
              <Image src={image.src} width={243} height={145} alt="" objectFit="cover" />
            </div>
            <div>
              <RichText content={headline} className={styles.RichTextHeading} />
              {!!introContent && <RichText content={introContent} className={styles.RichTextIntro} />}
            </div>
            {isOpen && <ChevronUp32 className={styles.OpenCloseIcon} />}
            {!isOpen && <ChevronDown32 className={styles.OpenCloseIcon} />}
          </div>
          <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
            <RichText content={content} className={styles.RichText} />
          </AnimateHeight>
        </div>
      </div>
    </div>
  )
}
