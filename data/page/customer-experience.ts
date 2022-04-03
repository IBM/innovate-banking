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
        heading: 'Kundenerlebnis<br />neu erfinden',
        image: {
          src: '/img/stage-subpage.png',
          alt: 'Kundenerlebnis neu erfinden',
        },
        imageMobile: {
          src: '/img/stage-subpage-mobile.png',
          alt: 'Kundenerlebnis neu erfinden',
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
        titles: {
          left: '<p>Mehr Kundenbindung durch eine<br />top Customer Experience</p>',
        },
        marginBottom: true,
        background: {
          gradient: 'linear-gradient(180deg, #fff 35%, #f4f4f4 100%)',
        },
        images: {
          bottom: {
            src: '/img/section-kundenerlebnis.svg',
            width: 402,
            height: 242,
            layout: 'responsive',
            style: {
              marginBottom: '-5.5%',
            },
          },
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p style="max-width: 544px;">Zufriedene Kund*innen sind Ihr wertvollstes Kapital. Erfahren Sie, wie Cloud-basierte Datenauswertung und KI ein einzigartiges Kundenerlebnis ermöglichen und die Arbeitswelt Ihrer Mitarbeiter*innen im Front-Office revolutionieren.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'video',
        titles: {
          left: '<p>Treten Sie mit Ihren Kund*innen in Kontakt – persönlich, effizient, digital</p>',
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p style="max-width: 544px; margin-bottom: 2rem;">Immer mehr Menschen jeden Alters nutzen selbstverständlich digitale Touchpoints, um ihre Bankgeschäfte zu erledigen. Der Anspruch an die digitale Beratungs- und Servicequalität der Banken wächst. Wir von IBM zeigen Ihnen gerne wie Sie und Ihre Berater*innen durch den Einsatz neuer Technologien Ihre Kundenansprache qualitativ stark verbessern können. In unserer Expertenrunde zeigen wir neue Wege anhand konkreter Beispiele auf: von der optimierten Nutzererfahrung über die personalisierte Beratung bis hin zu einer nahtlosen Verknüpfung sämtlicher Zugangswege.</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content:
                '<div class="embed" style="max-width: 544px;"><iframe src="https://www.youtube-nocookie.com/embed/5pVe_nfh6xQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'potenzial',
        titles: {
          left: '<p>Ihr Potenzial</p>',
        },
        background: {
          dark: false,
          color: '#f4f4f4',
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<h3 class="h4">Kundenbedürfnisse erkennen, Zufriedenheit steigern und neue Vertriebschancen identifizieren</h3><p style="max-width: 544px; margin-bottom: 2rem;">Unsere Befragungen von Führungskräften aus über 400 Banken weltweit zeigen, dass Banken, die sich auf die Transformation von Kundenabläufen konzentrieren, messbare Wettbewerbsvorteile haben – sowohl auf der Kosten- als auch auf der Ertragsseite.</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content:
                '<div class="bx--row" style="margin-bottom: 1.5rem;"><div class="bx--col"><h3 class="d1" style="margin-bottom: 1rem;">+30%</h3><p>Ertrag pro Kunde (Privatkunden, Zins- und Kommissionsgeschäft)</p></div><div class="bx--col"><h3 class="d1" style="margin-bottom: 1rem;">–20%</h3><p>Cost-to-Serve pro Kunde (Retail)</p></div></div>',
            },
          },
          {
            name: 'RichText',
            props: {
              content: '<p class="c1">Quelle: Industrie Benchmarks Banking, IBM Institute for Business Value</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'schwerpunkte',
        titles: {
          top: '<p>Unsere Schwerpunktthemen</p>',
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
                  icon: 'GlobalAssetsAndRecovery_01',
                  headline: 'Mehr Kundenorientierung durch kontextuelles&nbsp;Banking',
                  content:
                    '<p>Wir erhöhen die Zufriedenheit Ihrer Kund*innen durch zielgruppenspezifische Angebote – ob für Privat- oder Firmenkund*innen. Wir verschaffen Ihnen Wettbewerbsvorteile an allen Touchpoints: Flexible Arbeitsplatzlösungen im Front-Office unterstützen Sie bei der Beratung, innovative Self-Service-Konzepte erweitern das digitale Leistungsangebot, mobiles und dialog-basiertes Banking eröffnet neue Perspektiven in der Kundenansprache.<br />Mit einer einheitlichen 360-Grad-Sicht auf Ihre/n Kund*in steigern wir Ihre Effizienz und die Qualität Ihrer Beratung ebenso wie Ihren Service. Dabei reduzieren wir manuelle Arbeit und liefern Ihnen relevante Erkenntnisse über Ihre/n Kund*in zum richtigen Zeitpunkt.</p>',
                },
                {
                  icon: 'ManagingContractualFlow',
                  headline: 'Mehr Kundenbindung durch personalisierten Dialog',
                  content:
                    '<p>Der Schlüssel zu Relevanz und Loyalität liegt in der personalisierten Kundenansprache.<br />Wir analysieren Ihre Customer Journeys und identifizieren Verbesserungsmöglichkeiten – von der effizienten Generierung von Interessent*innen bis zum Abschluss. Dazu bereiten wir komplexe Inhalte zielgruppengerecht auf. Im Rahmen von Kampagnen können diese dann flexibel auf all Ihren Kanälen für die vertriebliche Ansprache eingesetzt werden. Basierend auf den marktführenden Plattformen unserer Partner*innen implementieren wir individuelle Lösungen zur Ausspielung personalisierter Inhalte. Diese können dann für alle Kanäle dynamisch optimiert werden.</p>',
                },
                {
                  icon: 'FinanceStrategy',
                  headline: 'Bessere Ansprache durch Marketing-Intelligenz und Automation',
                  content:
                    '<p>Mit Marketing-Intelligenz und Automation unterstützen wir Sie bei der vertrieblichen Kundenansprache. Unsere Lösungen vereinheitlichen Ihre Customer Journeys für eine regelbasierte Steuerung der Kundenansprache. Bewährte KI-Modelle ermöglichen eine dynamische Identifikation von Lebensereignissen, Produktneigung oder Abwanderungswahrscheinlichkeiten Ihrer Kund*innen.<br />Aus den darauf aufbauenden, automatisierten Kundendialogen entstehen neue potenzielle Vertriebschancen (Next Best Action) im dafür am besten geeigneten Vertriebskanal – ob digital, in der Bankfiliale oder über die Service-Hotline.</p>',
                },
                {
                  icon: 'Analyze',
                  headline: 'Marketing und Vertrieb effizient umsetzen&nbsp;und&nbsp;steuern',
                  content:
                    '<p>Unsere Lösungen ermöglichen die nahtlose Orchestrierung von Kundenkontext, Berührungspunkten und Bankprozessen. Unsere Erfolgsfaktoren sind analytische Fähigkeiten, die lückenlose Einbeziehung von Daten und die Aussteuerung relevanter Inhalte auf den geeigneten Zugangspunkt. Die Kombination regelbasierter Ansätze mit spezialisierter KI ermöglicht eine effiziente und intelligente Steuerung Ihrer Kundenbeziehungen.<br />Dazu nutzen wir bewährte cloud-basierte Standardplattformen für ein beschleunigtes Time-to-Market, unterstützen Ihren operativen Betrieb bedarfsgerecht mit der benötigten Expertise und ermöglichen so die Neuallokation bestehender Ressourcen.</p>',
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
        titles: {
          top: '<p>Ihre Vorteile</p><p class="eh4">Erfolgsfaktoren für<br />Ihre neue Customer Experience</p>',
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
                    headline: 'Unsere Expertise',
                    text: 'Über 1200 praxiserfahrene Spezialist*innen an 8 Standorten in der DACH-Region stehen Ihnen zur Verfügung - von der Beratung über die Umsetzung bis hin zum Betrieb unserer Lösungen.',
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'CloudAssets',
                    headline: 'Schnelle Umsetzung',
                    text: 'In crossfunktionalen Teams können wir Ihre Ziele schnell verwirklichen. Durch den Einsatz bewährter Lösungsmodule ermöglichen wir eine beschleunigte Umsetzung typischer Fragestellungen – in Wochen, nicht Monaten.',
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'GlobalPartner',
                    headline: 'Partnerschaften',
                    text: 'Gemeinsam mit unseren Technologiepartnern entwickeln wir individuelle Lösungen für Sie, die auf vielfach am Markt bewährten Plattformen basieren.',
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
        titles: {
          left: '<p class="d1">Let’s&nbsp;talk!</p><p class="p" style="max-width: 200px;">Fragen oder Interesse an weiteren Informationen?<br />Sprechen Sie uns an!</p>',
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
                    headline: 'Holger Horn',
                    copy: 'Senior Partner<br />IBM iX',
                    image: {
                      src: '/img/people/holger.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/holger-horn-943b8722',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Horn%2C%20',
                      },
                    ],
                  },
                },
                {
                  name: 'LetsTalkTeaser',
                  props: {
                    headline: 'Ilker Uzkan',
                    copy: 'Banking Lead DACH<br />IBM iX',
                    image: {
                      src: '/img/people/ilker.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/ilkeruzkan',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Uzkan%2C%20',
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
