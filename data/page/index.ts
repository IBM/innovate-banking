import { Content } from '../types'
import { footer } from './shared/footer'
import { mainNavigation } from './shared/mainNavigation'

const content: Content = {
  meta: {
    title: 'Innovate Banking',
    slogan: 'Eine Initiative von IBM Consulting',
    isHome: true,
  },
  components: [
    { ...mainNavigation },
    {
      name: 'Stage',
      props: {
        heading: 'Innovate<br />Banking',
        subheading: 'Eine Initiative von IBM Consulting',
        image: {
          src: '/img/stage-home.svg',
          alt: 'IBM Smarter Banking',
        },
        imageMobile: {
          src: '/img/stage-home-mobile.svg',
          alt: 'IBM Smarter Banking',
        },
        isHome: true,
      },
    },
    {
      name: 'AnchorNavigation',
      props: {
        items: [
          {
            name: 'Innovate Banking',
            link: 'top',
            isTop: true,
          },
          {
            name: 'Mission',
            link: 'mission',
          },
          {
            name: 'Mehrwert',
            link: 'mehrwert',
          },
          {
            name: 'Fokus',
            link: 'fokus',
          },
          {
            name: 'News',
            link: 'news',
          },
          {
            name: 'Methoden',
            link: 'methoden',
          },
          {
            name: 'Let’s talk',
            link: 'letstalk',
            isLetsTalkItem: true,
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'mission',
        title: {
          text: '<p>Gemeinsam stark durch<br/>digitale Transformation</p>',
          position: 'left',
        },
        images: {
          right: {
            src: '/img/rebus-v.svg',
            width: 41,
            height: 102,
            layout: 'fixed',
          },
          rightMobile: {
            src: '/img/rebus-h.svg',
            width: 111,
            height: 32,
            layout: 'fixed',
          },
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p style="max-width: 544px;">Wir sind für zahlreiche Banken im deutschsprachigen Markt aktiv – viele von uns sind selbst Banker*innen. Wir sind geübt darin Ihre spezifischen fachlichen Anforderungen in Einklang mit Technologien wie Cloud und Künstlicher Intelligenz zu bringen. Wir begleiten ganzheitlich durch die digitale Transformation und schaffen gemeinsam ein neues Banking-Erlebnis für Sie und Ihre Kund*innen.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'mehrwert',
        title: {
          text: '<p>Unsere Lösungen für die Branche im Wandel</p>',
          position: 'left',
        },
        paddingBottom: 'no',
        images: {
          bottom: {
            src: '/img/section-bg-plattform-solutions.png',
            alt: 'Plattform Lösungen',
            height: 367,
            width: 772,
            layout: 'responsive',
          },
        },
        background: 'grey',
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p class="h2" style="max-width: 544px; font-weight: 400;">Mit uns die digitale Transformation meistern</p><p style="max-width: 544px;">Wir sind ein zuverlässiger Partner für nachhaltige digitale Transformation, denn wir vereinen Banking-Know-how mit technischen Innovationen und bieten individualisierte Lösungen aus unserem weltweiten Netzwerk.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        title: {
          text: '<p class="h4">Unsere Expertise für Ihre<br />erfolgreiche Transformation</p>',
          position: 'top',
        },
        images: {
          bottom: {
            src: '/img/section-bg-plattform-solutions-blue.svg',
            alt: 'Plattform Lösungen',
            height: 1556,
            width: 3200,
            layout: 'responsive',
            style: {
              maxWidth: '75%',
              marginBottom: '2rem',
            },
          },
          bottomMobile: {
            src: '/img/section-bg-plattform-solutions-blue-mobile.svg',
            alt: 'Plattform Lösungen',
            height: 392,
            width: 320,
            layout: 'responsive',
          },
        },
        background: 'blue-light',
        colWrapChildren: false,
        children: [
          {
            name: 'TeaserList',
            props: {
              children: [
                {
                  name: 'SolutionTeaser',
                  props: {
                    icon: 'Touch_132',
                    headline: 'Für Ihre<br />Kund*innen',
                    text: 'Mehrwerte zählen – erschaffen Sie mit uns eine nachhaltige und zeitgemäße Banking-Erfahrung.',
                  },
                },
                {
                  name: 'SolutionTeaser',
                  props: {
                    icon: 'Analytics32',
                    headline: 'Für mehr<br />Effizienz',
                    text: 'Kosten reduzieren – strukturell, konsequent und an jedem Punkt transparent.',
                  },
                },
                {
                  name: 'SolutionTeaser',
                  props: {
                    icon: 'Finance32',
                    headline: 'Für die<br />Zukunft',
                    text: 'IT-Systeme für die nächste Generation – Compliance und Datensicherheit inklusive.',
                  },
                },
                {
                  name: 'SolutionTeaser',
                  props: {
                    icon: 'HelpDesk32',
                    headline: 'Für den<br />lokalen Markt',
                    text: 'Internationale Expertise – wir von IBM sind global aktiv, im deutschsprachigen Raum aber zu Hause und vor Ort.',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        paddingBottom: 'condensed',
        images: {
          left: {
            src: '/img/section-banking-pulse-left.svg',
            width: 192,
            height: 192,
            alt: 'Banking am Puls der Zeit',
            layout: 'intrinsic',
          },
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p class="d1" style="max-width: 544px;">Banking am<br />Puls der Zeit</p><p style="max-width: 544px;">Als Finanzdienstleister befinden Sie sich stetig im Spannungsfeld zwischen Beständigkeit und Fortschritt. Ihre Kund*innen erwarten eine verlässliche, sichere und gleichzeitig innovative Banking-Erfahrung.</p><p style="max-width: 544px;">Um an den entscheidenden Punkten ansetzen zu können, bieten wir Ihnen Lösungen in fünf Kernbereichen. Gemeinsam finden wir die passende Herangehensweise für die Bedürfnisse Ihres Unternehmens – ganz gleich, ob Sie lokal, regional oder weltweit agieren.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'fokus',
        title: {
          text: '<p>Unser Fokus für Ihren Erfolg</p>',
          position: 'left',
        },
        fullWidth: true,
        children: [
          {
            name: 'TeaserList',
            props: {
              rowWrap: true,
              children: [
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Customer Experience neu definieren',
                    text: '<p>Zufriedene Kund*innen sind Ihr wertvollstes Kapital. Wir zeigen Ihnen, wie Cloud-basierte Datenauswertung und KI ein einzigartiges Kundenerlebnis ermöglichen und die Arbeitswelt Ihrer Mitarbeiter*innen im Front-Office revolutionieren.</p>',
                    image: {
                      src: '/img/section-kundenerlebnis.svg',
                      width: 402,
                      height: 242,
                    },
                    link: '/kundenerlebnis',
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Transformation Digitales Banking',
                    text: '<p>Vom Kreditantrag bis zur Auszahlung, von der Bestandsverwaltung über die Zahlungsabwicklung bis zu Finance und Controlling: Unsere KI- und datengetriebenen Lösungen transformieren und optimieren Ihre Prozesse. Damit ist Ihre Bank fit für die Zukunft.</p>',
                    link: '/prozess-transformation',
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Banking Compliance nachhaltig steuern',
                    text: '<p>Wir von IBM unterstützen Ihre Bank mit kognitiven Lösungen beim Risikomanagement und bei der Risikomodellierung, bei Geldwäscheprävention, KYC-Prozessen, innovativer RegTech und bei SupTech.</p>',
                    link: '/risk-compliance',
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Core Banking modernisieren',
                    text: '<p>Mit unseren Cloud-Innovationen step by step durch die digitale Transformation: Wir begleiten die Modernisierung Ihrer Anwendungen und Ihrer Infrastruktur mit maßgeschneiderten Lösungen - vom Design über die Entwicklung bis hin zum Betrieb.</p>',
                    link: '/anwendungssysteme',
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'IBM Banking Platform<br />nutzen',
                    text: '<p>Mit den Anwendungen unserer IBM Banking Platform gewinnen Sie an Effizienz und schaffen Mehrwerte für Ihre Bank. Erfahren Sie, welche weiteren Vorteile ein Business Process Outsourcing mit sich bringt.</p>',
                    link: '/banking-platform',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'news',
        paddingBottom: 'condensed',
        title: {
          text: '&nbsp;',
          position: 'left',
        },
        background: 'grey',
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p class="eh4" style="margin-bottom: 1.5rem;">Unsere Stimme<br />in der Finanzbranche</p><p style="max-width: 544px;">Erfahren Sie von unseren Expert*innen wie IBM an der Zukunft des Bankings arbeitet – und wenn Sie möchten, tauschen Sie sich direkt mit ihnen aus.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        title: {
          text: '<p>Banking Insights</p>',
          position: 'left',
        },
        paddingTop: 'condensed',
        paddingBottom: 'condensed',
        background: 'grey',
        fullWidth: true,
        children: [
          {
            name: 'TeaserList',
            props: {
              showPagination: true,
              rowWrap: true,
              children: [
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Finanzindustrie: Was kommt, was bleibt, was geht? Unsere Top 10</p>',
                    image: {
                      src: '/img/banking-insights/teaser-9.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/blogs/think/de-de/2021/09/finanzindustrie-top-10/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>IBM unterstützt Erste Bank bei der Digitalisierung der Bilanzanalyse mit KI und Cloud Technologie</p>',
                    image: {
                      src: '/img/banking-insights/teaser-8.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://de.newsroom.ibm.com/21-02-21_IBM-unterstutzt-Erste-Bank-bei-der-Digitalisierung-der-Bilanzanalyse-mit-KI-und-Cloud-Technologie',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Künstliche Intelligenz im Banking: Durch gezielte Kundenansprache zum Erfolg</p>',
                    image: {
                      src: '/img/banking-insights/teaser-7.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/blogs/think/de-de/2021/07/kuenstliche-intelligenz-im-banking/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Gesamtbanksteuerung:<br />Veränderung ist machbar</p>',
                    image: {
                      src: '/img/banking-insights/teaser-1.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/blogs/digitale-perspektive/2021/03/gesamtbanksteuerung-veraenderung-ist-machbar/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>End-to-End Digitalisierung der Kreditprozesse schafft Mehrwert für Unternehmenskunden</p>',
                    image: {
                      src: '/img/banking-insights/teaser-2.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/blogs/digitale-perspektive/2021/01/end-to-end-digitalisierung-der-kreditprozesse-schafft-mehrwert-fur-unternehmenskunden/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Nachhaltigkeit – Wege in die Zukunft für Banken und Aufsichtsbehörden</p>',
                    image: {
                      src: '/img/banking-insights/teaser-3.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/blogs/digitale-perspektive/2020/11/nachhaltigkeit-wege-in-die-zukunft-fur-banken-und-aufsichtsbehorden-2/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Analytics – Intelligent Workflows in Banking:<br />Geldwäsche und Betrugsbekämpfung</p>',
                    image: {
                      src: '/img/banking-insights/teaser-4.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/blogs/digitale-perspektive/2020/10/intelligent-workflows-in-banking-geldwasche-und-betrugsbekampfung/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Reinventing Financial Services:<br />Core Banking and Payments Edition</p>',
                    image: {
                      src: '/img/banking-insights/teaser-5.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/industries/banking-financial-markets/events/reinventing-financial-services',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>IBM Institute for Business Value:<br />Banking Industry Insights</p>',
                    image: {
                      src: '/img/banking-insights/teaser-6.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/thought-leadership/institute-business-value/industry/banking',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        title: {
          text: '<p>Banking Talks & Events</p>',
          position: 'left',
        },
        background: 'grey',
        paddingTop: 'condensed',
        fullWidth: true,
        children: [
          {
            name: 'TeaserList',
            props: {
              showPagination: true,
              rowWrap: true,
              children: [
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>Bank und Zukunft – Der Podcast für die Finanzbranche</p>',
                    image: {
                      src: '/img/banking-talks/teaser-1.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://bank-und-zukunft.podigee.io/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>IBM iX Digital Talks: Webcasts zur Digitalisierung in Unternehmen</p>',
                    image: {
                      src: '/img/banking-talks/teaser-2.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/services/de-de/ibmix/digital-talks/',
                  },
                },
                {
                  name: 'ImageTextTeaser',
                  props: {
                    text: '<p>IBM Event: Reinventing Financial Services 2020</p>',
                    image: {
                      src: '/img/banking-talks/teaser-3.jpg',
                      width: 576,
                      height: 324,
                    },
                    link: 'https://www.ibm.com/industries/banking-financial-markets/events/reinventing-financial-services',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'methoden',
        background: 'blue-light',
        paddingTop: 'no',
        paddingBottom: 'no',
        images: {
          top: {
            src: '/img/section-ibm-garage.svg',
            width: 608,
            height: 393,
            layout: 'intrinsic',
          },
        },
        fullWidth: true,
        title: {
          text: '<p class="h4">Innovative Methoden und Technologien</p><p class="p">Wir arbeiten schon heute an der Finanztechnologie von übermorgen. Entdecken Sie ungeahnte Möglichkeiten und profitieren Sie als Erste von Lösungen, die die Welt des Bankings nachhaltig verändern werden.</p>',
          position: 'left',
        },
        children: [
          {
            name: 'VideoButton',
            props: {
              title: 'Was ist die IBM Garage?',
              subtitle: 'Video abspielen (englisch)',
            },
          },
          {
            name: 'TeaserList',
            props: {
              rowWrap: true,
              children: [
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'IBM Garage',
                    text: '<p>Mit IBM Garage bringen wir Sie technologisch auf den neuesten Stand, damit Sie schnell, bahnbrechend und ähnlich agil wie ein Start-up-Unternehmen arbeiten können. IBM Garage vereint Unternehmensstrategie, Design und Technologie nahtlos in einer End-to-End-Journey.</p>',
                    link: 'https://www.ibm.com/de-de/garage',
                    light: true,
                    condensed: true,
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Blockchain',
                    text: '<p>Mit Blockchain können Sie Transaktionen transparent, einfach und effizient halten. Wir ersetzen damit veraltete Prozesse und manuelle Arbeit durch neuartige Kooperation, Innovation und gesteigertes Tempo. Mit Blockchain schaffen wir neue Lösungen und erzielen greifbare Ergebnisse.</p>',
                    link: 'https://www.ibm.com/blockchain/industries/financial-services',
                    light: true,
                    condensed: true,
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Cloud-Computing',
                    text: '<p>Entlang der gesamten Customer Journey ermöglichen wir Banken, sich in hybriden Cloud-Umgebungen neu zu erfinden. Mit kompetenter Beratung, Unterstützung bei der Implementierung und Managed Services unterstützen wir Sie dabei, Ihren Weg in die Cloud zu vereinfachen und zu beschleunigen.</p>',
                    link: 'https://www.ibm.com/de-de/industries/banking-financial-markets/cloud-banking',
                    light: true,
                    condensed: true,
                  },
                },
                {
                  name: 'FocusTeaser',
                  props: {
                    headline: 'Edge',
                    text: '<p>Mit Edge-Computing können Sie große Datenvolumen direkt an der Quelle bearbeiten, da Bankanwendungen näher an Datenquellen wie IoT-Geräte oder lokale Edge-Server rücken. Wir helfen Ihnen bei der Optimierung Ihrer Betriebsabläufe und der Erneuerung von Kundenservices auf Basis dieser technischen Innovation.</p>',
                    link: 'https://www.ibm.com/de-de/cloud/what-is-edge-computing',
                    light: true,
                    condensed: true,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'letstalk',
        background: 'blue-dark',
        title: {
          text: '<p class="d1">Let’s&nbsp;talk!</p><p class="p" style="max-width: 200px;">Fragen oder Interesse an weiteren Informationen?<br />Sprechen Sie uns an!</p>',
          position: 'left',
        },
        fullWidth: true,
        children: [
          {
            name: 'TeaserList',
            props: {
              rowWrap: true,
              children: [
                {
                  name: 'LetsTalkTeaser',
                  props: {
                    headline: 'Bernd Neubauer',
                    copy: 'Senior Partner<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/bernd.jpg',
                      width: 288,
                      height: 288,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/bernd-neubauer-6a9318186/',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Neubauer%2C%20',
                      },
                    ],
                  },
                },
                {
                  name: 'LetsTalkTeaser',
                  props: {
                    headline: 'Jean-Henrik Zitterbart',
                    copy: 'Partner<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/jean.jpg',
                      width: 288,
                      height: 288,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/jean-henrik-zitterbart-b294a39b',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Zitterbart%2C%20',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { ...footer },
  ],
}

export default content
