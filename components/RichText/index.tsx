import clsx from 'clsx'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import Styles from './styles.module.scss'

type RichTextProps = {
  readonly content: string
  readonly pageMeta?: Record<string, unknown>
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const RichText = ({ content, pageMeta, className, ...rest }: RichTextProps) => {
  return <div className={clsx(Styles.RichText, className)} dangerouslySetInnerHTML={{ __html: content }} {...rest} />
}

export default RichText
