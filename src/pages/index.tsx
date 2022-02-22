import pages from '@/data/pages'
import { GetStaticProps } from 'next'
import { default as Page, NamedPageProps } from './[...name]'

export const getStaticProps: GetStaticProps<NamedPageProps> = async () => {
  if (!pages.index) {
    return {
      notFound: true,
    }
  }

  return {
    props: pages.index,
  }
}

export default Page
