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
							name: 'Kundenerlebnis',
							active: false,
							current: false,
						},
						{
							name: 'Anwendungssysteme',
							url: 'anwendungssysteme',
							active: true,
							current: false,
						},
						{
							name: 'Bankingplatform',
							active: false,
							current: false,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {
					heading: 'Impressum',
					image: {
						src: '/img/stage-process-transformation.jpg',
						width: 1056,
						height: 386,
						alt: 'Impressum',
					},
					imageMobile: {
						src: '/img/stage-process-transformation-mobile.jpg',
						width: 672,
						height: 672,
						alt: 'Impressum',
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
							name: 'Ansprechpartner',
							link: 'ansprechpartner',
						},
						{
							name: 'Nutzungsbedingungen',
							link: 'nutzungsbedingungen',
						},
						{
							name: 'Datenschutz',
							link: 'datenschutz',
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'ansprechpartner',
					titles: {
						left: '<p>Ansprechpartner</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>IBM Deutschland GmbH<br/>IBM-Allee 1<br/>71139 Ehningen<br/>Postanschrift: 71137 Ehningen<br/><br/>Vorsitzender des Aufsichtsrats: Sebastian Krause<br/></br>Geschäftsführung: Gregor Pillen (Vorsitzender), Agnes Heftberger, Gabriele Schwarenthorer, Markus Koerner, Christian Noll, Nicole Reimer<br/>Sitz der Gesellschaft: Ehningen<br/>UID Nummer: DE145178813<br/>Steuer Nr.: 56450/00486<br/>Registergericht: Amtsgericht Stuttgart, HRB14562<br/>WEEE-Reg.-Nr.: DE99369940<br/>IBM Gesellschaften<br/><br/>Kontakt:<br/>Hallo IBM<br/>Tel. +49 800 225 5426<br/>E-mail: halloibm@de.ibm.com<br/>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter dem angegebenen Hyperlink erreichen können.<br/>http://ec.europa.eu/consumers/odr/</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'nutzungsbedingungen',
					titles: {
						left: '<p>Nutzungsbedingungen</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'datenschutz',
					titles: {
						left: '<p>Datenschutz</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>',
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
