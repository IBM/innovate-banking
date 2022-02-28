import * as components from '@/components/index' // ugly on purpose
import { ComponentProps } from 'react'

type ComponentsMap = typeof components

export type ContentComponent<K extends keyof ComponentsMap = keyof ComponentsMap> = {
  [P in K]: {
    name: P
    props: ComponentProps<ComponentsMap[P]>
  }
}[K]

export type Content = {
  meta: {
    title?: string
    slogan?: string
    isHome?: boolean
  }
  components: ReadonlyArray<ContentComponent>
}
