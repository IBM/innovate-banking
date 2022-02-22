/* eslint-disable react/prop-types */

import '@/styles/reset.css'
import '@/styles/globals.scss'
import '@/styles/carbon-theme.scss'

function MyApp({ Component, pageProps, pageData }) {
  return <Component {...pageProps} pageData={pageData} />
}

export default MyApp
