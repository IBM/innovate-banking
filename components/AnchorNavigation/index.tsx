import { AddComment20 } from '@carbon/icons-react'
import { Column, Dropdown, Grid, Link, Row } from 'carbon-components-react'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import Sticky from 'react-sticky-el'
import { Transition } from 'react-transition-group'
import styles from './styles.module.scss'

type AnchorNavigationProps = {
  readonly items: ReadonlyArray<{
    readonly link: string
    readonly name: string
    readonly isTop?: boolean
    readonly isLetsTalkItem?: boolean
  }>
}

const AnchorNavigation = ({ items }: AnchorNavigationProps) => {
  const sloganListItemRef = useRef<HTMLDivElement>(null)
  const [isSloganShown, setIsSloganShown] = useState(false)
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined)
  const [sectionInViewportChangeEvent, setSectionInViewportChangeEvent] = useState(false)

  const onAnchorClick = (_event: unknown, index: number) => {
    setActiveItem(index)
  }

  const onFixedToggle = (fixed: boolean) => {
    if (fixed) {
      sloganListItemRef.current.classList.add(styles.IsFixed)
      setIsSloganShown(true)
    } else {
      sloganListItemRef.current.classList.remove(styles.IsFixed)
      setIsSloganShown(false)
    }
  }

  const onDropdownChange = (event) => {
    setActiveItem(event.selectedItem.index)
    window.location.hash = `#${event.selectedItem.link}`
  }

  const mobileItems = items.slice(1)

  const onSectionInViewportChangeEvent = (event) => {
    for (let index = 0; index < items.length; index++) {
      const item = items[index]
      if (
        item.link === event.detail.id &&
        ((event.detail.inViewport === true && event.detail.leave === false) ||
          (event.detail.inViewport === false && event.detail.enter === true))
      ) {
        return setActiveItem(index)
      }
    }
  }

  useEffect(() => {
    if (sectionInViewportChangeEvent === false && window !== undefined) {
      window.addEventListener('SectionInViewportChange', onSectionInViewportChangeEvent)
      setSectionInViewportChangeEvent(true)
    }
  }, [sectionInViewportChangeEvent])

  const sloganTransitionStyles = {
    entering: { marginLeft: -180, opacity: 0 },
    entered: { marginLeft: 0, opacity: 1 },
    exiting: { marginLeft: 0, opacity: 1 },
    exited: { marginLeft: -180, opacity: 0 },
  }

  return (
    <>
      <Sticky className={styles.StickyWrapper} onFixedToggle={onFixedToggle}>
        <div className={styles.AnchorNavigation} ref={sloganListItemRef}>
          <Grid className={styles.Grid}>
            <Row>
              <Column sm={0} md={8}>
                <ul className={styles.List}>
                  {items.map((item, index) => {
                    if (item.isTop) {
                      return (
                        <Transition key={index} in={isSloganShown} timeout={0}>
                          {(state) => (
                            <li
                              className={clsx(
                                styles.ListItem,
                                styles.IsSloganItem,
                                isSloganShown && styles.IsSloganItemVisible
                              )}
                              style={{
                                ...sloganTransitionStyles[state],
                              }}
                            >
                              <Link
                                href={`#${item.link}`}
                                className={clsx(styles.Link, activeItem === index && styles.IsActive)}
                                onClick={(event) => {
                                  onAnchorClick(event, index)
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          )}
                        </Transition>
                      )
                    }

                    return (
                      <li
                        key={index}
                        className={clsx(
                          styles.ListItem,
                          item.isTop && styles.IsSloganItem,
                          item.isLetsTalkItem && styles.IsLetsTalkListItem
                        )}
                      >
                        <Link
                          href={`#${item.link}`}
                          className={clsx(
                            styles.Link,
                            activeItem === index && styles.IsActive,
                            item.isLetsTalkItem && styles.IsLetsTalkLink
                          )}
                          onClick={(event) => {
                            onAnchorClick(event, index)
                          }}
                        >
                          {!item.isLetsTalkItem && item.name}
                          {item.isLetsTalkItem && <>Let’s talk</>}
                          {item.isLetsTalkItem && <AddComment20 className={styles.LetsTalkIcon} />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Column>
            </Row>
          </Grid>
        </div>
      </Sticky>
      <Grid>
        <Row>
          <Column sm={4} md={0} className={styles.DropdownColumn}>
            <Dropdown
              id="inline"
              label="Mehr erfahren über"
              items={mobileItems}
              itemToString={(item) => item?.name ?? ''}
              onChange={onDropdownChange}
              className={styles.Dropdown}
            />
          </Column>
        </Row>
      </Grid>
    </>
  )
}

export default AnchorNavigation
