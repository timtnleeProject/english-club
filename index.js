const fs = require('fs')
const path =require('path')
const mammoth = require('mammoth')

const targetDir = path.join(__dirname, 'docx')
const resultDir = path.join(__dirname, 'result')
const convert = buffer => mammoth.convertToHtml({ buffer })
  .then(result => result.value)

const targets = fs.readdirSync(targetDir)

targets.forEach(name => {
  const isDocx = /.docx/.test(name)
  if (!isDocx) throw new Error(`${name} is not the type of .docx`)
  const buf = fs.readFileSync(path.join(targetDir, name))
  convert(buf)
    .then(result => {
      fs.writeFileSync(path.join(resultDir, `${name.replace(/.docx/, '')}.html`), result, 'utf-8')
    })
})
