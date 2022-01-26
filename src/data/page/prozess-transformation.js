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
							name: 'Kundenerlebnis',
							url: 'kundenerlebnis',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
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
							name: 'IBM Banking Platform',
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
					heading: 'Prozesse<br />transformieren',
					image: {
						src: '/img/stage-subpage.png',
						width: 1056,
						height: 386,
						alt: 'Prozesse transformieren',
					},
					imageMobile: {
						src: '/img/stage-subpage-mobile.png',
						width: 672,
						height: 672,
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
						left: '<p>Ganzheitliche Transformation mit fachlicher Expertise und neuester Technologie</p>',
					},
					marginBottom: true,
					background: {
						gradient: 'linear-gradient(180deg, #fff 35%, #f4f4f4 100%)',
					},
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
					titles: {
						left: '<p>Ihr Potenzial</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<h3 class="h4">Gesteigerte operative Exzellenz und höhere Wettbewerbsfähigkeit mit IBM</h3><p style="max-width: 544px; margin-bottom: 2rem;">Der richtige Einsatz vorhandener Technologien ermöglicht die Transformation komplexer Prozesse in intelligente Workflows mit Einsparungen von mehr als 50 % der Betriebskosten und eine signifikante Steigerung der Kundenzufriedenheit von über 10 %.</p>',
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
						dark: false,
						color: '#dcf2ff',
					},
					colWrapChildren: false,
					rowWrapChildren: false,
					children: [
						{
							name: 'Accordion',
							props: {
								items: [
									{
										icon: 'UserSearch',
										headline: 'Mehr Kundenorientierung und Effizienz im&nbsp;Kreditgeschäft',
										content:
											'<p>Die Transformation der Kreditprozesse in Banken ist ein wichtiger Faktor auf dem Weg zu mehr Effizienz und Kundenakzeptanz.</p><p>Mit unseren Lösungen verschlanken und automatisieren wir Ihre kundenbezogenen und internen Prozesse. Wir ermöglichen echte Omni-Kanalfähigkeit, verkürzen „time-to-yes“ und „time-to-cash“ signifikant, erhöhen nachhaltig die Kundenzufriedenheit und Ihre Position im Wettbewerb. Dabei richten wir Ihre Prozesse entlang Ihrer Geschäftsstrategie aus und bringen dabei modernste Technologien zum Einsatz, wie z. B. unsere erprobten Content-Intelligent-Lösungen.</p>',
									},
									{
										icon: 'FinanceStrategy',
										headline: 'Neue Wege für Core&#8209;Banking und Payment&#8209;Lösungen',
										content:
											'<p>Mit einer Prozesslandschaft basierend auf digitalen Lösungen und intelligenten Workflows bringen Sie Ihre Kernleistungen auf Zukunftskurs. Wir finden den passgenauen Ansatz für Ihr Haus.</p><p>Eine Ergänzung oder stufenweise Ablösung von Legacy-Anwendungen macht den Weg frei für innovative Open-Banking-Lösungen. Herausforderungen im Zahlungsverkehr rund um Instant, neue EPI-Karten und digitale Währungen sowie die zeitgleiche Transformation etablierter Infrastrukturen im Markt erfordern umsichtige und schnelle Navigation.</p><p>Als kompetenter, zuverlässiger Partner begleiten wir Sie End-to-End bei der Konzeption notwendiger Anpassungen in den Prozessen und Systemen, der Positionierung neuer Produkte sowie der fachlichen und technischen Umsetzung.</p>',
									},
									{
										icon: 'ManagingContractualFlow',
										headline: 'Mehr Freiheiten durch ein effektives Back&nbsp;Office',
										content:
											'<p>Gestraffte Marktfolgeprozesse versprechen ein großes Einsparungspotenzial.</p><p>Wir bieten Ihnen maßgeschneiderte und agile Lösungen mit der Möglichkeit, klein zu starten und schnell zu skalieren. Die Automatisierung von Back-Office-Aufgaben bringt Ihnen zweistellige Einsparpotenziale, größere Mitarbeiter- und Kundenzufriedenheit. Wir begleiten Sie in der Transformation – von der Analyse bis zur Umsetzung.</p>',
									},
									{
										icon: 'GlobalAssetsAndRecovery_01',
										headline: 'Wachstum durch Digital Asset Banking',
										content:
											'<p>Durch Digital Assets können Sie neue Potenziale und zusätzliche Geschäftsfelder erschließen.</p><p>Die Bank der Zukunft baut ihre Strategien um Digital Assets herum auf. Mit der Nutzung von Tokenisierung können Sie nicht bankenfähige Vermögenswerte digital und sicher verwalten.<br />Durch unsere Partnerschaften mit marktführenden Software-Anbietern bieten wir Ihnen Kompetenz aus einer Hand. Sie erhalten Zugang zu neuester Technologie und einen zuverlässigen Partner bei der Gestaltung und Umsetzung innovativer Custody-Lösungen für das steigende Segment der vermögenden Privatkunden.</p>',
									},
									{
										icon: 'Analyze',
										headline: 'Neue Perspektiven für Finance & Controlling',
										content:
											'<p>Intelligente Lösungen für Finance und Controlling minimieren Risiken.</p><p>In einem dynamischen Umfeld muss die Gesamtbanksteuerung schneller und mit geringeren Kosten mehr liefern. Wir helfen Ihnen, den Anforderungen gerecht zu werden und haben dabei alle Dimensionen im Blick: Ihre Daten, die Fachlichkeit, die IT-Landschaft und das zielführende Projekt-Vorgehen.<br />Gemeinsam mit unseren marktführenden Partnern für bankfachliche Software begleiten wir Ihren Weg zur modernen Banksteuerung. Technologienutzung für effizientes Datenmanagement und IT-Services, fachliche Standardmethoden und Agilität bringen Sie auf Erfolgskurs.</p>',
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
						top:
							'<p>Ihre Vorteile</p><p class="eh4">Konkrete Vorteile für Ihre Bank<br />durch Prozess-Transformation mit IBM</p>',
					},
					background: {
						dark: false,
						color: '#fff',
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
											headline: 'Expertise',
											text:
												'Wir bringen ein breites und tiefes Verständnis von Bankprozessen mit. Eine Vielzahl unserer Berater in der DACH-Region sind selbst Banker oder Top-Experten für Banking-Technologie.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'CloudAssets',
											headline: 'Assets',
											text:
												'Durch unsere Nähe zur Technologie bringen wir eine Vielzahl von einsatzbereiten Assets und erprobten Methoden mit, die Ihre Transformation beschleunigen.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'GlobalPartner',
											headline: 'Partnerschaften',
											text:
												'Wir bringen umfangreiche Partnerschaften im Banking-Ecosystem mit, von denen wir gemeinsam profitieren können.',
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
						left:
							'<p class="d1">Let’s&nbsp;talk!</p><p class="p" style="max-width: 200px;">Fragen oder Interesse an weiteren Informationen?<br />Sprechen Sie uns an!</p>',
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Zitterbart%2C%20',
												},
											],
										},
									},
									{
										name: 'LetsTalkTeaser',
										props: {
											headline: 'Manuel Schuff',
											copy: 'Managing Consultant<br />Banking & Financial Markets',
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Schuff%2C%20',
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
