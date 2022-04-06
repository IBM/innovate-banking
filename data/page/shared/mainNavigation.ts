import { ContentComponent } from '../../types'

export const mainNavigation: ContentComponent = {
  name: 'MainNavigation',
  props: {
    items: [
      {
        name: 'Kundenerlebnis',
        url: '/kundenerlebnis',
      },
      {
        name: 'Prozess-Transformation',
        url: '/prozess-transformation',
      },
      {
        name: 'Risk & Compliance',
        url: '/risk-compliance',
      },
      {
        name: 'Anwendungssysteme',
        url: '/anwendungssysteme',
      },
      {
        name: 'IBM Banking Platform',
        url: '/banking-platform',
      },
    ],
  },
}
