/* eslint-disable max-len */
module.exports = req => {
	return {
		meta: {
			title: 'Innovate Banking',
			slogan: 'Eine Initiative von IBM',
			isHome: true,
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
							current: false,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {
					heading: 'Innovate<br />Banking',
					subheading: 'Eine Initiative von IBM',
					image: {
						src: '/img/stage-home.svg',
						width: 1056,
						height: 386,
						alt: 'IBM Smarter Banking',
					},
					imageMobile: {
						src: '/img/stage-home-mobile.png',
						width: 672,
						height: 672,
						alt: 'IBM Smarter Banking',
					},
					isHome: true,
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
					id: 'mission',
					titles: {
						left: '<p>Stark durch digitale<br/> Transformation</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p style="max-width: 544px;">IBM ist für zahlreiche Banken im deutschsprachigen Markt aktiv – viele von uns sind selbst Banker. Ihre fachlichen Anforderungen bringen wir in Einklang mit Technologien wie Cloud und Künstlicher Intelligenz. Wir begleiten Sie ganzheitlich durch die digitale Transformation hin zu einem ganz neuen Banking-Erlebnis.</p>',
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
						left: '<p>Unsere Lösungen<br/>für Ihre Herausforderungen</p>',
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
							layout: 'responsive',
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
									'<p class="h2" style="max-width: 544px; font-weight: 400;">Mit uns die digitale Transformation meistern</p><p style="max-width: 544px;">Wir sind Ihr Partner für nachhaltige digitale Transformation. Denn wir vereinen Banking-Know-how mit technischen Innovationen und bieten Ihnen individualisierte Lösungen aus unserem weltweiten Netzwerk.</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					titles: {
						top: '<p class="h4">Unsere Expertise für eine<br />erfolgreiche Transformation</p>',
					},
					images: {
						bottom: {
							src: '/img/section-bg-plattform-solutions-blue.svg',
							alt: 'Plattform Lösungen',
							height: 1556,
							width: 3200,
							layout: 'responsive',
							style: {
								maxWidth: '75%',
							},
						},
						bottomMobile: {
							src: '/img/section-bg-plattform-solutions-blue-mobile.svg',
							alt: 'Plattform Lösungen',
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
							name: 'TeaserList',
							props: {
								children: [
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'Touch_132',
											headline: 'Für Ihre<br />Kund*innen',
											text:
												'Mehrwerte zählen – erschaffen Sie eine nachhaltige und zeitgemäße Banking-Erfahrung.',
										},
									},
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'Analytics32',
											headline: 'Für mehr<br />Effizienz',
											text: 'Kosten reduzieren – strukturell, konsequent, immer transparent.',
										},
									},
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'Finance32',
											headline: 'Für die<br />Zukunft',
											text:
												'IT-Systeme für die nächste Generation – Compliance und Datensicherheit inklusive.',
										},
									},
									{
										name: 'SolutionTeaser',
										props: {
											icon: 'HelpDesk32',
											headline: 'Für den<br />lokalen Markt',
											text:
												'Internationale Expertise – IBM&nbsp;ist global aktiv, aber im deutsch&shy;sprachigen Raum zu&nbsp;Hause und vor&nbsp;Ort.',
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
									'<p class="d1" style="max-width: 544px;">Banking am<br />Puls der Zeit</p><p style="max-width: 544px;">Als Finanzdienstleister befinden Sie sich stetig im Spannungsfeld zwischen Beständigkeit und Fortschritt. Ihre Kunden erwarten eine verlässliche, sichere und gleichzeitig innovative Banking-Erfahrung.</p><p style="max-width: 544px;">Um an den entscheidenden Punkten ansetzen zu können, bieten wir Ihnen Lösungen in fünf Kernbereichen. Gemeinsam finden wir die passende Herangehensweise für die Bedürfnisse Ihres Unternehmens – ganz gleich, ob Sie lokal, regional oder weltweit agieren.</p>',
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
					fullWidth: true,
					children: [
						{
							name: 'TeaserList',
							props: {
								rowWrap: true,
								children: [
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Kundenerlebnis<br />neu erfinden',
											text:
												'<p>Zufriedene Kunden sind Ihr wertvollstes Kapital. Erfahren Sie, wie Cloud-basierte Datenauswertung und KI ein einzigartiges Kundenerlebnis ermöglichen und die Arbeitswelt Ihrer Mitarbeiter*innen im Front-Office revolutionieren.</p>',
											image: {
												src: '/img/section-kundenerlebnis.svg',
												width: 402,
												height: 242,
											},
											link: {
												url: '/kundenerlebnis',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Prozesse<br />transformieren',
											text:
												'<p>Vom Kreditantrag bis zur Auszahlung, von der Bestandsverwaltung oder der Zahlungsabwicklung bis zu Finance und Controlling: KI- und datengetriebene Lösungen von IBM optimieren Ihre Prozesse und machen Ihre Bank fit für die Zukunft.</p>',
											link: {
												url: '/prozess-transformation',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Risk & Compliance<br />nachhaltig steuern',
											text:
												'<p>IBM unterstützt Ihre Bank mit kognitiven Lösungen beim Risikomanagement und bei der Risikomodellierung, bei Geldwäscheprävention, KYC-Prozessen, innovativer RegTech und SupTech.</p>',
											link: {
												url: '/risk-compliance',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'Anwendungssysteme<br />modernisieren',
											text:
												'<p>Mit Cloud-Innovationen durch die digitale Transformation: Wir begleiten die Modernisierung Ihrer Anwendungen und Infrastruktur mit maßgeschneiderten Lösungen – vom Design über die Entwicklung bis hin zum Betrieb.</p>',
											link: {
												url: '/anwendungssysteme',
											},
										},
									},
									{
										name: 'FocusTeaser',
										props: {
											headline: 'IBM Banking Platform<br />nutzen',
											text:
												'<p>Gewinnen Sie mit Anwendungen aus unserer Banking-Service-Plattform an Effizienz und erfahren Sie, wie Business Process Outsourcing von IBM Mehrwerte für Ihre Bank schafft.</p>',
											link: {
												url: '/banking-plattform',
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
									'<p class="h4">Unsere Stimme<br />in der Finanzbranche</p><p style="max-width: 544px;">Erfahren Sie von unseren Experten, wie IBM an der Zukunft des Bankings arbeitet – und tauschen Sie sich direkt mit Ihnen aus.</p>',
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
					fullWidth: true,
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
											text: '<p>Gesamtbanksteuerung:<br />Veränderung ist machbar</p>',
											image: {
												src: '/img/banking-insights/teaser-1.jpg',
												width: 576,
												height: 324,
											},
											link:
												'https://www.ibm.com/blogs/digitale-perspektive/2021/03/gesamtbanksteuerung-veraenderung-ist-machbar/',
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
											link:
												'https://www.ibm.com/blogs/digitale-perspektive/2021/01/end-to-end-digitalisierung-der-kreditprozesse-schafft-mehrwert-fur-unternehmenskunden/',
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
											link:
												'https://www.ibm.com/blogs/digitale-perspektive/2020/11/nachhaltigkeit-wege-in-die-zukunft-fur-banken-und-aufsichtsbehorden-2/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>Analytics – Intelligent Workflows in Banking:<br />Geldwäsche und Betrugsbekämpfung</p>',
											image: {
												src: '/img/banking-insights/teaser-4.jpg',
												width: 576,
												height: 324,
											},
											link:
												'https://www.ibm.com/blogs/digitale-perspektive/2020/10/intelligent-workflows-in-banking-geldwasche-und-betrugsbekampfung/',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>Reinventing Financial Services:<br />Core Banking and Payments Edition</p>',
											image: {
												src: '/img/banking-insights/teaser-5.jpg',
												width: 576,
												height: 324,
											},
											link:
												'https://www.ibm.com/industries/banking-financial-markets/events/reinventing-financial-services',
										},
									},
									{
										name: 'ImageTextTeaser',
										props: {
											text:
												'<p>IBM Institute for Business Value:<br />Banking Industry Insights</p>',
											image: {
												src: '/img/banking-insights/teaser-6.jpg',
												width: 576,
												height: 324,
											},
											link:
												'https://www.ibm.com/thought-leadership/institute-business-value/industry/banking',
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
					fullWidth: true,
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
											link: 'https://bank-und-zukunft.podigee.io/',
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
											link: 'https://www.ibm.com/services/de-de/ibmix/digital-talks/',
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
											link:
												'https://www.ibm.com/industries/banking-financial-markets/events/reinventing-financial-services',
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
						bottom: true,
					},
					images: {
						top: {
							src: '/img/section-ibm-garage.jpg',
							width: 608,
							height: 393,
							layout: 'intrinsic',
						},
					},
					fullWidth: true,
					titles: {
						left:
							'<p class="h4">Innovative Methoden und Technologien</p><p class="p">Wir arbeiten schon heute an der Finanztechnologie von übermorgen. Entdecken Sie ungeahnte Möglichkeiten und profitieren Sie als Erste von Lösungen, die die Welt des Bankings nachhaltig verändern werden.</p>',
					},
					children: [
						{
							name: 'VideoButton',
							props: {
								title: 'Was ist die IBM Garage?',
								subtitle: 'Video abspielen (englisch)',
							},
						},
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
											headline: 'Blockchain',
											text:
												'<p>Mit Blockchain können Sie Transaktionen transparent, einfach und effizient halten. Wir ersetzen damit veraltete Prozesse und manuelle Arbeit durch neuartige Kooperation, Innovation und gesteigertes Tempo. Mit Blockchain schaffen wir neue Lösungen und erzielen greifbare Ergebnisse.</p>',
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
											headline: 'Cloud-Computing',
											text:
												'<p>Entlang der gesamten Customer Journey ermöglichen wir Banken, sich in hybriden Cloud-Umgebungen neu zu erfinden. Mit kompetenter Beratung, Unterstützung bei der Implementierung und Managed Services unterstützen wir Sie dabei, Ihren Weg in die Cloud zu vereinfachen und zu beschleunigen.</p>',
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
											headline: 'Edge',
											text:
												'<p>Mit Edge-Computing können Sie große Datenvolumen direkt an der Quelle bearbeiten, da Bankanwednungen näher an Datenquellen wie IoT-Geräte oder lokale Edge-Server rücken. Wir helfen Ihnen bei der Optimierung Ihrer Betriebsabläufe und der Erneuerung von Kundenservices auf Basis dieser technischen Innovation.</p>',
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
											headline: 'Bernd Neubauer',
											copy: 'Senior Partner<br />Banking & Financial Markets',
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
														'mailto:bfm.innovation.lab@de.ibm.com?subject=Innovate%20Banking&body=Sehr%20geehrter%20Herr%20Neubauer%2C%20',
												},
											],
										},
									},
									{
										name: 'LetsTalkTeaser',
										props: {
											headline: 'Jean-Henrik Zitterbart',
											copy: 'Partner<br />Banking & Financial Markets',
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
