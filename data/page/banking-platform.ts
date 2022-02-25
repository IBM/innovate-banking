import { Content } from '../types'
import { footer } from './shared/footer'
import { mainNavigation } from './shared/mainNavigation'

const content: Content = {
  meta: {
    title: 'Innovate Banking',
    slogan: 'Eine Initiative von IBM',
    isHome: false,
  },
  components: [
    { ...mainNavigation },
    {
      name: 'Stage',
      props: {
        heading: 'IBM Banking<br />Platform',
        image: {
          src: '/img/stage-subpage.png',
          alt: 'IBM Banking Platform',
        },
        imageMobile: {
          src: '/img/stage-subpage-mobile.png',
          alt: 'IBM Banking Platform',
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
            name: 'Services',
            link: 'services',
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
          left: '<p>Unser umfassendes Lösungsportfolio<br />mit der IBM Banking Platform</p>',
        },
        marginBottom: true,
        background: {
          gradient: 'linear-gradient(180deg, #fff 35%, #f4f4f4 100%)',
        },
        images: {
          bottom: {
            src: '/img/section-banking-plattform.svg',
            width: 402,
            height: 263,
            layout: 'responsive',
            style: {
              marginBottom: '-6%',
            },
          },
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<p style="max-width: 544px;">Die IBM Banking Platform bietet Ihnen umfassende Lösungen für sämtliche Bankprozesse. Wir vereinen die relevanten Anwendungen unserer Plattform mit den Produkten unserer Partner*innen und allen zeitgenössischen Möglichkeiten der Digitalisierung.</p>',
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
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<h3 class="eh4" style="max-width: 422px; margin-bottom: 1.5rem;">Konzentration auf die Kernkompetenzen durch niedrigere Kosten</h3><p style="max-width: 422px;">Durch die IBM Banking Platform kann die Effizienz Ihres Unternehmens immens gesteigert werden und ermöglicht eine Kostenreduktion von bis zu</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content: '<h3 class="d1 large">40%</h3><p>niedrigere Kosten</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'banking-platform',
        images: {
          left: {
            src: '/img/section-banking-plattform.svg',
            width: 402,
            height: 263,
            layout: 'responsive',
            style: {
              display: 'none',
              marginBottom: '-6%',
            },
          },
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
                '<h3 class="d1" style="max-width: 544px;">Die IBM Banking Platform</h3><p style="max-width: 544px;">Stehen auch Sie derzeit vor der Herausforderung, Ihre Kosten reduzieren zu müssen und gleichzeitig die steigenden regulatorischen und gesetzlichen Anforderungen in ihren Geschäftsprozessen und IT-Systemen kosteneffizient umzusetzen?</p><p style="max-width: 544px; margin-bottom: 2rem;">Wir von IBM bieten mit der Banking Platform eine Möglichkeit, den aktuellen aber auch den zukünftigen Herausforderungen durch bedarfsorientierte und variabilisierte Serviceleistungen gerecht zu werden. Unsere langjährige Erfahrung zeigt, dass gerade Systeme hohe fixe Wartungs- und Entwicklungskosten erzeugen, da sie teilweise nicht mehr leistungsfähig sind und deshalb nicht immer mit den Innovationen am Markt mithalten können.</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content:
                '<h4 class="eh4" style="max-width: 544px;">Neuer Markt, neue<br />Herausforderungen</h4><p style="max-width: 544px;">Durch den Eintritt neuer Wettbewerber*innen, wie z.B. den Fintechs aber auch wegen der strukturellen Transformation des gesamten Bankenmarkts, werden von den Instituten in hohem Maße Innovationsfähigkeit und Agilität gefordert. Und genau dabei können wir Sie unterstützen:</p>',
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'digitales-banking',
        titles: {
          left: '<p>Digitales Banking ganz<br />individuell</p>',
        },
        background: {
          dark: false,
          color: '#fff',
        },
        children: [
          {
            name: 'RichText',
            props: {
              content:
                '<h3 class="eh3" style="max-width: 544px; margin-bottom: 1.5rem;">Gehen Sie mit uns den nächsten Schritt in die Digitalisierung.</h3><p style="max-width: 544px; margin-bottom: 2rem;">Sie profitieren dabei von der langjährigen Erfahrung unserer Expertinnen und Experten und können durch die Umstellung haben Umstellung auf die IBM Banking Platform Ihre Kosten variabilisieren. Zudem wird die Plattform stets an die aktuellen rechtlichen und gesetzlichen Anforderungen angepasst und die Einhaltung derer permanent überwacht.</p>',
            },
          },
          {
            name: 'RichText',
            props: {
              content:
                '<h3 class="eh3" style="max-width: 544px; margin-bottom: 1.5rem;">Mit uns als Partner an Ihrer Seite können Sie Ihr Unternehmen für<br />die Zukunft aufstellen.</h3><p style="max-width: 544px;">Wie viele Schritte in Richtung Digitalisierung Sie dabei planen und wie schnell Sie diese umsetzen möchten, liegt ganz bei Ihnen.</p><p style="max-width: 544px;">Die Transition auf unsere Plattform kann nach Ihren Wünschen in kleinen Schritten erfolgen und sogar vorab getestet werden. Gleichzeitig haben Sie die Möglichkeit aufgrund der Modularität einzelne oder komplette Geschäftsprozesse auf die IBM Platform zu übertragen.</p><p style="max-width: 544px;">Sie möchten mehr wissen über die IBM Banking Platform? Dann melden Sie sich gerne bei uns und lassen Sie uns über Ihre Wünsche und Möglichkeiten sprechen.</p>',
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
                  icon: 'OptimizeCashFlow_01',
                  headline: 'Alles im Blick: Kreditprozesse und Rating Services',
                  content:
                    '<p style="margin-bottom: 2.5rem; font-size: 18px;">Die Kreditprozesse der Zukunft sind digital. Bis zum kompletten Wandel der Finanzbranche sind jedoch noch einige Aufgaben zu meistern. Wenn Sie bereit sind für diesen Weg, dann stehen wir gerne mit verlässlichen Kreditanalysen, leistungsstarken Ratingverfahren und allen dazugehörigen digitalen Lösungen zur Seite.</p><p class="h6">Die Bankenbranche im Wandel</p><p>Wettbewerbswachstum, steigende regulatorische Anforderungen und Kosteneffizienz - die Finanzinstitute stehen derzeit vor der großen Herausforderung. Parallel sind die Institute dazu angehalten in einem von niedrigen Zinsen und den Folgen der Pandemie bestimmten Umfeld ihre Profitabilität nachhaltig zu stärken, um am Ende noch wettbewerbsfähig zu bleiben.</p><p style="margin-bottom: 2rem;">Der seit Jahren anhaltende Druck auf die Kreditwirtschaft zwingt Finanzinstitute zu erheblichen Kosteneinsparungen. Gleichzeitig werden die Folgen der Corona-Pandemie, aber auch die der Klimakrise, den Druck auf die Finanzinstitute erhöhen.</p><p class="h6">Nachhaltige Prozesse für eine digitale Zukunft</p><p>Fundierte und gleichzeitig ressourcenschonende Kreditwürdigkeitsprüfungen, die von leistungsstarken spezifischen Ratingverfahren untermauert werden, sind für eine nachhaltig erfolgreiche Geschäftsentwicklung essenziell. Zum einen, weil dadurch Kreditausfälle möglichst vermieden und zum anderen die Effizienz im Prozess gehoben werden können.</p><p style="margin-bottom: 2rem;">Um diese Herausforderungen zu bewältigen, müssen Banken ihr Geschäftsmodell sowie ihre internen Prozesse stetig anpassen. Dabei stoßen viele Institute allerdings auf ressourcen- und Knowhow bedingte Engpässe. Wir packen gerne mit an.</p><p class="h6">Unser Lösungsansatz:<br />Bilanzdaten und Kreditprozesse aus einer Hand</p><p>Mit der IBM Banking Platform unterstützen unsere erfahrenen IBM Expertinnen und Experten Finanzinstitute über die gesamte Wertschöpfungskette des Kreditrisikomanagements:</p><p>Dazu gehören digitale Banking Prozesse wie etwa die Bilanzauswertung, Ratingerstellung, Kreditanalyse und die jährliche Überwachung einschließlich spezifischer Bilanz- und Ratingverfahren.</p><p>Unsere seit vielen Jahren etablierten Ratingverfahren werden stetig weiterentwickelt und bilden die jeweils aktuellen aufsichtsrechtlichen Bestimmungen ab. Auf Wunsch können wir auch institutseigene Ratingverfahren in unsere Plattform integrieren, bzw. unsere Analyseleistungen auf den Systemen des jeweiligen Instituts und auf Basis der dort bereits genutzten Ratingverfahren erbringen.</p><p style="margin-bottom: 3rem;">Wir bieten unsere Services als Gesamtlösung oder modular abrufbar an. Darüber hinaus unterstützen wir unsere Kund*innen bei der Entwicklung neuer Ratingverfahren, ebenso wie bei Risikomodellen und bei deren Validierung.</p><p class="eh3" style="max-width: 422px; margin-bottom: 1.5rem;">Digitalisierung step by step</p><p style="max-width: 95%;">Sie möchten mehr erfahren zu unseren individuellen Lösungen? Dann kontaktieren Sie unsere Expert*innen und vereinbaren Sie einen Beratungstermin. In diesem Gespräch stellen wir Ihnen gerne unsere Services genauer vor und zeigen Ihnen unsere Tools.</p>',
                },
                {
                  icon: 'GlobalAssetsAndRecovery_01',
                  headline: 'Kreditmanagement der Zukunft: IBM&nbsp;Kredit-Services',
                  content:
                    '<p style="margin-bottom: 2.5rem; font-size: 18px;">Die Digitalisierung der Kreditprozesse steht aktuell ganz weit oben auf der To-Do-Liste. Kund*innen erwarten einfache, digitale und schnelle Services, gleichzeitig zwingt der Kostendruck die Kreditinstitute zum Handeln.</p><p class="h6">Die Bankenbranche im Wandel</p><p>Das Kreditgeschäft ist stark von den aktuellen Herausforderungen der Finanzindustrie beeinflusst: Neben gestiegenen Regulationsanforderungen und neuen Wettbewerber*innen am Markt führen insbesondere niedrige Zinserträge, hohe Fixkosten bei langen Kreditlaufzeiten und ein derzeit noch geringer Automatisierungsgrad dazu, dass das Kreditgeschäft ineffizienter und unrentabler wird. Die Finanzinstitute stehen folglich vor der Herausforderung, Lösungen zu finden, die ausreichend Kapazitäten und Ressourcen sicherstellen und gleichzeitig die fixen Kosten signifikant reduzieren.</p><p style="margin-bottom: 2rem;">Das Ziel sollte sein, ein erfolgreiches, rentables und effizientes Kreditgeschäft zu betreiben und gleichzeitig den notwendigen Wandel voranzutreiben. Dafür benötigen Finanzinstitute Lösungen, die bei hoher Flexibilität die Qualität und Profitabilität des Kreditgeschäfts sicherstellen und gleichzeitig die notwendigen Prozesse bedarfsgerecht unterstützten.</p><p class="h6">Unser Lösungsansatz:<br />Praxis Knowhow für die digitale Transformation</p><p>Unsere IBM Kredit-Service-Lösung setzt mit einem bedarfsgerechten, den Anforderungen von Finanzinstituten maßgeschneiderten Angebot an, um Sie auf Ihrem Weg in die Zukunft zu unterstützen und Ihnen die Möglichkeit zu bieten, Ihre Kosten zu variabilisieren.</p><p style="margin-bottom: 2rem;">Hierfür bieten wir ein breites Spektrum an Möglichkeiten: von einzelnen Fachservices und IT-Dienstleistungen bis hin zu einer kompletten Banking Platform. Beispielsweise können unsere erfahrenen IBM Mitarbeitenden Sie während der Auslastungsspitzen im operativen Tagesgeschäft unterstützen - und das mit Ihren Prozessen und auf Ihren Systemen. Dabei können wir die Servicierung von Kredit-Lebenszyklen für einfache bilaterale bis hin zu hochkomplexen strukturierten Finanzierungen sowie die Administration und Verwaltung von Sicherheiten übernehmen. Auf Wunsch können unsere Kolleg*innen Sie zusätzlich bei Tätigkeiten begleiten, die die Zukunftsfähigkeit und digitale Neuausrichtung Ihres Instituts unterstützen.</p><p class="h6">Die IBM Banking Platform: Modular, individuell, nachhaltig</p><p style="margin-bottom: 3rem;">Darüber hinaus besteht die Möglichkeit Ihre Kreditadministration als Teil einer digitalen Neuausrichtung in die IBM Banking Platform zu überführen, sodass Sie neben unserer fachlichen auch von unserer IT-Expertise profitieren. Die gewünschten Serviceleistungen und die Leistungen der IBM IT-Platform können modular und individuell auf Ihre Bedürfnisse zugeschnitten gebucht werden. Sie können einzelne Prozessschritte übergeben aber auch die komplette Kreditabwicklung. Langfristig gesehen profitieren Sie von dem Know-how unserer erfahrenen Mitarbeitenden sowie einer modernen IBM Banking Platform, die konstant weiterentwickelt wird und das selbstverständlich unter Einhaltung aller relevanten regulatorischen sowie gesetzlichen Anforderungen.</p><p class="eh3" style="max-width: 422px; margin-bottom: 1.5rem;">Digitalisierung in Ihrem Tempo</p><p style="max-width: 95%;">Haben wir Ihr Interesse geweckt? Dann kontaktieren Sie uns gerne und vereinbaren einen Gesprächstermin. Wenn Sie unsere Kredit-Service vorab testen möchten, kein Problem! Sie können dies probeweise ohne lange Vertragsbindung ausprobieren und sich selbst von der Kompetenz und Flexibilität, die wir von IBM im Rahmen ihrer Banking Platform bieten, überzeugen. Wir freuen uns auf Ihre Kontaktaufnahme!</p>',
                },
                {
                  icon: 'GlobalAssetsAndRecovery_02',
                  headline: 'KYC/AML: Prozesse vereinfachen und Compliance verbessern',
                  content:
                    '<p style="margin-bottom: 2.5rem; font-size: 18px;">Finanzinstitute stehen heutzutage beim Thema KYC/AML vor der großen Herausforderung, die steigenden regulatorischen Anforderungen mit den vorhandenen Ressourcen zu managen. Wir unterstützen gerne mit zuverlässigen AML-Screenings dank digitaler und einfacher Know Your Customer Lösungen.</p><p class="h6">Die Bankenbranche im Wandel</p><p>Finanzinstitute stehen heutzutage beim Thema KYC/AML vor der großen Herausforderung, die steigenden regulatorischen Anforderungen mit den vorhandenen Ressourcen zu managen. Hieraus können Nachteile und Risiken für die Reputation für die Institute entstehen. Meist führt dies zu einem konstanten Anstieg der Aufwände für KYC/AML. Zusätzlich sind Automatisierungsprozesse und Digitalisierungsgrade in den meisten Instituten noch nicht weit vorangeschritten, weshalb Einsparpotenziale nicht voll ausgeschöpft werden.</p><p style="margin-bottom: 2rem;">Eine der großen Aufgaben im Bereich KYC/AML besteht derzeit darin, die komplexen regulatorischen und gesetzlichen Anforderungen mit den vorhandenen Ressourcen in gleichbleibend hoher Qualität umzusetzen. Die regelmäßige Anpassung der Anforderungen durch die Aufsicht führt dazu, dass diese bewertet und immer wieder umgesetzt werden müssen. Dafür werden ebenfalls Ressourcen benötigt. Institute verlassen sich aktuell noch stark auf fragmentierte Systemlösungen. Es fehlt oft an integrierten Gesamtlösungen, die KYC/AML Prozesse vereinfachen und dadurch den Ressourcenbedarf senken.</p><p class="h6">Unser Lösungsansatz:<br />Modulare Leistungen für Ihre KYC/AML Prozesse</p><p style="margin-bottom: 3rem;">Wir von IBM können Sie flexibel bei Ihren KYC/AML Services unterstützen. Unsere erfahrenen Expert*innen können Ihre Mitarbeiter und Mitarbeiterinnen von der Datensammlung über die Transaktionsüberwachung bis hin zur Prüfung von Verdachtsfällen unterstützen. Dabei profitieren Sie von der Modularität unserer Leistungen: Sie können einzelne Services buchen oder auch die Unterstützung beim kompletten KYC/AML Prozess. Dabei sind unsere Fachexpert*innen ständig in den neuesten regulatorischen und gesetzlichen Anforderungen geschult. Außerdem haben sie die Möglichkeit Ihre KYC/AML Services in die IMB Banking Platform zu überführen, um dann zusätzlich von der konstanten Weiterentwicklung dieser Plattform zu profitieren.</p><p class="eh3" style="max-width: 422px; margin-bottom: 1.5rem;">Digitalisierung individuell auf Sie zugeschnitten</p><p style="max-width: 95%;">Haben wir Ihr Interesse geweckt? Dann kontaktieren Sie uns und vereinbaren ein Erstgespräch mit unseren Expert*innen. Gerne führen wir Sie durch unsere zahlreichen und brandaktuellen Tools und prüfen gemeinsam, an welcher Stelle wir Sie am besten unterstützen können.</p>',
                },
                {
                  icon: 'ManagingContractualFlow',
                  headline: 'Einfach, schnell, effizient: Payment as a Service (PayaaS)',
                  content:
                    '<p style="margin-bottom: 2.5rem; font-size: 18px;">Die neue Welt des Zahlungsverkehrs ist zunehmend digital, kosteneffizient und findet in Echtzeit statt. Unser Expert*innen-Team steht bereit für alle Fragen und Lösungen bereit, damit Sie sich um Ihr Kerngeschäft kümmern können.</p><p class="h6">Die Bankenranche im Wandel</p><p>Der Zahlungsverkehr ist ein elementarer Bestandteil eines jeden Bankinstituts und die erfolgreiche Durchführung der Transaktionen ist zu jedem Zeitpunkt sicherzustellen. Nicht fristgerecht ausgeführte Zahlungen, die z.B. durch Personalengpässe entstehen, können neben operationalen Risiken zu monetären Effekten bis hin zu Reputationsschäden im Markt oder gar Institutsschließungen führen. Insbesondere kleinere Einheiten stehen dabei vor der Herausforderung, diese Situation kosteneffizient umzusetzen.</p><p>Erwartete und unerwartete Ressourcenengpässe können zu einem ungewollten Verzug in der Bearbeitung von Zahlungsaufträgen führen. Ein Risiko, das jedoch durch strategische Herangehensweise im Vorhinein minimiert werden kann.</p><p style="margin-bottom: 2rem;">PayaaS vereinfacht das Management von Zahlungsströmen. Sie können Ihre Prozesse auslagern und sich dadurch auf Ihr Kerngeschäft konzentrieren. Kein unnötiger Zeitaufwand, der in Software- und Hardwarestruktur geht. Wir kümmern uns gerne darum:</p><p class="h6">Unser Lösungsansatz:<br />Digitaler Zahlungsverkehr ganz individuell</p><p style="margin-bottom: 1.5rem;">Unsere fachlich versierten IBM Mitarbeiter*innen bringen langjährige Erfahrung im Bankenumfeld mit und stehen gerne bereit, um bei der Durchführung von Zahlungsaufträgen zu unterstützen – und das selbstverständlich unter Einbehaltung aller fachlichen und regulatorischen Anforderungen. Dabei profitieren Sie von unserer Flexibilität:</p><ul class="ul-styled"><li>Sie können unsere Leistungen individuell tage-, wochen- oder monatsweise und vor allem kurzfristig buchen.</li><li>Sie haben Sie die Möglichkeit, einzelne oder mehrere Prozessschritte auszulagern, womit die Ressourcen für Sie leicht skalierbar sind.</li><li>Zur Abwicklung der Zahlungen können wir Ihre Systeme verwenden, sodass keine System- oder Prozessanpassungen notwendig sind und zudem kein Knowhow-Verlust entsteht.<br />Profitieren Sie dabei von unserer Expertise Prozesse zu digitalisieren und optimieren.</li></ul><p style="margin-bottom: 3rem;">Mithilfe von Payment as a Service (PayaaS) können Sie einen stabilen Bankbetrieb aufrechterhalten und kurzfristige Ressourcenengpässe ausgleichen.</p><p class="eh4" style="max-width: 422px; margin-bottom: 1.5rem;">Haben wir Ihr Interesse geweckt?</p><p style="max-width: 95%">Sie möchten mehr zu unseren Lösungen erfahren? Dann freuen wir uns auf ein Gespräch.</p>',
                },
                {
                  icon: 'Analyze',
                  headline: 'Update für ein zukunftsfähiges Meldewesen',
                  content:
                    '<p style="margin-bottom: 2.5rem; font-size: 18px;">Mit der Digitalisierung soll alles schneller, einfacher und effizienter werden. So auch das Meldewesen in der Kreditwirtschaft, das sich derzeit jedoch vor allem durch immer neue aufsichtsrechtliche Anforderungen und Verwaltungswirrwarr auszeichnet. Wie können also die neuen Meldeanforderungen in die IT-Systeme umgesetzt werden, ohne dafür immens hohe Ressourcen aufbringen zu müssen? Wir hätten da einen Lösungsvorschlag für Sie:</p><p class="h6">Die Bankenranche im Wandel</p><p>Die Finanzbranche befindet sich derzeit in einem großen Umbruch: die Finanzkrise, die steigende Beliebtheit von Kryptowährungen und Themen wie Nachhaltigkeit stellen Finanzinstitute aktuell vor ganz neue Herausforderungen. Gleichzeitig müssen sie ihr Geschäft kosteneffizient weiterführen und dabei neuen Wettbewerber*innen, die auf den Markt drängen, trotzen.</p><p style="margin-bottom: 2rem;">Eine der größten Herausforderungen im Bereich des Meldewesens ist eine immer größer werdende Welle an Regulatorien, die die Kosten für die notwendigen IT-Lösungen und das fachliche Know-how immer weiter in die Höhe treibt. Der regulatorische Anpassungsbedarf ist schon jetzt immens und setzt die Finanzinstitute unter Druck. Dabei muss die Umsetzungen der Änderungen termingerecht und fachlich absolut korrekt erfolgen, die Meldungsproduktion wächst und gleichzeitig steigt auch der Kostendruck. Das führt im schlimmsten Fall dazu, dass Banken und Finanzinstitute den Anforderungen nicht mehr gerecht werden. Es drohen Reputationsschäden, hohe Strafzahlungen bis hin zum Lizenzentzug oder sogar persönlichen Konsequenzen für das Topmanagement.</p><p class="h6">Unser Lösungsansatz:<br />IT-Knowhow & Beratung rund um Ihr Meldewesen</p><p>Wir von IBM bieten das Business Process as a Service zu einem festen Preis im Bereich des Meldewesens an. Zum einen gehört dazu die vollumfängliche Erstellung der regulatorischen Meldungen und Auswertungen unter Verwendung einer Standard-Meldewesensoftware. Zum anderen bieten wir das fachliche Testen von Releases, Patches und Hotfixes im Rahmen des für die Serviceerbringung üblichen Produktionsbetriebs an.</p><p style="margin-bottom: 3rem;">Außerdem stellen wir zeitnahe Informationen über anstehende regulatorische Normänderungen zu den im Serviceumfang für die Bank enthaltenen Meldungen und Auswertungen zur Verfügung. Zusätzlich bieten wir mit unseren Expert*innen an Ihrer Seite eine permanente Beratung in regulatorischen Fragestellungen an und außerdem unsere Unterstützung bei der Umsetzung geänderter oder neuer Normvorgaben bei gesonderter Beauftragung.</p><p class="eh4" style="max-width: 422px; margin-bottom: 1.5rem;">Digitalisierung individuell auf Sie zugeschnitten</p><p style="max-width: 95%;">Haben wir Ihr Interesse geweckt? Dann vereinbaren Sie doch ein Erstgespräch mit unseren Expert*innen. Gerne führen wir Sie durch unsere zahlreichen und brandaktuellen Tools und prüfen gemeinsam, an welcher Stelle wir Sie am besten unterstützen können.</p>',
                },
              ],
              showVisual: true,
            },
          },
        ],
      },
    },
    {
      name: 'Section',
      props: {
        id: 'methoden',
        background: {
          color: '#f4f4f4',
          dark: false,
        },
        fullWidth: true,
        titles: {
          left: '<p>Ihre Vorteile</p><p class="eh4">Ihr Gewinn durch die<br />IBM Banking Platform</p>',
        },
        children: [
          {
            name: 'TeaserList',
            props: {
              rowWrap: true,
              children: [
                {
                  name: 'PictogramTeaser',
                  props: {
                    size: 'lg',
                    icon: 'GlobalMarketsBar',
                    headline: 'Kostenreduktion',
                    text: 'Erprobte Profitabilitätsfaktoren wie die Hebung von Synergien, Offshoring, Automatisierung und KI ermöglichen gleichzeitig signifikante Kosteneinsparungen und effizienten, verlässlichen Service.',
                    light: true,
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    size: 'lg',
                    icon: 'CloudAssets',
                    headline: 'Stabiler Betrieb',
                    text: 'Unsere langjährige Fach- und IT-Expertise gewährleistet Stabilität. Im Business-Process-Outsourcing übernehmen wir alle Aufgaben, die Sie abgeben möchten, und halten Ihre Prozesse State-of-the-Art.',
                    light: true,
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    size: 'lg',
                    icon: 'FinanceStrategy',
                    headline: 'Innovation',
                    text: 'Die Anforderungen der Digitalisierung sind für Einzelinstitute oft nur schwer zu bewältigen. Als unser Partner können Sie nachhaltig von unserer hohen Innovationskompetenz und dem Technologie-Vorsprung von IBM profitieren.',
                    light: true,
                  },
                },
                {
                  name: 'PictogramTeaser',
                  props: {
                    size: 'lg',
                    icon: 'GlobalPartner',
                    headline: 'Perspektiven für Mitarbeiter*innen',
                    text: 'Im Rahmen des Outsourcings können wir Mitarbeiter*innen der einzelnen Bereiche übernehmen und ihnen vielfältige Entwicklungsmöglichkeiten und nachhaltige Beschäftigungsperspektiven bieten.',
                    light: true,
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
                    headline: 'Fritz Heimerl',
                    copy: 'Partner<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/fritz.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      // {
                      // 	type: 'linkedIn',
                      // 	title: 'Vernetzen auf Linkedin',
                      // 	url: 'https://www.linkedin.com/in/jean-henrik-zitterbart-b294a39b',
                      // },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Heimerl%2C%20',
                      },
                    ],
                  },
                },
                {
                  name: 'LetsTalkTeaser',
                  props: {
                    headline: 'Dr. Felix Buchkremer',
                    copy: 'Associate Partner<br />Banking & Financial Markets',
                    image: {
                      src: '/img/people/felix.jpg',
                      width: 448,
                      height: 448,
                    },
                    links: [
                      {
                        type: 'linkedIn',
                        title: 'Vernetzen auf Linkedin',
                        url: 'https://www.linkedin.com/in/felixbuchkremer',
                      },
                      {
                        type: 'email',
                        title: 'Kontakt aufnehmen',
                        url: 'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Dr.%20Buchkremer%2C%20',
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
