const truncate = require("lodash.truncate");

/* eslint-disable max-len */
module.exports = req => {
	return {
		meta: {
			title: 'IBM Smarter Banking',
			slogan: 'Innovate Banking',
			isHome: true,
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
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
						},
						{
							name: 'Prozess-Transformation',
							url: 'prozess-transformation',
							active: true,
							current: false,
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
					heading: 'Innovate Banking',
					subheading: 'Eine Initiative von IBM',
					image: {
						src: '/img/stage-home.jpg',
						width: 1056,
						height: 386,
						alt: 'IBM Smarter Banking',
					},
				},
			},
			{
				name: 'AnchorNavigation',
				props: {
					items: [
						{
							name: 'Mission',
							link: 'mission',
						},
						{
							name: 'Mehrwert',
							link: 'mehrwert',
						},
						{
							name: 'Fokus',
							link: 'fokus',
						},
						{
							name: 'News',
							link: 'news',
						},
						{
							name: 'Methoden',
							link: 'methoden',
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'mission',
					titles: {
						left: '<p>Stark durch digitale<br/> Transformation</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>IBM ist für zahlreiche Banken im deutschsprachigen Markt aktiv - viele von uns sind selbst Banker. Ihre fachlichen Anforderungen bringen wir in Einklang mit Technologien wie Cloud und Künstlicher Intelligenz. Wir begleiten Sie ganzheitlich durch die digitale Transformation hin zu einem ganz neuen Banking-Erlebnis.</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'mehrwert',
					titles: {
						left: '<p>Herausforderungen begegnen, Mehrwerte schaffen.</p>',
					},
					noSpace: {
						bottom: true,
					},
					images: {
						bottom: {
							src: '/img/section-bg-plattform-solutions.png',
							alt: 'Plattform Lösungen',
							height: 367,
							width: 772,
							layout: 'intrinsic',
						},
					},
					background: {
						color: '#F4F4F4',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p class="d1">Unsere Plattform-Lösungen</p><p>Wir sind ihr Partner für die digitale Transformation des Finanzsektors. Denn wir bringen die interne Branchenkenntnis zusammen mit technischen Innovationen und verschiedensten Entwicklungen, die im weltweiten Netzwerk der IBM entstehen.</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					titles: {
						top: '<p>Unsere Plattform-Lösungen:<br/>Bewährt. Dynamisch. Sicher.</p>',
					},
					images: {
						bottom: {
							src: '/img/section-bg-plattform-solutions-blue.svg',
							alt: 'Plattform Lösungen',
							height: 1556,
							width: 3200,
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
							name: 'TeaserList',
							props: {
								children: [
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'Touch_132',
											headline: 'Für Ihre Kund*innen',
											text:
												'Mehrwerte zählen – erschaffen Sie eine nachhaltig zeitgemäße Banking-Erfahrung.',
										},
									},
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'Analytics32',
											headline: 'Für mehr Effizienz',
											text: 'Kosten reduzieren – strukturell, konsequent, immer transparent.',
										},
									},
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'Finance32',
											headline: 'Für die Zukunft',
											text:
												'Infrastruktur der nächsten Generation – Compliance und Datensicherheit inklusive.',
										},
									},
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'HelpDesk32',
											headline: 'Für den lokalen Markt',
											text:
												'Internationale Expertise – IBM ist global aktiv, aber im deutsch-sprachigen Raum zu Hause.',
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
					condensed: {
						bottom: true,
					},
					images: {
						left: {
							src: '/img/section-banking-pulse-left.svg',
							width: 192,
							height: 192,
							alt: 'Banking am Puls der Zeit',
							layout: 'intrinsic',
						},
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p class="d1">Banking am Puls der Zeit</p><p>Als Finanzdienstleister befinden Sie sich stetig im Spannungsfeld zwischen Beständigkeit und Fortschritt. Ihre Kunden erwarten eine verlässliche, sichere und gleichzeitig innovative Banking-Erfahrung.</p><p>Um an den entscheidenden Punkten ansetzen zu können, bieten wir Ihnen Lösungen in fünf Kernbereichen. Gemeinsam finden wir die passende Herangehensweise für die Bedürfnisse Ihres Unternehmens. Ganz gleich, ob sie weltweit agieren oder eine Plattform für ein FinTech Start-up aufsetzen möchten.</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'fokus',
					titles: {
						left: '<p>Unser Fokus</p>',
					},
					children: [
						{
							name: 'TeaserList',
							props: {
								rowWrap: true,
								children: [
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Prozesse transformieren',
											text:
												'<p>Vom Kreditantrag bis zur Auszahlung, von der Bestandsverwaltung oder der Zahlungsabwicklung bis zu Finance und Controlling: KI- und datengetriebene Lösungen von IBM optimieren Ihre Prozesse und machen Ihre Bank fit für die Zukunft.</p>',
											image: {
												src: '/img/section-focus-teaser-process-transformation.svg',
												width: 312,
												height: 297,
											},
											link: {
												title: 'Mehr erfahren',
												url: '/prozesse-transformieren',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Kundenerlebnisse neu gestalten',
											text:
												'<p>Zufriedene Kunden sind Ihr wertvollstes Kapital. Erfahren Sie, wie Cloud-basierte Datenauswertung und KI außergewöhnliche Kundenerlebnisse ermöglichen und die Arbeitswelt Ihrer Mitarbeiter*innen revolutioniert.</p>',
											link: {
												title: 'Coming soon',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Risiken nachhaltig steuern',
											text:
												'<p>IBM unterstützt Ihre Bank mit kognitiven Lösungen beim Risikomanagement und bei der Risikomodellierung, Geldwäscheprävention, KYC Prozessen, innovativer RegTech und SubTech.</p>',
											link: {
												title: 'Coming soon',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Technologien transformieren',
											text:
												'<p>Mit Innovationen aus der IBM Cloud durch die digitale Transformation: Wir begleiten die Erneuerung Ihrer Infrastruktur mit maßgeschneiderten Lösungen – von der Entwicklung bis zur Installation.</p>',
											link: {
												title: 'Coming soon',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Effizienz steigern',
											text:
												'<p>Gewinnen Sie mit Anwendungen aus unserer Banking Service Plattform an Effizienz und erfahren Sie, wie Business Process Outsourcing von IBM Mehrwerte für Ihre Bank schafft. </p>',
											link: {
												title: 'Coming soon',
											},
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
					id: 'news',
					condensed: {
						bottom: true,
					},
					titles: {
						left: true,
					},
					background: {
						color: '#F4F4F4',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p class="d1">Unsere Plattform-Lösungen</p><p>Erfahren Sie von unseren Experten, wie IBM an der Zukunft des Bankings arbeitet – und tauschen Sie sich direkt mit Ihnen aus.</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					titles: {
						left: '<p>Banking Insights</p>',
					},
					condensed: {
						top: true,
						bottom: true,
					},
					background: {
						color: '#F4F4F4',
					},
					children: [
						{
							name: 'TeaserList',
							props: {
								showPagination: true,
								rowWrap: true,
								children: [
									{
										name: 'ImageTextTeaser',
										props: {
											text: '<p>Gesamtbanksteuerung: Veränderung ist machbar</p>',
											image: {
												src: '/img/banking-insights/teaser-1.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>End-to-End Digitalisierung der Kreditprozesse schafft Mehrwert für Unternehmenskunden</p>',
											image: {
												src: '/img/banking-insights/teaser-2.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>Nachhaltigkeit – Wege in die Zukunft für Banken und Aufsichtsbehörden</p>',
											image: {
												src: '/img/banking-insights/teaser-3.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text: '<p>Gesamtbanksteuerung: Veränderung ist machbar</p>',
											image: {
												src: '/img/banking-insights/teaser-4.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>End-to-End Digitalisierung der Kreditprozesse schafft Mehrwert für Unternehmenskunden</p>',
											image: {
												src: '/img/banking-insights/teaser-5.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>Nachhaltigkeit – Wege in die Zukunft für Banken und Aufsichtsbehörden</p>',
											image: {
												src: '/img/banking-insights/teaser-6.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
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
					titles: {
						left: '<p>Banking Talks & Events</p>',
					},
					background: {
						color: '#F4F4F4',
					},
					condensed: {
						top: true,
					},
					children: [
						{
							name: 'TeaserList',
							props: {
								showPagination: true,
								rowWrap: true,
								children: [
									{
										name: 'ImageTextTeaser',
										props: {
											text: '<p>Bank und Zukunft – Der Podcast für die Finanzbranche</p>',
											image: {
												src: '/img/banking-talks/teaser-1.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>IBM iX Digital Talks: Webcasts zur Digitalisierung in Unternehmen</p>',
											image: {
												src: '/img/banking-talks/teaser-2.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text: '<p>IBM Event: Reinventing Financial Services 2020</p>',
											image: {
												src: '/img/banking-talks/teaser-3.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text: '<p>Bank und Zukunft – Der Podcast für die Finanzbranche</p>',
											image: {
												src: '/img/banking-talks/teaser-1.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>IBM iX Digital Talks: Webcasts zur Digitalisierung in Unternehmen</p>',
											image: {
												src: '/img/banking-talks/teaser-2.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text: '<p>IBM Event: Reinventing Financial Services 2020</p>',
											image: {
												src: '/img/banking-talks/teaser-3.jpg',
												width: 576,
												height: 324,
											},
											link: '/',
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
					id: 'methoden',
					background: {
						color: '#161616',
						dark: true,
					},
					noSpace: {
						top: true,
					},
					images: {
						top: {
							src: '/img/section-ibm-garage.jpg',
							width: 608,
							height: 393,
							layout: 'intrinsic',
						},
					},
					titles: {
						left:
							'<p class="h4">Innovative Methoden und Technologien</p><p class="p">Wir arbeiten schon heute an der Finanztechnologie von übermorgen. Entdecken Sie ungeahnte Möglichkeiten und profitieren Sie als erste von Lösungen, die die Welt des Bankings nachhaltig verändern werden.</p>',
						offsetLeft: '-50%',
					},
					children: [
						{
							name: 'TeaserList',
							props: {
								rowWrap: true,
								children: [
									{
										name: 'FocusTeaser',
										props: {
											headline: 'IBM Garage',
											text:
												'<p>Mit IBM Garage bringen wir Sie technologisch auf den neuesten Stand, damit Sie schnell, bahnbrechend und ähnlich agil wie ein Start-up-Unternehmen arbeiten können. IBM Garage vereint Unternehmensstrategie, Design und Technologie nahtlos in einer End-to-End-Journey.</p>',
											link: {
												url: 'https://www.ibm.com/de-de/garage',
											},
											dark: true,
											condensed: true,
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'IBM Blockchain',
											text:
												'<p>Mit IBM Blockchain können Sie Transaktionen transparent, einfach und effizient halten. Wir ersetzen damit veraltete Prozesse und manuelle Arbeit durch neuartige Kooperation, Innovation und gesteigertes Tempo. IBM Blockchain schafft neue Lösungen und erzielt greifbare Ergebnisse.</p>',
											link: {
												url: 'https://www.ibm.com/blockchain/industries/financial-services',
											},
											dark: true,
											condensed: true,
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'IBM Cloud-Computing',
											text:
												'<p>IBM Cloud-Computing konzipiert und implementiert sichere und innovative Cloud-Lösungen für Sie. Unsere Lösungen garantieren höchste Sicherheitsstandards und helfen Ihnen, gesetzliche Bestimmungen durch die IBM Cloud-Plattform und das gesamte Ökosystem einzuhalten.</p>',
											link: {
												url:
													'https://www.ibm.com/de-de/industries/banking-financial-markets/cloud-banking',
											},
											dark: true,
											condensed: true,
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'IBM Edge',
											text:
												'<p>Mit IBM Edge können Sie große Datenvolumen direkt an der Quelle bearbeiten, indem Unternehmensanwendungen näher an Datenquellen wie IoT Geräte oder lokale Edge-Server rücken. Das führt zu schnelleren Erkenntnissen, kürzeren Reaktionszeiten und besserer Bandbreitenverfügbarkeit.</p>',
											link: {
												url: 'https://www.ibm.com/de-de/cloud/what-is-edge-computing',
											},
											dark: true,
											condensed: true,
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
					noSpace: {
						top: true,
					},
					titles: {
						left:
							'<p class="h4">Let\'s talk</p><p class="p">Fragen oder Interesse an weiteren Informationen? Sprechen Sie uns an!</p>',
					},
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
											copy: 'Industry Leader Banking & Financial Markets DACH',
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
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking?body=Sehr%20geehrter%20Herr%20Zitterbart%2C%20',
												},
											],
										},
									},
									{
										name: 'LetsTalkTeaser',
										props: {
											headline: 'Bernd Neubauer',
											copy: 'Senior Partner Banking & Financial Markets DACH',
											image: {
												src: '/img/people/bernd.jpg',
												width: 288,
												height: 288,
											},
											links: [
												{
													type: 'linkedIn',
													title: 'Vernetzen auf Linkedin',
													url: 'https://www.linkedin.com/in/bernd-neubauer-6a9318186/',
												},
												{
													type: 'email',
													title: 'Kontakt aufnehmen',
													url:
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking?body=Sehr%20geehrter%20Herr%20Neubauer%2C%20',
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
