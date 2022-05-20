import RichText from '@/components/RichText'
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react'
import clsx from 'clsx'
import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'
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
  image,
  isOpenDefault,
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
              <Image src={image.src} width={640} height={414} alt="" objectFit="cover" />
            </div>
            <div className={styles.HeadingWrapper}>
              <div>
                <RichText content={headline} className={styles.RichTextHeading} />
                {!!introContent && <RichText content={introContent} className={styles.RichTextIntro} />}
              </div>
              {isOpen && <ChevronUp32 />}
              {!isOpen && <ChevronDown32 />}
            </div>
          </div>
          <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
            <RichText content={content} className={styles.RichText} />
          </AnimateHeight>
        </div>
      </div>
    </div>
  )
}
