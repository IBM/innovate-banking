/**
 * Since react-intl isn't able to readout data from nested JSON we have to
 * flatten the json files.
 */
/* eslint-disable no-sync */
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const CWD = process.cwd()
const SEP = path.sep
const I18N_PATH = path.resolve(CWD, 'i18n')
const messageFiles = glob.sync(`${I18N_PATH}${SEP}!(*.flat).json`)
const OBJECT_KEY_GLUE = '.'
const flatten = (object, separator = OBJECT_KEY_GLUE) => {
  return Object.assign(
    {},
    ...(function _flatten(child, pathArr = []) {
      return [].concat(
        ...Object.keys(child).map((key) =>
          typeof child[key] === 'object'
            ? _flatten(child[key], pathArr.concat([key]))
            : { [pathArr.concat([key]).join(separator)]: child[key] }
        )
      )
    })(object)
  )
}

messageFiles.forEach((filePath) => {
  try {
    const extName = path.extname(filePath)
    const locale = path.basename(filePath, extName)
    const fileContent = fs.readFileSync(filePath)
    const fileContentJSON = JSON.parse(fileContent)
    const newFilename = `${locale}.flat.json`
    fs.writeFileSync(`${I18N_PATH}${SEP}${newFilename}`, JSON.stringify(flatten(fileContentJSON), null, 4))
  } catch (e) {
    console.error(chalk.red(e))
  }
})
