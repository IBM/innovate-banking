// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const index = require('@/data/page')
const prozessTransformation = require('@/data/page/prozess-transformation')
const kundenerlebnis = require('@/data/page/kundenerlebnis')
const riskCompliance = require('@/data/page/risk-compliance')
const anwendungssysteme = require('@/data/page/anwendungssysteme')
const bankingPlattform = require('@/data/page/banking-plattform')
const impressum = require('@/data/page/impressum')

const pageData = {
  index,
  'prozess-transformation': prozessTransformation,
  kundenerlebnis,
  'risk-compliance': riskCompliance,
  anwendungssysteme,
  'banking-plattform': bankingPlattform,
  impressum,
}

export default (req, res) => {
  const pageName = req.query.name || 'index'

  if (typeof pageData[pageName] !== 'undefined') {
    res.status(200).json(pageData[pageName](req))
  } else {
    return res.status(404).end()
  }

  return res.status(500).end()
}
