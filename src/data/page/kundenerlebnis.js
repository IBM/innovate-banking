/* eslint-disable max-len */
module.exports = req => {
	return {
		meta: {
			title: 'Innovate Banking',
			slogan: 'Eine Initiative von IBM',
			isHome: false,
		},
		components: [
			{
				name: 'MainNavigation',
				props: {
					items: [
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Kundenerlebnis',
							url: 'kundenerlebnis',
							active: true,
							current: true,
						},
						{
							name: 'Risk & Compliance',
							url: 'risk-compliance',
							active: true,
							current: false,
						},
						{
							name: 'Anwendungssysteme',
							url: 'anwendungssysteme',
							active: true,
							current: false,
						},
						{
							name: 'Banking-Plattform',
							url: 'banking-plattform',
							active: true,
							current: false,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {
					heading: 'Kundenerlebnis<br />neu erfinden',
					image: {
						src: '/img/stage-process-transformation.jpg',
						width: 1056,
						height: 386,
						alt: 'Kundenerlebnis neu erfinden',
					},
					imageMobile: {
						src: '/img/stage-process-transformation-mobile.jpg',
						width: 672,
						height: 672,
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
							// eslint-disable-next-line prettier/prettier
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
						left: '<p>Mehr Kundenbindung durch ein einzigartiges Kundenerlebnis</p>',
					},
					marginBottom: true,
					background: {
						gradient: 'linear-gradient(180deg, #FFFFFF 0%, #EDF5FF 100%)',
					},
					images: {
						bottom: {
							src: '/img/section-kundenerlebnis.svg',
							width: 402,
							height: 242,
							layout: 'responsive',
							style: {
								maxWidth: '50%',
								marginBottom: '-5.5%',
							},
						},
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p style="max-width: 544px;">Zufriedene Kunden sind Ihr wertvollstes Kapital. Erfahren Sie, wie Cloud-basierte Datenauswertung und KI ein einzigartiges Kundenerlebnis ermöglichen und die Arbeitswelt Ihrer Mitarbeiter*innen im Front-Office revolutionieren.</p>',
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
									'<h3 class="h4">Kundenbedürfnisse erkennen, Zufriedenheit steigern und neue Vertriebschancen identifizieren</h3><p>Unsere Befragungen von Führungskräften von über 400 Banken weltweit zeigen, dass Banken, die sich auf die Transformation von Kundenabläufen konzentrieren, messbare Wettbewerbsvorteile haben – sowohl auf der Kosten- als auch auf der Ertragsseite.</p>',
							},
						},
						{
							name: 'RichText',
							props: {
								content:
									'<div class="bx--row" style="margin-bottom: 1.5rem;"><div class="bx--col"><h3 class="d1">+30%</h3><p>Ertrag pro Kunde (Privatkunden, Zins- und Kommissionsgeschäft)</p></div><div class="bx--col"><h3 class="d1">–20%</h3><p>Cost-to-Serve pro Kunde (Retail)</p></div></div>',
							},
						},
						{
							name: 'RichText',
							props: {
								content:
									'<p class="c1">Quelle: Industrie Benchmarks Banking, IBM Institute for Business Value</p>',
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
						dark: true,
						gradient:
							'linear-gradient(180deg, rgba(38,38,38,1) 0%, rgba(38,38,38,1) 25%, rgba(8,21,59,1) 40%, rgba(0,44,154,1) 100%)',
					},
					colWrapChildren: false,
					rowWrapChildren: false,
					children: [
						{
							name: 'Accordion',
							props: {
								items: [
									{
										icon: 'GlobalAssetsAndRecovery_01',
										headline: 'Mehr Kundenorientierung durch kontextuelles&nbsp;Banking',
										content:
											'<p>Wir erhöhen Kundenzufriedenheit durch zielgruppenspezifische Angebote – ob für Privat- oder Firmenkunden.</p><p>Wir verschaffen Ihnen Wettbewerbsvorteile an allen Berührungspunkten: Flexible Arbeitsplatzlösungen im Front-Office unterstützen Sie bei der Beratung, innovative Self-Service-Konzepte erweitern das digitale Leistungsangebot, mobiles und dialog-basiertes Banking eröffnet neue Perspektiven in der Kundenansprache.</p><p>Mit einer einheitlichen 360-Grad-Sicht auf den Kunden steigern wir die Effizienz und die Qualität in der Beratung und im Service. Dabei reduzieren wir manuelle Arbeit und liefern Ihnen relevante Erkenntnisse über Ihre Kunden zum richtigen Zeitpunkt.</p>',
									},
									{
										icon: 'ManagingContractualFlow',
										headline: 'Mehr Kundenbindung durch personalisierten&nbsp;Kundendialog',
										content:
											'<p>Der Schlüssel zu Relevanz und Loyalität liegt in der personalisierten Kundenansprache.</p><p>Wir analysieren Ihre Customer Journeys und identifizieren Verbesserungsmöglichkeiten – von der effizienten Generierung von Interessenten bis zum Abschluss. Dazu bereiten wir komplexe Inhalte zielgruppengerecht auf. Im Rahmen von Kampagnen können diese flexibel auf allen Kanälen für die vertriebliche Ansprache eingesetzt werden. Basierend auf den marktführenden Plattformen unserer Partner implementieren wir individuelle Lösungen zur Ausspielung personalisierter Inhalte, die für alle Kanäle dynamisch optimiert werden.</p>',
									},
									{
										icon: 'FinanceStrategy',
										headline: 'Bessere Ansprache durch Marketing-Intelligenz und Automation',
										content:
											'<p>Mit Marketing-Intelligenz und Automation unterstützen wir Sie bei der vertrieblichen Kundenansprache.</p><p>Unsere Lösungen vereinheitlichen Ihre Customer Journeys für eine regelbasierte Steuerung der Kundenansprache. Bewährte KI-Modelle ermöglichen eine dynamische Identifikation von Lebensereignissen, Produktneigung oder Abwanderungswahrscheinlichkeiten Ihrer Kunden.</p><p>Aus den darauf aufbauenden, automatisierten Kundendialogen entstehen neue potenzielle Vertriebschancen (Next Best Action) im dafür am besten geeigneten Vertriebskanal – ob digital, in der Bankfiliale oder über die Service-Hotline.</p>',
									},
									{
										icon: 'Analyze',
										headline: 'Marketing und Vertrieb effizient umsetzen&nbsp;und&nbsp;steuern',
										content:
											'<p>Unsere Lösungen ermöglichen die nahtlose Orchestrierung von Kundenkontext, Berührungspunkten und Bankprozessen.</p><p>Unsere Erfolgsfaktoren sind analytische Fähigkeiten, die lückenlose Einbeziehung von Daten und die Aussteuerung relevanter Inhalte auf den geeigneten Zugangspunkt. Die Kombination regelbasierter Ansätze mit spezialisierter KI ermöglicht ein effiziente und intelligente Steuerung Ihrer Kundenbeziehungen.</p><p>Dazu nutzen wir bewährte cloud-basierte Standardplattformen für ein beschleunigtes Time-to-Market, unterstützen Ihren operativen Betrieb bedarfsgerecht mit der benötigten Expertise und ermöglichen Banken so die Neuallokation bestehender Ressourcen.</p>',
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
						top: '<p>Ihre Vorteile</p><p class="eh4">Erfolgsfaktoren für<br />Ihr neues Kundenerlebnis</p>',
					},
					background: {
						dark: true,
						color: '#262626',
					},
					narrow: {
						bottom: true,
					},
					colWrapChildren: false,
					rowWrapChildren: false,
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
											text:
												'Über 1200 praxiserfahrene Spezialist*innen an 8 Standorten in der DACH-Region bieten das vollständige Spektrum von der Beratung über die Umsetzung bis zum Betrieb unserer Lösungen.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'CloudAssets',
											headline: 'Schnelle Umsetzung',
											text:
												'In crossfunktionalen Teams können wir Ihre Ziele schnell verwirklichen. Durch den Einsatz bewährter Lösungsmodule ermöglichen wir eine beschleunigte Umsetzung typischer Fragestellungen – in Wochen, nicht Monaten.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'GlobalPartner',
											headline: 'Partnerschaften',
											text:
												'Gemeinsam mit unseren Technologiepartnern entwickeln wir individuelle Lösungen für Sie, die auf vielfach am Markt bewährten Plattformen basieren.',
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
						color: '#161616',
						dark: true,
					},
					titles: {
						left:
							'<p class="d1">Let’s talk!</p><p class="p" style="max-width: 200px;">Fragen oder Interesse an weiteren Informationen?<br />Sprechen Sie uns an!</p>',
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Uzkan%2C%20',
												},
											],
										},
									},
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Horn%2C%20',
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
			{
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
			},
		],
	};
};
