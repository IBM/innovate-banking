module.exports = req => {
	return {
		meta: {
			title: 'IBM Smarter Banking',
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
							url: 'risikosteuering',
							active: false,
							current: false,
						},
						{
							name: 'Kundenerlebnisse',
							url: 'kundenerlebnisse',
							active: false,
							current: false,
						},
						{
							name: 'Technologien',
							url: 'technologien',
							active: false,
							current: false,
						},
						{
							name: 'Effizienz',
							url: 'effizienz',
							active: false,
							current: false,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {},
			},
		],
	};
};
