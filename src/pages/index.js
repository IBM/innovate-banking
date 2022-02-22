import pages from '@/data/pages'
import MainLayout from '@/layouts/main'
import { renderComponent } from '@/utils'
import Head from 'next/head'
import PropTypes from 'prop-types'

const DefaultPage = ({ meta, components }) => {
  let pageTitle = null
  if (meta && meta.title) pageTitle = meta.title
  if (meta && meta.slogan) pageTitle = pageTitle += ' - ' + meta.slogan

  return (
    <>
      <Head>
        {pageTitle && <title>{pageTitle}</title>}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta property="og:title" content="Innovate Banking" />
        <meta property="og:image" content="https://innovate-banking.com/og-image.png" />
        <meta property="og:url" content="https://innovate-banking.com" />
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MainLayout>
        {components &&
          components.map((componentData, index) =>
            renderComponent(componentData.name, componentData.props, index, meta)
          )}
      </MainLayout>
    </>
  )
}

DefaultPage.propTypes = {
  meta: PropTypes.object,
  components: PropTypes.array,
}

export const getStaticProps = async () => {
  if (!pages.index) {
    return {
      notFound: true,
    }
  }

  return {
    props: pages.index,
  }
}

export default DefaultPage
