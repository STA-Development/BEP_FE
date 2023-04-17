/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore - this is a script, not a module
// @ts-nocheck
import store from '@redux/store'

const shell = require('shelljs')
const fs = require('fs')

const selectedLanguage = store.getState().users.user.language
const jsonPath = `./src/assets/localization/${selectedLanguage}.json`
const translationsFile = fs.readFileSync(jsonPath)
const translations = JSON.parse(translationsFile)

const translationsFilePath = 'src/constants/translations.ts'

const toUpperCase = (line: string): string => line.toUpperCase().replace(/\./g, '_')

const generateEnumLine = (key: string): void => {
  shell.ShellString(` ${toUpperCase(key)} = "${key}",\n`).toEnd(translationsFilePath)
}

const generateTranslationsEnum = (): void => {
  shell.ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */\n\n').to(translationsFilePath)

  const keys = Object.keys(translations)

  shell.ShellString('export enum Translation {\n').toEnd(translationsFilePath)

  keys.forEach(generateEnumLine)

  shell.ShellString('}\n\n').toEnd(translationsFilePath)
  shell.ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */').toEnd(translationsFilePath)
}

generateTranslationsEnum()

shell.exec(`prettier --write ${translationsFilePath}`)
