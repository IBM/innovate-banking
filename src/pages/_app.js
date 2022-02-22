import '@/styles/reset.css'
import '@/styles/globals.scss'
import '@/styles/carbon-theme.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="ibm-analytics-settings"
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
      <Script strategy="afterInteractive" src="//1.www.s81c.com/common/stats/ibm-common.js" async />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
