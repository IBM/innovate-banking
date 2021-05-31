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
							name: 'Risikosteuerung',
							url: 'risikosteuerung',
							active: true,
							current: false,
						},
						{
							name: 'Kundenerlebnisse',
							active: false,
							current: false,
						},
						{
							name: 'Technologien',
							url: 'technologien',
							active: true,
							current: true,
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
					heading: 'Banking durch<br />Technologie<br />transformieren',
					image: {
						src: '/img/stage-process-transformation.jpg',
						width: 1056,
						height: 386,
						alt: 'Risikosteuerung im Banking',
					},
					imageMobile: {
						src: '/img/stage-process-transformation-mobile.jpg',
						width: 672,
						height: 672,
						alt: 'Risikosteuerung im Banking',
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
						left: '<p>IT-Innovationen für gesteigerte Wettbewerbsfähigkeit</p>',
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
									'<p>Ihre IT ist ein entscheidender Erfolgsfaktor für das Banking der Zukunft. Wir zeigen Ihnen den Weg und unterstützen Sie bei der Umsetzung Ihrer Transformationsprojekte.</p>',
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
									'<h3 class="h4">Mehr Nutzen und gesteigerte Wettbewerbsfähigkeit mit Hybrid-Cloud-Strategie</h3><p>Eine Hybrid-Cloud-Strategie mit einer Kombination aus Cloud-Lösungen und klassischen IT-Strukturen ermöglicht bis zu 2,5-mal mehr Nutzen im Vergleich zu punktuellen Cloud-Ansätzen.</p>',
							},
						},
						{
							name: 'RichText',
							props: {
								content:
									'<h3 class="d1 large">2,5x</h3><p>mehr Nutzen im Vergleich zu punktuellen Cloud-Ansätzen</p>',
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
										headline: 'Mit modernisierten Bank-Anwendungen auf Zukunftskurs',
										content:
											'<p>Ein modernes Core-Banking System erhöht die Agilität der Bank und reduziert dabei Kosten. Die Modernisierung Ihrer Kernanwendungen bringt Sie auf Zukunftskurs und lässt Sie von zahlreichen Vorteilen profitieren. Sie steigern die Agilität Ihres Unternehmens, schaffen die Voraussetzungen für die Interoperabilität im Ökosystem, reduzieren Abhängigkeiten von einzelnen Anbietern und senken dabei sogar Ihre IT-Ausgaben.</p>',
									},
									{
										icon: 'FinanceStrategy',
										headline: 'Front-End-Digitalisierung für gesteigerte Kundenzufriedenheit',
										content:
											'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>',
									},
									{
										icon: 'Analyze',
										headline: 'Nachhaltige Effizienzsteigerung mit der IBM Banking Platform',
										content:
											'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>',
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
							'<p>Ihre Vorteile</p><p class="eh4">Ihre Vorteile bei der technologischen Transformation</p>',
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
												'Wir kombinieren bankfachliches Wissen mit technologischem Know-how. Dazu gehören auch die Skalierbarkeit bei komplexen Projekten, das Produktwissen unserer Entwicklungslabore und die Expertise unserer Partner.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'CloudAssets',
											headline: 'Rundum-Service',
											text:
												'Für unsere Kunden entwerfen wir eine Transformationsroadmap, validieren selektierte Handlungsoptionen über unser Garagen-Modell, entwickeln erste MVPs und führen die Projekte iterativ über unseren Modernization-Factory-Ansatz durch.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'GlobalPartner',
											headline: 'Partnerschaften',
											text:
												'Im Bereich bankfachliche Standardfunktionalität arbeiten wir mit einer Vielzahl von ISVs zusammen, für Cloud-Technologien mit AWS, Google und Microsoft. Auch Anbieter von Analyse-Software, Middleware sowie Support- und Management-Tools gehören zu unserem Öko-System.',
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
							'<p class="d1">Let’s talk!</p><p class="p">Fragen oder Interesse an weiteren Informationen?<br />Sprechen Sie uns an!</p>',
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
											copy: 'Industry Leader<br />Banking & Financial Markets DACH',
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
											headline: 'Uwe Gross',
											copy:
												'Partner<br />IBM Global Services, DACH',
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%Herr%Gross%2C%20',
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
