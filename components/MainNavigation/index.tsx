import { Close32, Menu32 } from '@carbon/icons-react'
import { Button, Column, Grid, Row } from 'carbon-components-react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './styles.module.scss'

type MainNavigationProps = {
  readonly items: ReadonlyArray<{
    readonly name: string
    readonly url: string
  }>
  readonly pageMeta?: Record<string, unknown>
}

const MainNavigation = ({ items, pageMeta }: MainNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [lastBodyPos, setLastBodyPos] = useState(0)
  const { asPath } = useRouter()

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
    <header className={clsx(styles.NavHeader, isOpen && styles.IsOpen)}>
      <Link href="/">
        <a className={clsx(styles.ListItemLink, styles.MobileHomeLink)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/logo.svg" width={47} height={29} alt="Innovate Banking" />
        </a>
      </Link>
      <Button className={styles.MobileMenuIcon} onClick={toggleOpenState}>
        {!isOpen && <Menu32 />}
        {isOpen && <Close32 />}
      </Button>
      <Grid className={styles.NavGrid}>
        <Row>
          <Column sm={4}>
            <nav className={clsx(styles.MainNavigation, !pageMeta.isHome && styles.HasLogoTitle)}>
              <ul className={styles.List}>
                <li className={clsx(styles.ListItem, !pageMeta.isHome && styles.HasLogoTitle)}>
                  <Link href="/">
                    <a className={clsx(styles.ListItemLink, styles.LogoLink)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/svg/logo.svg" width={47} height={29} alt="Innovate Banking" />
                      <span className={clsx(styles.LogoTitle, styles.DesktopOnly, pageMeta.isHome && styles.IsHidden)}>
                        {pageMeta.title}
                      </span>
                    </a>
                  </Link>
                </li>
                <li className={clsx(styles.ListItem, styles.MobileOnly)}>
                  <Link href="/">
                    <a className={clsx(styles.ListItemLink, styles.LogoTitle)} onClick={toggleOpenState}>
                      {pageMeta.title}
                    </a>
                  </Link>
                </li>
                {items.map((item, index) => {
                  return (
                    <li key={index} className={clsx(styles.ListItem, { [styles.ListItemActive]: asPath === item.url })}>
                      <Link href={item.url}>
                        <a
                          className={clsx(styles.ListItemLink, {
                            [styles.ListItemLinkActive]: asPath === item.url,
                            [styles.IsFirstLink]: index === 0,
                          })}
                          onClick={toggleOpenState}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </Column>
        </Row>
      </Grid>
    </header>
  )
}

export default MainNavigation
