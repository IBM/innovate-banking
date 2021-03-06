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
        heading: 'Prozesse<br />transformieren',
        image: {
          src: '/img/stage-subpage.png',
          alt: 'Prozesse transformieren',
        },
        imageMobile: {
          src: '/img/stage-subpage-mobile.png',
          alt: 'Prozesse transformieren',
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
            name: 'Projekte',
            link: 'projekte',
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
          text: '<p>Ganzheitliche Transformation mit unserer fachlichen Expertise und neuester Technologie</p>',
          position: 'left',
        },
        marginBottom: true,
        background: 'gradient',
        images: {
          bottom: {
            src: '/img/section-process-transformation.svg',
            width: 402,
            height: 363,
            layout: 'responsive',
            style: {
              marginBottom: '-7%',
            },
          },
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p style="max-width: 544px;">Mit unserer Banking-Expertise und Technologiekompetenz begleiten wir die Transformation Ihrer End-to-End-Geschäftsabläufe – von der Konzeption bis zur Umsetzung.</p>',
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
                '<h3 class="h4">Mit unserem Team zu gesteigerter operativer Exzellenz und höherer Wettbewerbsfähigkeit</h3><p style="max-width: 544px; margin-bottom: 2rem;">Der richtige Einsatz vorhandener Technologien ermöglicht die Transformation komplexer Prozesse in intelligente Workflows mit Einsparungen von mehr als 50 % der Betriebskosten und eine signifikante Steigerung der Kundenzufriedenheit von über 10 %.</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content:
                '<div class="bx--row" style="margin-bottom: 1.5rem;"><div class="bx--col"><h3 class="d1" style="margin-bottom: 1rem;">50%</h3><p>Kosteneinsparung</p></div><div class="bx--col"><h3 class="d1" style="margin-bottom: 1rem;">10%</h3><p>Steigerung der Kundenzufriedenheit (NPS)</p></div></div>',
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
        background: 'blue-light',
        colWrapChildren: false,
        children: [
          {
            name: 'Accordion',
            props: {
              items: [
                {
                  icon: 'UserSearch',
                  headline: 'Mehr Kundenorientierung und Effizienz im&nbsp;Kreditgeschäft',
                  content:
                    '<p>Die Transformation der Kreditprozesse ist ein wichtiger Schritt auf dem Weg zu mehr Effizienz und Kundenakzeptanz. Mit unseren Lösungen verschlanken und automatisieren wir Ihre kundenbezogenen und internen Prozesse. Wir ermöglichen echte Omni-Kanalfähigkeit, verkürzen „time-to-yes“ und „time-to-cash“ signifikant, erhöhen nachhaltig die Kundenzufriedenheit und Ihre Position im Wettbewerb. Dabei richten wir Ihre Prozesse entlang Ihrer Geschäftsstrategie aus und bringen unsere modernen Technologien zum Einsatz, wie z. B. unsere erprobten Content-Intelligent-Lösungen.</p>',
                },
                {
                  icon: 'FinanceStrategy',
                  headline: 'Neue Wege für Core&#8209;Banking und Payment&#8209;Lösungen',
                  content:
                    '<p>Mit einer Prozesslandschaft basierend auf digitalen Lösungen und intelligenten Workflows bringen Sie Ihre Kernleistungen auf Zukunftskurs. Unsere Expert*innen finden den passgenauen Ansatz für Ihr Haus. Eine Ergänzung oder stufenweise Ablösung von Legacy-Anwendungen etwa macht den Weg frei für innovative Open-Banking-Lösungen. Herausforderungen im Zahlungsverkehr rund um Instant, neue EPI-Karten und digitale Währungen sowie die zeitgleiche Transformation etablierter Infrastrukturen im Markt erfordern umsichtige und schnelle Navigation. Als kompetenter, zuverlässiger Partner begleiten wir Sie End-to-End bei der Konzeption notwendiger Anpassungen in den Prozessen und Systemen, der Positionierung neuer Produkte sowie der fachlichen und technischen Umsetzung.</p>',
                },
                {
                  icon: 'ManagingContractualFlow',
                  headline: 'Mehr Freiheiten durch ein effektives Back&nbsp;Office',
                  content:
                    '<p>Gestraffte Marktfolgeprozesse versprechen ein großes Einsparungspotenzial.<br />Wir bieten Ihnen maßgeschneiderte und agile Lösungen mit der Möglichkeit, klein zu starten und schnell zu skalieren. Die Automatisierung von Back-Office-Aufgaben bringt Ihnen zweistellige Einsparpotenziale, größere Mitarbeiter- und Kundenzufriedenheit. Wir begleiten Sie in der Transformation – von der Analyse bis zur Umsetzung.</p>',
                },
                {
                  icon: 'GlobalAssetsAndRecovery_01',
                  headline: 'Wachstum durch Digital Asset Banking',
                  content:
                    '<p>Durch Digitalassets können Sie neue Potenziale und zusätzliche Geschäftsfelder erschließen.<br />Durch den Aufbau von Strategien rund um Digitalassets werden Sie zur Bank der Zukunft. Mit der Nutzung von Tokenisierung können Sie nicht bankenfähige Vermögenswerte digital und sicher verwalten. Wir bieten Ihnen Partnerschaften mit marktführenden Software-Anbietern und damit gebündelte Kompetenz aus einer Hand. Sie erhalten Zugang zu neuester Technologie und einen zuverlässigen Partner bei der Gestaltung und Umsetzung innovativer Custody-Lösungen für das steigende Segment der vermögenden Privatkund*innen.</p>',
                },
                {
                  icon: 'Analyze',
                  headline: 'Neue Perspektiven für Finance & Controlling',
                  content:
                    '<p>Intelligente Lösungen für Finance und Controlling minimieren Risiken. In einem dynamischen Umfeld muss die Gesamtbanksteuerung schneller und mit geringeren Kosten mehr liefern. Wir helfen Ihnen, den Anforderungen gerecht zu werden und behalten dabei alle Dimensionen im Blick: Ihre Daten, die Fachlichkeit, die IT-Landschaft und das zielführende Projekt-Vorgehen. Gemeinsam mit unseren marktführenden Partner*innen für bankfachliche Software begleiten wir Ihren Weg zur modernen Banksteuerung. Technologienutzung für effizientes Datenmanagement und IT-Services, fachliche Standardmethoden und Agilität bringen Sie auf Erfolgskurs.</p>',
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
        id: 'projekte',
        paddingBottom: 'no',
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
                '<p class="eh4" style="max-width: 544px;">Unsere Cases</p><p style="max-width: 544px;">Effiziente und KI-basierte Assistenzsysteme, optimale Banking-Plattformen, IT-Architekturen – Dank unseres umfangreichen Know-hows konnten wir mit vielseitigen Lösungen bereits einige Kund*innen beim Schritt durch die digitale Transformation begleiten und sie unterstützen.</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        paddingTop: 'narrow',
        title: {
          text: '<p style="margin-bottom: -1rem">Projekte</p>',
          position: 'left',
        },
        background: 'grey',
        children: [
          {
            name: 'ImageAccordion',
            props: {
              items: [
                {
                  image: {
                    src: '/img/cases/cases1.jpg',
                  },
                  headline: 'Credít Mutuel',
                  introContent: '<p>Qualitätssicherung dank künstlicher Intelligenz</p>',
                  content:
                    '<p class="eh5">Herausforderung</p><p>Mit über 5.000 Filialen ist Crédit Mutuel eine der führenden Banken Frankreichs. Täglich gehen hier mehr als 350.000 Online-Anfragen ein – und das Volumen wächst jährlich um etwa 23 % weiter. Um den Wettbewerbsvorteil nicht zu verlieren, muss nicht nur der ständig wachsende Strom an Kund*innen und Anliegen bewältigt werden, sondern auch die Qualität der Kundenbeziehung gesichert sein. Aus diesem Grund war eine Neuerfindung der Rolle des Kundenberaters/der Kundenberaterin unbedingt erforderlich.</p><p class="eh5">Unser Lösungsansatz</p><p>Um die Herausforderung zu meistern, setzten wir von IBM eine auf künstlicher Intelligenz basierende Agenten-Assistentenplattform ein. Durch vier virtuelle Assistenten und einen mit KI ausgestatteten E-Mail-Analysator werden Anfragen deutlich schneller beantwortet. Unsere KI mit dem Namen Watson bearbeitet täglich bis zu 350.000 E-Mails und ermöglicht ein 60% schnelleres Finden von Antworten. Kund*innen können somit zeitnahund umfassend über eine Vielzahl von Angeboten informiert werden – von Auto-, Kranken-und Personenversicherungen bis hin zu einer Reihe von Spar- und Anlageprodukten.<br />Ziel ist es, die KI-Lösung nun schrittweise in 100 % der Bancassurance-Geschäfte einzusetzen und als Wachstumshebel zu nutzen.</p><p class="eh5">Mehrwert</p><p>„KI ersetzt den Menschen nicht, sie unterstützt ihn“, erklärt Nicolas Théry, Präsident der Crédit Mutuel Alliance Fédérale.<br />Dank der KI-basierten Implementierung ist Crédit Mutuel in der Lage, die Interaktionen zwischen Kundenberater*innen und Kund*innen nicht nur aufrecht zu erhalten, sondern zu verbessern.</p>',
                },
                {
                  image: {
                    src: '/img/cases/cases2.jpg',
                  },
                  headline: 'Large retail bank in Germany',
                  introContent: '<p>Mit Robotern Bank-Prozesse optimieren</p>',
                  content:
                    '<p class="eh5">Herausforderung</p><p>Stetig steigender Kostendruck zwingt viele Banken heutzutage zum Umdenken. Eine große Privatkundenbank in Deutschland benötigte eine innovative Lösung, mit der Back-Office-Kosten gesenkt und schnelle Einsparungsergebnisse erzielt werden konnten.<br />Eine einfache Automationstechnik war der Komplexität der Prozesse nicht gewachsen. Viele sich wiederholende administrative Aufgaben wurden manuell mit Hilfe von fünf verschiedenen Client-Systemen erledigt. Es brauchte also einen Weg, der die speziellen Strukturen berücksichtigt.</p><p class="eh5">Unser Lösungsansatz</p><p>Unsere Prozessberater*innen und Entwickler*innen konnten über zwanzig Back-Office-Prozesse automatisieren und unterstützten den Kunden bei der Implementierung von vierzig Robotern auf der Basis von Blue Prism.<br />Wir übernahmen die initiale Analyse potenzieller Prozesskandidaten, das Design der Automatisierungslösung und auch die abschließende Implementierung. Zusätzlich coachten wir mehrere Teams hinsichtlich der Robotic Process Automation (RPA)-Technologie, mit dem Ziel, dass der Kunde zukünftig in der Lage ist, weitere Implementierungen mit seinen eigenen Teams durchzuführen. Darüber hinaus stehen wir mit unserer Expertise weiterhin als Ansprechpartner zur Verfügung, um die Bank auf ihrem kontinuierlichen Weg zu mehr Automatisierung zu unterstützen.</p><p class="eh5">Mehrwert</p><p>Durch die Einführung der RPA-Technologie und der damit verbundenen Automation von Back-Office-Prozessen, konnte unser Kunde die Kosten innerhalb eines Jahres signifikant senken.</p>',
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
          text: '<p>Ihre Vorteile</p><p class="eh4">Das sind die Vorteile für Ihre Bank mit unserer Prozess-Transformation</p>',
          position: 'top',
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
                    text: 'Wir bringen ein breites und tiefes Verständnis von Bankprozessen mit. Eine Vielzahl unserer Berater*innen in der DACH-Region sind selbst Banker*innen oder Top-Expert*innen für Banking-Technologie.',
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'CloudAssets',
                    headline: 'Assets',
                    text: 'Durch unsere Nähe zur Technologie bringen wir eine Vielzahl von einsatzbereiten Assets und erprobten Methoden mit, die Ihre Transformation beschleunigen.',
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    icon: 'GlobalPartner',
                    headline: 'Partnerschaften',
                    text: 'Wir bringen umfangreiche Partnerschaften im Banking-Ecosystem mit, von denen wir gemeinsam profitieren können.',
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
                    headline: 'Jean-Henrik Zitterbart',
                    copy: 'Partner<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/jean.jpg',
                      width: 448,
                      height: 448,
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
                {
                  name: 'LetsTalkTeaser',
                  props: {
                    headline: 'Manuel Schuff',
                    copy: 'Senior Managing Consultant<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/manuel.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/manuelschuff',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Schuff%2C%20',
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
