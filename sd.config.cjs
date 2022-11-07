module.exports = {
  source: ['sd-input/src/from-figma-tokens.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return ['// This file is auto-generated by the sd.config.cjs file.']
    }
  },
  platforms: {

    js: {
      transformGroup: 'js',
      buildPath: 'tokens/js/',
      files: [
        {
          destination: 'variables.js',
          format: 'javascript/object',
          options: {
            fileHeader: 'autoGeneratedFileHeader'
          }
        }
      ]
    }
  }
}
