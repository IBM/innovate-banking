import pages from '@/data/pages'
import MainLayout from '@/layouts/main'
import { renderComponent } from '@/utils'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

export type NamedPageProps = {
  readonly meta?: {
    readonly title?: string
    readonly slogan?: string
    readonly isHome?: boolean
  }
  // TODO: use components types
  readonly components: ReadonlyArray<{ name: string; props: Record<string, unknown> }>
}

const NamedPage = ({ meta, components }: InferGetStaticPropsType<typeof getStaticProps>) => {
  let pageTitle = null
  if (meta?.title) pageTitle = meta.title
  if (meta?.slogan) pageTitle = pageTitle += ' - ' + meta.slogan

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
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MainLayout>
        {components && components.map(({ name, props }, index) => renderComponent(name, props, index, meta))}
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<NamedPageProps> = async ({ params }) => {
  if (!pages[params?.name as string]) {
    return {
      notFound: true,
    }
  }

  return {
    props: pages[params?.name as string],
  }
}

export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default NamedPage
