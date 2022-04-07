import { Content } from '../types'
import { footer } from './shared/footer'
import { mainNavigation } from './shared/mainNavigation'

const content: Content = {
  meta: {
    title: 'Innovate Banking',
    slogan: 'Eine Initiative von IBM Consulting',
    isHome: false,
  },
  components: [
    { ...mainNavigation },
    {
      name: 'Stage',
      props: {
        heading: 'Anwendungs&shy;systeme<br />modernisieren',
        image: {
          src: '/img/stage-subpage.png',
          alt: 'Anwendungssysteme modernisieren',
        },
        imageMobile: {
          src: '/img/stage-subpage-mobile.png',
          alt: 'Anwendungssysteme modernisieren',
        },
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
            name: 'Potenzial',
            link: 'potenzial',
          },
          {
            name: 'Schwerpunkte',
            link: 'schwerpunkte',
          },
          {
            name: 'Vorteile',
            link: 'vorteile',
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
        title: {
          text: '<p>IT-Innovationen für gesteigerte Wettbewerbsfähigkeit</p>',
          position: 'left',
        },
        marginBottom: true,
        background: {
          gradient: 'linear-gradient(180deg, #fff 35%, #f4f4f4 100%)',
        },
        images: {
          bottom: {
            src: '/img/section-anwendungssysteme.svg',
            width: 402,
            height: 283,
            layout: 'responsive',
            style: {
              marginBottom: '-5%',
            },
          },
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p style="max-width: 544px;">Ihre IT ist ein entscheidender Erfolgsfaktor für das Banking der Zukunft. Wir zeigen Ihnen den Weg und unterstützen Sie bei der Umsetzung Ihrer Transformationsprojekte.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'potenzial',
        title: {
          text: '<p>Ihr Potenzial</p>',
          position: 'left',
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<h3 class="h4">Mehr Nutzen und gesteigerte Wettbewerbs&shy;fähigkeit mit Hybrid-Cloud-Strategie</h3><p style="max-width: 544px;">Eine Hybrid-Cloud-Strategie mit der Kombination aus Cloud-Lösungen und klassischen IT-Strukturen steigert die Effizient um das 2,5-fache und verkürzt Time-to-Market-Zyklen im Vergleich zu punktuellen Cloud-Ansätzen.</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content: '<h3 class="d1 large">2,5x</h3><p>effizienter im Vergleich zu punktuellen Cloud-Ansätzen</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'schwerpunkte',
        title: {
          text: '<p>Unsere Schwerpunktthemen</p>',
          position: 'top',
        },
        images: {
          bottom: {
            src: '/img/section-bg-plattform-solutions-blue.svg',
            alt: 'Unsere Schwerpunktthemen',
            height: 1556,
            width: 3200,
            layout: 'responsive',
            style: {
              maxWidth: '73%',
              marginBottom: '2rem',
            },
          },
          bottomMobile: {
            src: '/img/section-bg-plattform-solutions-blue-mobile.svg',
            alt: 'Unsere Schwerpunktthemen',
            height: 392,
            width: 320,
            layout: 'responsive',
          },
        },
        background: {
          dark: false,
          color: '#dcf2ff',
        },
        colWrapChildren: false,
        children: [
          {
            name: 'Accordion',
            props: {
              items: [
                {
                  icon: 'AppDeveloper',
                  headline: 'Mit modernisierten Bank-Anwendungen auf&nbsp;Zukunftskurs',
                  content:
                    '<p>Ein modernes Core-Banking-System erhöht die Agilität und reduziert Kosten. Die Modernisierung Ihrer Kernanwendungen bringt Sie auf Zukunftskurs und lässt Sie von zahlreichen Vorteilen profitieren. Sie steigern die Agilität Ihres Unternehmens und schaffen die Voraussetzungen für die Interoperabilität im Ökosystem, Sie reduzieren Abhängigkeiten von Anbieter*innen und senken dabei sogar Ihre IT-Ausgaben. Durch die Kombination verschiedener Ansätze wie Rationalisierung/Harmonisierung, Hybrid-Cloud-Transformation und die Einführung von Standardprodukten modernisieren wir Ihre Core-Banking-Systeme.</p>',
                },
                {
                  icon: 'FinanceStrategy',
                  headline: 'Höhere Effizienz durch strategische&nbsp;Cloud&#8209;Architekturen',
                  content:
                    '<p>Cloud-Technologien steigern die Effizienz und die Geschwindigkeit in verschiedenen Bereichen Ihrer IT. Mit unserer IT-Advisory unterstützen wir Sie bei der Definition Ihrer IT-Architektur und Ihrer Roadmap in die Cloud. Wir begleiten Sie von der Analyse über die Planung bis zur Umsetzung strategischer Architekturen. Dabei verbinden wir individuelle, technologische, organisatorische und regulatorische Aspekte und erarbeiten gemeinsam mit Ihnen Ihre IT-Strategie.</p>',
                },
                {
                  icon: 'Touch',
                  headline: 'Front-End-Digitalisierung für gesteigerte Kundenzufriedenheit',
                  content:
                    '<p>Smarte Technologie führt zu einer besseren Customer Experience und zu neuen Umsatzströmen. Unsere Lösungen umfassen eine State-of-the-Art IT-Integrationsarchitektur, Design und Erstellung der Application Programming Interfaces (API) sowie die Implementierung von Best-in-Class-Lösungen durch eine breite Palette von Independent Software Vendors (ISVs). Dadurch erreichen wir nicht nur eine gesteigerte Kundenzufriedenheit, sondern auch eine volle Integration in moderne Ökosysteme und Zugang zu neuen branchenübergreifenden Umsatzströmen.</p>',
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
        id: 'vorteile',
        title: {
          text: '<p>Ihre Vorteile</p><p class="eh4">Ihr Nutzen bei der<br />technologischen Transformation</p>',
          position: 'top',
        },
        background: {
          dark: false,
          color: '#fff',
        },
        paddingBottom: 'narrow',
        colWrapChildren: false,
        children: [
          {
            name: 'TeaserList',
            props: {
              children: [
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'GlobalMarketsBar',
                    headline: 'Expertise',
                    text: 'Wir kombinieren bankfachliches Wissen mit technologischem Know-how. Dazu gehören auch die Skalierbarkeit bei komplexen Projekten, das Produktwissen unserer Entwicklungslabore und die Expertise unserer Partner*innen.',
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'CloudAssets',
                    headline: 'Rundum-Service',
                    text: 'Wir entwerfen für Sie eine Transformations-Roadmap, validieren selektierte Handlungsoptionen über unser Garagen-Modell, entwickeln erste MVPs und führen die Projekte iterativ über unseren Modernization-Factory-Ansatz durch.',
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'GlobalPartner',
                    headline: 'Partnerschaften',
                    text: 'Im Bereich bankfachliche Standardfunktionalität arbeiten wir mit einer Vielzahl von ISVs zusammen, für Cloud-Technologien mit AWS, Google und Microsoft. Auch Anbieter*innen von Analyse-Software, Middleware sowie Support- und Management-Tools gehören zu unserem Öko-System.',
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
        background: {
          color: '#061727',
          dark: true,
        },
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
                    headline: 'Dr. Uwe Gross',
                    copy: 'Partner<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/uwe.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/uwegross',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Dr.%20Gross%2C%20',
                      },
                    ],
                  },
                },
                {
                  name: 'LetsTalkTeaser',
                  props: {
                    headline: 'Michael Görlitz',
                    copy: 'Associate Partner<br />Cloud Advisory',
                    image: {
                      src: '/img/people/michael.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/michael-goerlitz',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%Herr%Görlitz%2C%20',
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
