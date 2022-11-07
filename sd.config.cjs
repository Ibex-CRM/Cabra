module.exports = {
  source: ['sd-input/src/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return ['// This file is auto-generated by the sd.config.cjs file.']
    }
  },
  platforms: {
    // css: {
    //   transformGroup: 'css',
    //   buildPath: 'tokens/css/',
    //   prefix: 'figma',
    //   files: [
    //     {
    //       destination: 'variables.css',
    //       format: 'css/variables',
    //       options: {
    //         fileHeader: 'autoGeneratedFileHeader'
    //       }
    //     }
    //   ]
    // },
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/js/',
      files: [
        {
          destination: 'variables.js',
          format: 'javascript/es6',
          options: {
            fileHeader: 'autoGeneratedFileHeader'
          }
        }
      ]
    }
  }
}
