import index from '@/data/page'
import anwendungssysteme from '@/data/page/anwendungssysteme'
import bankingPlatform from '@/data/page/banking-platform'
import impressum from '@/data/page/impressum'
import kundenerlebnis from '@/data/page/kundenerlebnis'
import prozessTransformation from '@/data/page/prozess-transformation'
import riskCompliance from '@/data/page/risk-compliance'
import { Content } from './types'

const pages: Record<string, Content> = {
  index,
  'prozess-transformation': prozessTransformation,
  kundenerlebnis,
  'risk-compliance': riskCompliance,
  anwendungssysteme,
  'banking-platform': bankingPlatform,
  impressum,
}

export default pages
