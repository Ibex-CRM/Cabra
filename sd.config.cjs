import StyleDictionary from 'style-dictionary'
import sdToFigma from '@divriots/styled-dictionary-to-figma'

const baseTokens = ['colors', 'spacing', 'borders', 'typography']

const tokenFilter = (cat) => (token) => token.attributes.category === cat

const generateFilesArr = (tokensCategories) => {
  return tokensCategories.map((cat) => ({
    filter: tokenFilter(cat),
    destination: `tokens-output/${cat}/src/_${cat}.js`,
    format: 'cssLiterals',
  }))
}

module.exports = {
  source: ['**/*.tokens.json'],
  format: {
    cssLiterals: (opts) => {
      const { dictionary, file } = opts
      let output = StyleDictionary.formatHelpers.fileHeader(file)
      output += `import { css } from '@lion/core';\n\n`

      dictionary.allTokens.forEach((token) => {
        const { path, value } = token
        const [, ..._path] = path
        const name = _path.reduce((acc, str, index) => {
          //converts to camelCase
          const _str =
            index === 0 ? str : str.charAt(0).toUpperCase() + str.slice(1)
          return acc.concat(_str)
        }, '')
        output += `export const ${name} = css\`${value}\`;\n`
      })

      return output
    },
    figmaTokensPluginJson: (opts) => {
      const { dictionary } = opts
      const pasedTokens = sdToFigma(dictionary.tokens)
      return JSON.stringify(pasedTokens, null, 2)
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'rev',
      buildPath: '/tokens-output/',
      files: [
        {
          filter: (tokens) => baseTokens.includes(tokens.attributes.category),
          destination: 'tokens.json',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: '/',
      files: generateFilesArr([...baseTokens, 'button']),
    },
    json: {
      transformGroup: 'js',
      buildPath: '/tokens-output/',
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'figmaTokensPluginJson',
        },
      ],
    },
  },
}
