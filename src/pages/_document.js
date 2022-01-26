import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							window._ibmAnalytics = {
								settings: {
									name: "INNOVATE_BANKING",
									isSpa: false,
									tealiumProfileName: "ibm-web-app"
								}
							};
							digitalData = {
								page: {
									pageInfo: {
										ibm: {
											siteId: "IBM_" + _ibmAnalytics.settings.name,
										}
									},
									category: {
										primaryCategory: "PC100"
									}
								}
							};
							`,
						}}
					/>
					<script src="//1.www.s81c.com/common/stats/ibm-common.js" async="async"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
