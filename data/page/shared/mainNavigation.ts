import { ContentComponent } from '../../types'

export const mainNavigation: ContentComponent = {
  name: 'MainNavigation',
  props: {
    items: [
      {
        name: 'Customer Experience',
        url: '/customer-experience',
      },
      {
        name: 'Digitales Banking',
        url: '/digitales-banking',
      },
      {
        name: 'Banking Compliance',
        url: '/banking-compliance',
      },
      {
        name: 'Core Banking',
        url: '/core-banking',
      },
      {
        name: 'IBM Banking Platform',
        url: '/banking-platform',
      },
    ],
  },
}
