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

export type AccordionItemProps = {
  readonly icon: keyof typeof carbonPictograms
  readonly headline: string
  readonly content: string
  readonly isOpenDefault?: boolean
  readonly showVisual?: boolean
}

const AccordionItem = ({ icon, headline, content, isOpenDefault, showVisual }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  const onHeaderClick: MouseEventHandler = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  const IconComponent = dynamic<CarbonPictogramType>(() =>
    import('@carbon/pictograms-react').then((mod) => mod[icon] as ComponentType<CarbonPictogramType>)
  )

  return (
    <Column
      sm={4}
      md={{
        span: 6,
        offset: 1,
      }}
      lg={{
        span: 12,
        offset: 2,
      }}
      className={clsx(styles.AccordionItem)}
      onClick={(event) => onHeaderClick(event)}
    >
      <div className={styles.AccordionContent}>
        <Row>
          <Column
            sm={4}
            md={{
              span: 6,
              offset: 1,
            }}
            lg={{ span: 14, offset: 1 }}
          >
            <Row>
              <Column sm={4} md={8} lg={2}>
                {/* @ts-ignore */}
                <IconComponent className={styles.Icon} />
              </Column>
              <Column sm={4} md={8} lg={{ offset: 1, span: 13 }} className={styles.AccordionHeader}>
                <RichText content={headline} className={styles.RichTextHeading} />
                {isOpen && <ChevronUp32 className={styles.OpenCloseIcon} />}
                {!isOpen && <ChevronDown32 className={styles.OpenCloseIcon} />}
              </Column>
            </Row>
            <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
              <RichText content={content} className={styles.RichText} />
              {showVisual && (
                <div className={styles.Visual}>
                  <Image src="/img/accordion-visual.svg" alt="" layout="intrinsic" width={239} height={199} />
                </div>
              )}
            </AnimateHeight>
          </Column>
        </Row>
      </div>
    </Column>
  )
}

export default AccordionItem
