import { Email32, LogoLinkedin32 } from '@carbon/icons-react'
import { Column } from 'carbon-components-react'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

type LetsTalkTeaserProps = {
  readonly headline: string
  readonly copy: string
  readonly image: {
    readonly src: string
    readonly width: number
    readonly height: number
  }
  readonly links: ReadonlyArray<{
    readonly type: 'email' | 'linkedIn'
    readonly url: string
    readonly title: string
  }>
}

const LetsTalkTeaser = ({ headline, copy, image, links }: LetsTalkTeaserProps) => {
  return (
    <Column sm={4} md={4} lg={8} className={styles.LetTalkTeaserColumn}>
      <div className={styles.LetsTalkTeaser}>
        <Image src={image.src} width={image.width} height={image.height} alt="" layout="responsive" />
        <h5 className={styles.Headline}>{headline}</h5>
        <p className={styles.Copy} dangerouslySetInnerHTML={{ __html: copy }} />
        <ul className={styles.LinkList}>
          {links.map((link, index) => {
            return (
              <li className={styles.LinkListItem} key={index}>
                <a href={link.url} title={link.title} target="_blank" rel="noreferrer" className={styles.Link}>
                  <span>{link.title}</span>
                  <span>
                    {link.type === 'linkedIn' && <LogoLinkedin32 />}
                    {link.type === 'email' && <Email32 />}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Column>
  )
}

export default LetsTalkTeaser
