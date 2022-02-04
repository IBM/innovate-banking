import { Close32, Menu32 } from '@carbon/icons-react'
import { Button, Column, Grid, Row } from 'carbon-components-react'
import clsx from 'clsx'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Styles from './styles.module.scss'

const MainNavigation = ({ items, pageMeta }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [lastBodyPos, setLastBodyPos] = useState(0)

  const toggleOpenState = () => {
    if (!isOpen) {
      setLastBodyPos(document.body.scrollTop)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = null
      document.body.scrollTop = lastBodyPos
    }
    setIsOpen(!isOpen)
  }

  return (
    <header className={clsx(Styles.NavHeader, isOpen && Styles.IsOpen)}>
      <Link href="/">
        <a className={clsx(Styles.ListItemLink, Styles.MobileHomeLink)}>
          <img src="/svg/logo.svg" width={47} height={29} alt="Innovate Banking" />
        </a>
      </Link>
      <Button className={Styles.MobileMenuIcon} onClick={toggleOpenState}>
        {!isOpen && <Menu32 />}
        {isOpen && <Close32 />}
      </Button>
      <Grid className={Styles.NavGrid}>
        <Row>
          <Column sm={4}>
            <nav className={clsx(Styles.MainNavigation, !pageMeta.isHome && Styles.HasLogoTitle)}>
              <ul className={Styles.List}>
                <li className={clsx(Styles.ListItem, !pageMeta.isHome && Styles.HasLogoTitle)}>
                  <Link href="/">
                    <a className={Styles.ListItemLink}>
                      <img src="/svg/logo.svg" width={47} height={29} alt="Innovate Banking" />
                      <span className={clsx(Styles.LogoTitle, Styles.DesktopOnly, pageMeta.isHome && Styles.IsHidden)}>
                        {pageMeta.title}
                      </span>
                    </a>
                  </Link>
                </li>
                <li className={clsx(Styles.ListItem, Styles.MobileOnly)}>
                  <Link href="/">
                    <a className={clsx(Styles.ListItemLink, Styles.LogoTitle)}>{pageMeta.title}</a>
                  </Link>
                </li>
                {items.map((item, index) => {
                  return item.active ? (
                    <li key={index} className={clsx(Styles.ListItem, item.current && Styles.ListItemActive)}>
                      <Link href={item.url}>
                        <a
                          className={clsx(
                            Styles.ListItemLink,
                            item.current && Styles.ListItemLinkActive,
                            index === 0 && Styles.IsFirstLink
                          )}
                          style={{
                            display: !item.active ? 'none' : null,
                          }}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ) : null
                })}
              </ul>
            </nav>
          </Column>
        </Row>
      </Grid>
    </header>
  )
}

MainNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  pageMeta: PropTypes.object,
  logoTitle: PropTypes.string,
}

export default MainNavigation
