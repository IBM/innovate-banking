import index from '@/data/page'
import bankingCompliance from '@/data/page/banking-compliance'
import bankingPlatform from '@/data/page/banking-platform'
import coreBanking from '@/data/page/core-banking'
import customerExperience from '@/data/page/customer-experience'
import digitalesBanking from '@/data/page/digitales-banking'
import impressum from '@/data/page/impressum'
import { Content } from './types'

const pages: Record<string, Content> = {
  index,
  'customer-experience': customerExperience,
  'digitales-banking': digitalesBanking,
  'banking-compliance': bankingCompliance,
  'core-banking': coreBanking,
  'banking-platform': bankingPlatform,
  impressum,
}

export default pages
