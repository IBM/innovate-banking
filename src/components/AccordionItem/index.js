import RichText from '@/components/RichText'
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react'
import { Column, Row } from 'carbon-components-react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Styles from './styles.module.scss'

const AccordionItem = ({ icon, headline, content, isOpenDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  const onHeaderClick = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  const IconComponent = dynamic(() => import('@carbon/pictograms-react').then((mod) => mod[icon]))

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
      className={clsx(Styles.AccordionItem)}
      onClick={(event) => onHeaderClick(event)}
    >
      <div className={Styles.AccordionContent}>
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
                <IconComponent className={Styles.Icon} />
              </Column>
              <Column sm={4} md={8} lg={{ offset: 1, span: 13 }} className={Styles.AccordionHeader}>
                <RichText content={headline} className={Styles.RichTextHeading} />
                {isOpen && <ChevronUp32 className={Styles.OpenCloseIcon} />}
                {!isOpen && <ChevronDown32 className={Styles.OpenCloseIcon} />}
              </Column>
            </Row>
            <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
              <RichText content={content} className={Styles.RichText} />
              <div className={Styles.Visual}>
                <Image src="/img/accordion-visual.svg" alt="" layout="intrinsic" width={239} height={199} />
              </div>
            </AnimateHeight>
          </Column>
        </Row>
      </div>
    </Column>
  )
}

AccordionItem.defaultProps = {
  isOpenDefault: false,
}

AccordionItem.propTypes = {
  icon: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpenDefault: PropTypes.bool,
}

export default AccordionItem
