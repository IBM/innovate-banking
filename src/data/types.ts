import * as components from '@/components/index' // ugly on purpose
import { ComponentPropsWithoutRef } from 'react'

export type ContentComponent =
  | { name: 'Accordion'; props: ComponentPropsWithoutRef<typeof components['Accordion']> }
  | { name: 'AccordionItem'; props: ComponentPropsWithoutRef<typeof components['AccordionItem']> }
  | { name: 'AnchorNavigation'; props: ComponentPropsWithoutRef<typeof components['AnchorNavigation']> }
  | { name: 'BackToTopButton'; props: ComponentPropsWithoutRef<typeof components['BackToTopButton']> }
  | { name: 'ConditonalWrapper'; props: ComponentPropsWithoutRef<typeof components['ConditonalWrapper']> }
  | { name: 'Footer'; props: ComponentPropsWithoutRef<typeof components['Footer']> }
  | { name: 'MainNavigation'; props: ComponentPropsWithoutRef<typeof components['MainNavigation']> }
  | { name: 'RichText'; props: ComponentPropsWithoutRef<typeof components['RichText']> }
  | { name: 'Section'; props: ComponentPropsWithoutRef<typeof components['Section']> }
  | { name: 'Stage'; props: ComponentPropsWithoutRef<typeof components['Stage']> }
  | { name: 'TeaserList'; props: ComponentPropsWithoutRef<typeof components['TeaserList']> }
  | { name: 'VideoButton'; props: ComponentPropsWithoutRef<typeof components['VideoButton']> }

export type Content = {
  meta: {
    title?: string
    slogan?: string
    isHome?: boolean
  }
  components: ReadonlyArray<ContentComponent>
}
