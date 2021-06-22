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
							current: true,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {
					heading: 'IBM Banking Platform<br />nutzen',
					image: {
						src: '/img/stage-process-transformation.jpg',
						width: 1056,
						height: 386,
						alt: 'IBM Banking Platform nutzen',
					},
					imageMobile: {
						src: '/img/stage-process-transformation-mobile.jpg',
						width: 672,
						height: 672,
						alt: 'IBM Banking Platform nutzen',
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
						left: '<p>Das umfassende Lösungsportfolio der IBM Banking Platform</p>',
					},
					background: {
						gradient: 'linear-gradient(180deg, #FFFFFF 0%, #EDF5FF 100%)',
					},
					images: {
						bottom: {
							src: '/img/section-banking-plattform.svg',
							width: 402,
							height: 254,
							layout: 'responsive',
							style: {
								maxWidth: '50%',
								marginBottom: '-6%',
							},
						},
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>Die IBM Banking Platform bietet umfassende Lösungen für sämtliche Bankprozesse. Wir nutzen dabei die relevanten Anwendungen unserer Plattform, Produkte unserer Partner sowie alle Möglichkeiten der Digitalisierung.</p>',
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
									'<h3 class="h4">Konzentration auf die Kernkompetenzen durch gesteigerte Effizienz</h3><p>Die IBM Banking Platform macht Bankprozesse effizienter und ermöglicht somit um bis zu 40 % niedrigere Kosten.</p>',
							},
						},
						{
							name: 'RichText',
							props: {
								content: '<h3 class="d1 large">40%</h3><p>bis zu 40 % niedrigere Kosten</p>',
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
										icon: 'OptimizeCashFlow_01',
										headline: 'Mehr Effizienz für Ihre Kreditportfolios',
										content:
											'<p>Unser Service umfasst den ganzen Kredit-Lebenszyklus.</p><p>Mit unserem erfahrenen Team führen wir alle Geschäftsprozesse im Kreditbereich zuverlässig und effizient aus. Durch unsere jahrelange Expertise können wir einen stabilen Produktionsbetrieb garantieren und sind mit einem breiten Spektrum an Produkten vertraut.</p><p>Dabei blicken wir auf eine lückenlose Historie erfolgreicher Migrationen zurück. Als Experten in der Bereitstellung und im Betrieb einer global einsetzbaren standardisierten Kreditplattform passen wir unsere Lösungen ständig an die neuesten Anforderungen und technischen Möglichkeiten an.</p>',
									},
									{
										icon: 'FinancialNetworks',
										headline: 'Smarte Lösungen für Capital Markets & Treasury',
										content:
											'<p>Unsere umfassenden Serviceleistungen bringen Ihre Kapitalmarktgeschäfte auf Zukunftskurs.</p><p>Wir bieten Ihnen clevere Back- und Middle-Office-Services für Derivative, Wertpapiere und Geld-/Devisentransaktionen, unterstützen Sie bei der Verifizierung von Handelsgeschäften, bei der Dokumentation und beim Abgleich sowie bei der Abrechnung. Unsere Lösungen decken das gesamte Life-Cycle-Management ab, überwachen Trigger Events, helfen bei Kontenabstimmung und -ausgleich sowie beim regulatorischen Reporting beispielsweise im Rahmen der European Market Infrastructure Regulation (EMIR) und der Meldevorschriften im Außenwirtschaftsverkehr (AWV).</p>',
									},
									{
										icon: 'GlobalAssetsAndRecovery_01',
										headline: 'Rundum-Unterstützung bei Risk & Compliance',
										content:
											'<p>Nutzen Sie unsere modernen KI- und Cloud-Lösungen für Ihr Risk & Compliance-Management.</p><p>Wir ermöglichen das Outsourcing Ihrer Prozesse in den Bereichen Know Your Customer (KYC), Risikosteuerung und Rating. Dies reicht von der Entwicklung, Validierung und Optimierung neuer und bestehender Risiko- und Ratingmodelle über die Kreditanalyse bis hin zur Risikoberechnung und zum Risikoreporting. Wir bieten Ihnen auch unsere Modelle und Systeme zur Nutzung an – wie unser Ratingtool, unser Tool zur automatisierten Bilanzauswertung sowie unser KYC-Tool. Alle lassen sich mühelos in Ihre Landschaft integrieren, unterstützen Sie bei der Automatisierung Ihrer Prozesse und machen sie dadurch besser, schneller und auch kostengünstiger.</p>',
									},
									{
										icon: 'GlobalAssetsAndRecovery_02',
										headline: 'Stammdatenpflege leicht gemacht',
										content:
											'<p>Wir bieten Ihnen schlanke Prozesse bei gleichzeitig höchster Datenqualität.</p><p>Die Einführung der europäischen Datenschutz-Grundverordnung (DSGVO) erhöhte für Banken den administrativen Aufwand bei der Verarbeitung von Kundendaten. Unsere DSGVO-kompatible Stammdateninfrastruktur macht die Pflege Ihrer Kundenstammdaten unkompliziert und regelkonform.</p>',
									},
									{
										icon: 'ManagingContractualFlow',
										headline: 'Kosteneffizienz beim regulatorischen Meldewesen',
										content:
											'<p>Mit uns bewältigen Sie die Herausforderung des Meldewesens spielend.</p><p>Wir erstellen und betreuen deutsche und europäische Meldungen für Sie und unterstützen Sie bei regulatorischen Änderungen oder neuen Vorgaben im Meldewesen. Wir bieten Ihnen auch Hilfestellung bei anderen regulatorischen Fragen wie bei der Integration neuer Produkte in das regulatorische Meldewesen, bei Auswirkungsstudien oder anderen Anfragen von Behörden.</p>',
									},
									{
										icon: 'FinanceStrategy',
										headline: 'Passgenaue Unterstützung für Finance & Controlling',
										content:
											'<p>Transformieren Sie Ihre Finance & Controlling-Prozesse mit der richtigen Technologie.</p><p>Als Finance-Experten bieten wir die Rechnungslegung nach dem Handelsgesetzbuch (HGB) sowie nach den International Financial Reporting Standards (IFRS) für eine Vielzahl von Bankprodukten und komplexen Strukturen. Basierend auf diesem Know-how können unsere Experten auch das Rechnungswesen für neue kundenspezifische Produkte gestalten. Unser Angebotsportfolio beinhaltet die Bereitstellung einer konsistenten Finance-Plattform sowie einzelner Komponenten, die auch die Anforderungen des Meldewesens abdecken.</p>',
									},
									{
										icon: 'ConnectedEcosystem',
										headline: 'Zukunftsorientierte Zahlungsverkehrprozesse',
										content:
											'<p>Mit uns erreichen Sie mehr Effizienz im Bereich Payments, Cards & Cash Management.</p><p>Für unsere Kunden führen wir alle Tätigkeiten im In- und  Auslandszahlungsverkehr aus – sowohl im Full Service als auch im Spitzenausgleich. Mit unseren Lösungen für Cash Management und virtuelle Konten können Banken ihren Firmenkunden auch zusätzliche Dienstleistungen anbieten. Die Bandbreite der Möglichkeiten reicht von nationalem und internationalem Zahlungsverkehr, über Cash-Pooling und Forecasting in verschiedenen Währungen bis hin zu Cash-Collection und Payments-Factory-Services auf Basis virtueller Konten.</p>',
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
						top: '<p>Ihre Vorteile</p><p class="eh4">Ihr Gewinn durch die<br />IBM Banking Platform</p>',
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
											size: 'sm',
											icon: 'GlobalMarketsBar',
											headline: 'Kostenreduktion',
											text:
												'Erprobte Profitabilitätsfaktoren wie die Hebung von Synergien, Offshoring, Automatisierung und KI ermöglichen gleichzeitig signifikante Kosteneinsparungen und effizienten, verlässlichen Service.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											size: 'sm',
											icon: 'CloudAssets',
											headline: 'Stabiler Betrieb',
											text:
												'Unsere langjährige Fach- und IT-Expertise gewährleistet Stabilität. Im Business-Process-Outsourcing übernehmen wir alle Aufgaben, die Sie abgeben möchten, und halten Ihre Prozesse State-of-the-Art.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											size: 'sm',
											icon: 'GlobalPartner',
											headline: 'Innovation',
											text:
												'Die Anforderungen der Digitalisierung sind für Einzelinstitute schwer zu bewältigen. Die hohe Innovationskompetenz und der Technologie-Vorsprung von IBM lässt Sie als Partner nachhaltig profitieren.',
										},
									},
									{
										name: 'PictogramTeaser',
										props: {
											size: 'sm',
											icon: 'GlobalPartner',
											headline: 'Perspektiven für Mitarbeiter',
											text:
												'Im Rahmen des Outsourcings kann IBM die Mitarbeiter der Bereiche übernehmen und ihnen vielfältige Entwicklungs&shy;möglichkeiten und nachhaltige Beschäftigungs&shy;perspektiven bieten.',
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Heimerl%2C%20',
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
												src: '/img/people/placeholder.jpg',
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
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Dr.%20Buchkremer%2C%20',
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
