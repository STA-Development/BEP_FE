/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore - this is a script, not a module
// @ts-nocheck

const shell = require('shelljs')
const fs = require('fs')

const selectedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'en'

const jsonPath = `./src/assets/localization/${selectedLanguage}.json`
const translationsFile = fs.readFileSync(jsonPath)
const translations = JSON.parse(translationsFile)

const ordered = Object.keys(translations)
  .sort()
  .reduce((obj, key) => {
    obj[key] = translations[key]

    return obj
  }, {})

shell.ShellString(JSON.stringify(ordered)).to(jsonPath)
shell.exec(`prettier --write ${jsonPath}`)
