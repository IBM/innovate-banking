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
							current: true,
						},
						{
							name: 'Risikosteuerung',
							active: false,
							current: false,
						},
						{
							name: 'Kundenerlebnisse',
							active: false,
							current: false,
						},
						{
							name: 'Technologien',
							active: false,
							current: false,
						},
						{
							name: 'Effizienz',
							active: false,
							current: false,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {
					heading: 'Prozess-Transformation<br/> im Banking',
					image: {
						src: '/img/stage-process-transformation.jpg',
						width: 1056,
						height: 386,
						alt: 'Prozess-Transformation im Banking',
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
							name: 'Let’s Talk',
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
						left: '<p>Ganzheitliche Transformation durch fachliche Expertise und neueste Technologie</p>',
					},
					background: {
						gradient: 'linear-gradient(180deg, #FFFFFF 0%, #EDF5FF 100%)',
					},
					images: {
						bottom: {
							src: '/img/section-process-transformation.svg',
							width: 402,
							height: 363,
							layout: 'responsive',
							style: {
								maxWidth: '50%',
								marginBottom: '-7%',
							},
						},
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>Mit unserer Banking-Expertise und Technologiekompetenz begleiten wir die Transformation Ihrer End-to-End-Geschäftsabläufe – von der Konzeption bis zur Umsetzung.</p>',
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
									'<h3 class="h4">Gesteigerte operative Exzellenz und höhere Wettbewerbsfähigkeit mit IBM</h3><p>Unsere Analysen identifizieren in Bankprozessen ein durchschnittliches Einsparungspotenzial von 30% durch die Transformation der Prozesse unter Nutzung neuer Technologien. Dies hat unmittelbaren Einfluss auf eine verbesserte Cost-Income-Ratio.</p>',
							},
						},
						{
							name: 'RichText',
							props: {
								content:
									'<h3 class="d1 large">30%</h3><p>Einsparungspotenzial durch Prozess-Transformation im Banking</p>',
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
										icon: 'UserSearch',
										headline: 'Mehr Kundenorientierung und Effizienz im Kreditgeschäft',
										content:
											'<p>Die Transformation der Kredit-Prozesse in Banken ist ein großer Hebel auf dem Weg zu mehr Effizienz und Kundenakzeptanz. Mit unseren Lösungen verschlanken und automatisieren wir Ihre kundenbezogenen und internen Prozesse. Wir ermöglichen echte Omni-Kanalfähigkeit, verkürzen „Time-to-Yes“ und „Time-to-Cash“ signifikant und erhöhen nachhaltig die Kundenzufriedenheit und Ihre Position im Wettbewerb. Dabei richten wir Ihre Prozesse entlang Ihrer Geschäftsstrategie aus und bringen dabei modernste Technologien zum Einsatz, wie z. B. unsere erprobten Content-Intelligence-Lösungen.</p>',
									},
									{
										icon: 'FinanceStrategy',
										headline: 'Neue Wege für Core-Banking und Payment-Lösungen',
										content:
											'<p>Clevere digitale Lösungen helfen Ihnen, die zunehmende Komplexität in Ihrem Tagesgeschäft zu bewältigen. Sie möchten die Silos Ihrer Legacy-Bankenanwendungen aufbrechen und das Potenzial von Open-Banking-Lösungen nutzen? Oder Sie möchten mit Ihren Payment-Lösungen den Markt noch zukunftssicherer bedienen? Als kompetenter und zuverlässiger Partner begleiten wir Sie durch die Transformation und stellen Ihre Wettbewerbsfähigkeit sicher – von der Konzeption bis zum globalen Roll-out und zur Umsetzung. Wir schrecken vor Komplexität nicht zurück!</p>',
									},
									{
										icon: 'ManagingContractualFlow',
										headline: 'Mehr Freiheiten durch ein effektives Back Office',
										content:
											'<p>Gestraffte Marktfolgeprozesse versprechen ein großes Einsparungspotenzial. Mit der Kombination aus globalen Best Practices und dem Wissen, was aktuell technologisch möglich ist, gelingt die Transformation Ihrer Marktfolge. Wir bieten Ihnen maßgeschneiderte und agile Lösungen mit der Möglichkeit, klein zu starten und schnell zu skalieren. Die Automatisierung von Back-Office-Aufgaben bringt Ihnen zweistellige Einsparpotenziale, größere Mitarbeiter- und Kundenzufriedenheit. Wir begleiten Sie in der Transformation – von der Analyse bis zur Umsetzung.</p>',
									},
									{
										icon: 'GlobalAssetsAndRecovery_01',
										headline: 'Wachstum durch Digital Asset Banking',
										content:
											'<p>Durch Digital Assets können Sie neue Potenziale und zusätzliche Geschäftsfelder erschließen. Die Bank der Zukunft baut ihre Strategien um Digital Assets herum auf. Mit der Nutzung von Tokenisierung können Sie nicht bankenfähige Vermögenswerte digital und sicher verwalten. Durch unsere Partnerschaften mit marktführenden Software-Anbietern bieten wir Ihnen Kompetenz aus einer Hand. Sie erhalten Zugang zu neuester Technologie und einen zuverlässigen Partner bei der Gestaltung und Umsetzung innovativer Custody-Lösungen für das steigende Segment der vermögenden Privatkunden.</p>',
									},
									{
										icon: 'Analyze',
										headline: 'Neue Perspektiven für Finance & Controlling',
										content:
											'<p>Intelligente Lösungen für Finance und Controlling minimieren Risiken. In einem dynamischen Umfeld muss die Gesamtbanksteuerung schneller und mit geringeren Kosten mehr liefern. Wir helfen Ihnen, den Anforderungen gerecht zu werden und haben dabei alle Dimensionen im Blick: Ihre Daten, die Fachlichkeit, die IT-Landschaft und das zielführende Projektvorgehen. Gemeinsam mit unseren marktführenden Partnern für bankfachliche Software begleiten wir Ihren Weg zur modernen Banksteuerung. Technologienutzung für effizientes Datenmanagement und IT-Services, fachliche Standardmethoden und Agilität bringen Sie auf Erfolgskurs.</p>',
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
							'<p>Ihre Vorteile</p><p class="eh4">Konkrete Vorteile für Ihre Bank durch Prozess-Transformation mit IBM </p>',
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
												'Durch unsere Nähe zur Technologie bringen wir eine Vielzahl von einsatzbereiten Assets und erprobten Methoden mit, die Ihre Transformation beschleunigen. ',
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
						color: '#161616',
						dark: true,
					},
					titles: {
						left:
							'<p class="d1">Let’s talk!</p><p class="p">Fragen oder Interesse an weiteren Informationen? Sprechen Sie uns an!</p>',
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
											copy: 'Partner<br />Banking & Financial Markets DACH',
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
											copy:
												'Managing Business Transformation Consultant<br />Banking & Financial Markets DACH',
											image: {
												src: '/img/people/manuel.jpg',
												width: 288,
												height: 288,
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
					claim:
						'Innovate Banking ist eine Initiative von IBM zur digitalen Transformation des Finanzsektors.',
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
