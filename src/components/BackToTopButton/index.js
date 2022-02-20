import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Styles from './styles.module.scss'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.55) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, true)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <CSSTransition in={isVisible} timeout={200} classNames="back-to-top">
      <a className={Styles.Button} href="#top">
        <svg width={24} height={24}>
          <path
            d="M1.714 0h20.572v1.714H1.714V0ZM3.43 12l1.208 1.208 6.506-6.496V24h1.714V6.712l6.506 6.496L20.572 12 12 3.429 3.429 12Z"
            fill="#00539a"
          />
        </svg>
      </a>
    </CSSTransition>
  )
}

export default BackToTopButton
