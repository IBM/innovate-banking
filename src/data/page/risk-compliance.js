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
							current: false,
						},
						{
							name: 'Risk & Compliance',
							url: 'risk-compliance',
							active: true,
							current: true,
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
					heading: 'Risk & Compliance<br />nachhaltig steuern',
					image: {
						src: '/img/stage-process-transformation.jpg',
						width: 1056,
						height: 386,
						alt: 'Risk & Compliance nachhaltig steuern',
					},
					imageMobile: {
						src: '/img/stage-process-transformation-mobile.jpg',
						width: 672,
						height: 672,
						alt: 'Risk & Compliance nachhaltig steuern',
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
						left: '<p>Mit Technologie komplexe<br />Prozesse neu denken</p>',
					},
					background: {
						gradient: 'linear-gradient(180deg, #FFFFFF 0%, #EDF5FF 100%)',
					},
					images: {
						bottom: {
							src: '/img/section-risikosteuerung.svg',
							width: 402,
							height: 229,
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
									'<p>Verlässliches Risikomanagement und das Einhalten regulatorischer Vorgaben ist für Banken essenziell, ist aber im letzten Jahrzehnt immer aufwendiger geworden. Wir machen komplexe Vorgänge einfach.</p>',
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
									'<h3 class="h4">Gesteigerte Effizienz durch Analytics, KI und Automatisierung</h3><p>Durch den Einsatz von Analytics, KI und Automatisierung kann im Bereich Risk & Compliance eine Effizienzsteigerung von bis zu 40 % erreicht werden.</p>',
							},
						},
						{
							name: 'RichText',
							props: {
								content:
									'<h3 class="d1 large">40%</h3><p>Effizienzsteigerung durch Analytics, KI<br />und Automatisierung im Banking</p>',
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
										headline: 'Cleveres Risikomanagement und Risikocontrolling als Erfolgsfaktor',
										content:
											'<p>Risikomanagement und -controlling sind entscheidend für risikoadäquate und profitable Akquise.</p><p>Mit unseren State-of-the-Art Methoden und Tools können Sie Risiken identifizieren, einschätzen und steuern. Wir unterstützen Sie beispielsweise dabei, eine relevante Datenbasis zu erstellen und eine KI-gestützte Plattform aufzubauen.</p><p>Unsere hoch qualifizierten Berater begleiten die Konzeption und Umsetzung quantitativer Modelle ebenso wie die Optimierung der Risikoprozesse und stellen sicher, dass sowohl regulatorische Vorgaben als auch interne Reporting- und Steuerungsanforderungen erfüllt werden.</p>',
									},
									{
										icon: 'UserSearch',
										headline: 'Mehr Effizienz bei regulatorischen Melde- und Aufsichtsprozessen',
										content:
											'<p>Wir helfen Ihnen, den Meldeanforderungen der Aufsichtsbehörden gerecht zu werden und ESG-Kriterien zu implementieren.</p><p>Wir begleiten Banken und Aufsichtsbehörden ganzheitlich bei der strategischen Entwicklung und Umsetzung zeitgemäßer Prozess- und Systemlandschaften unter Berücksichtigung der ESG-Standards. Integrierte Datenlandschaften, innovative Datenplattformen, Plattformökonomien, Cloud-Technologien und KI-gestützte, automatisierte Lösungen sind Treiber für effiziente regulatorische Prozesse, die dabei helfen, ESG-Standards einzuhalten. Unsere Lösungen tragen signifikant zur Automatisierung, Flexibilisierung, Skalierung und Kostenreduzierung bei. Gleichzeitig unterstützen sie unsere Kunden bei ihrem Streben nach Nachhaltigkeit.</p>',
									},
									{
										icon: 'ManagingContractualFlow',
										headline: 'Digitale Transformation mit AML- oder KYC-Systemen',
										content:
											'<p>Unser Service-Angebot deckt Ihre Bedürfnisse End-to-End mit führenden Methoden und innovativen Lösungen ab.</p><p>Unsere effizienten Lösungen helfen Ihnen, aufsichtsrechtliche Anforderungen zur Bekämpfung von Geldwäsche (Anti Money Laundering) und Finanzmarktkriminalität zu erfüllen und Know-Your-Customer-Prozesse zu optimieren. Wir konzipieren Target-Operating-Modelle für Sie und implementieren AML- oder KYC-Systeme.</p><p>Wir beraten Sie bei sämtlichen Fragen der digitalen Transformation und bieten Ihnen auf Ihre Bedürfnisse abgestimmte Managed-Service-Angebote, mit denen wir die gesamte Risk & Compliance-Wertschöpfungskette abdecken.</p>',
									},
									{
										icon: 'FinanceStrategy',
										headline: 'Automatisierung bei Trade-Finance-Transaktionen',
										content:
											'<p>Die Komplexität von Trade-Finance-Transaktionen bietet hohes Potenzial zur Effizienzsteigerung durch Automatisierung und KI.</p><p>Ein intelligentes Zusammenspiel von Mensch und Technologie ermöglicht es, komplexe Trade-Finance-Transaktionen einfacher zu bewältigen. IBM Technologien wie Optical Character Recognition (OCR), Künstliche Intelligenz (KI), Robotic Process Automation (RPA) unterstützen Ihre Trade-Finance-Abteilungen.</p><p>Mit unseren smarten Technologien kreieren wir voll automatisierte End-to-End-Prozesse. Eine wichtige Rolle spielen dabei intelligente Dokumentenerfassung, digitale Plattformökonomie, KI, Robotics und Blockchain-Lösungen sowie Compliance Analysen.</p>',
									},
									{
										icon: 'Analyze',
										headline: 'Ein umfassender Compliance-Rahmen für Cloud-Lösungen',
										content:
											'<p>Wir begleiten unsere Kunden bei ihrer Cloud-Transformation ganzheitlich und haben dabei einen globalen Standard gesetzt.</p><p>Der verstärkte Einsatz von Cloud-Computing zwingt Banken, sich mit den regulatorischen Anforderungen an den sicheren Betrieb von Cloud-Systemen auseinanderzusetzen. Unsere marktführenden Methoden und Tools erstellen einen umfassenden Compliance-Rahmen für Cloud-Lösungen.<br />Dabei werden die gesetzlichen Mindestanforderungen an sicheres Cloud-Computing in Europa ebenso umgesetzt wie deutsche oder globale regulatorische Anforderungen. Dies kann auch um kundeneigene Policy-Vorgaben ergänzt werden.</p>',
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
							'<p>Ihre Vorteile</p><p class="eh4">Unser Angebot für Ihren Erfolg<br />im Bereich Risk & Compliance</p>',
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
											icon: 'GlobalPartner',
											headline: 'Fundierte Beratung',
											text:
												'Wir beraten Sie zu Target-Operating-Modellen, Prozessanalyse und -optimierung, regulatorischen Fragen und zur digitalen Transformation von Risk & Compliance-Einheiten.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'CloudAssets',
											headline: 'Neuste Technologie',
											text:
												'Wir bieten smarte Lösungen zur Digitalisierung komplexer KYC/AML-Prozesse, Datenintegration, Robotics, KI sowie führende Modernisierungs- und Cloud-Transformationstechnologien.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											icon: 'GlobalMarketsBar',
											headline: 'Managed Services',
											text:
												'Unsere maßgeschneiderten Angebote decken die gesamte Risk & Compliance-Wertschöpfungskette ab und können individuell und konkret an Ihre Bedürfnisse angepasst werden.',
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
											headline: 'Marinela Bilic-Nosic',
											copy: 'Partner<br />Banking & Financial Markets',
											image: {
												src: '/img/people/marinela.jpg',
												width: 448,
												height: 448,
											},
											links: [
												{
													type: 'linkedIn',
													title: 'Vernetzen auf Linkedin',
													url: 'https://www.linkedin.com/in/marinelabilic',
												},
												{
													type: 'email',
													title: 'Kontakt aufnehmen',
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrte%20Frau%20Bilic-Nosic%2C%20',
												},
											],
										},
									},
									{
										name: 'LetsTalkTeaser',
										props: {
											headline: 'Britta Daffner',
											copy: 'Senior Manager<br />Banking & Financial Markets',
											image: {
												src: '/img/people/britta.jpg',
												width: 448,
												height: 448,
											},
											links: [
												{
													type: 'linkedIn',
													title: 'Vernetzen auf Linkedin',
													url: 'https://www.linkedin.com/in/britta-daffner',
												},
												{
													type: 'email',
													title: 'Kontakt aufnehmen',
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrte%20Frau%Daffner%2C%20',
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
					claim: 'Innovate Banking ist eine Initiative von IBM zur digitalen Transformation.',
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
