/* eslint-disable no-sync */
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const CWD = process.cwd()
const SEP = path.sep
const COMPONENT_PATH = path.resolve(CWD, 'components')
const OUTPUT_PATH = path.resolve(CWD, 'shared', 'DynamicComponents', 'index.js')

const componentNames = []
const files = glob.sync(COMPONENT_PATH + '/**/*')
// eslint-disable-next-line quotes
const imports = ["import dynamic from 'next/dynamic';\n"]

const getImportString = (filepath) => {
  const splittedPath = filepath.split('/')
  const componentName = splittedPath[splittedPath.length - 1]
  componentNames.push(componentName)

  return `const ${componentName} = dynamic(() => import('${filepath}'));`
}

for (let index = 0; index < files.length; index++) {
  const filepath = files[index]
  if (fs.lstatSync(filepath).isDirectory()) {
    try {
      const hasIndexFile = fs.lstatSync(`${filepath}${SEP}index.js`).isFile()
      const relPath = path.relative(CWD, filepath).replace('components', '@/components').replace(/\\/gi, '/')
      imports.push(getImportString(relPath))
    } catch (e) {}
  }
}

imports.push(`\nexport default {\n${componentNames.map((name) => `\t${name},`).join('\n')}\n};\n`)
const fileContent = imports.join('\n')

try {
  fs.writeFileSync(OUTPUT_PATH, fileContent, {
    encoding: 'utf-8',
  })
} catch (e) {
  console.error(chalk.red(e))
}
