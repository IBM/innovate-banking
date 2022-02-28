import { ContentComponent } from '../../types'

export const footer: ContentComponent = {
  name: 'Footer',
  props: {
    links: [
      {
        title: 'Datenschutz',
        url: '/impressum#datenschutz',
      },
      {
        title: 'Nutzungsbedingungen',
        url: '/impressum#nutzungsbedingungen',
      },
      {
        title: 'Barrierefreiheit',
        url: 'https://www.ibm.com/able',
      },
      {
        title: 'Impressum',
        url: '/impressum',
      },
    ],
  },
}
