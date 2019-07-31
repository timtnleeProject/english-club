const fs = require('fs')
const path = require('path')
const journalPath = path.join(__dirname, '../public/journal')
const menuFullPath = path.join(__dirname, '../public/menu.json')

let id = 0
const tree = []
const read = (dir, dname, pointer) => {
  const dirs = fs.readdirSync(dir)
  dirs.forEach(fullname => {
    const name = fullname.replace(/.md$/, '')
    const fullPath = `${dname}/${name}`
    const subpath = path.join(dir, fullname)
    const isFile = fs.lstatSync(subpath).isFile()
    const isDir = !isFile
    const notMdFile = !/.md$/.test(fullname)
    const node = {
      id: ++id,
      name,
      fullname,
      path: fullPath,
      isFile,
      children: []
    }
    if (isFile && notMdFile) return // 圖片或其他檔案
    else if (isDir) read(subpath, fullPath, node.children)
    pointer.push(node)
  })
}
read(journalPath, '', tree)

fs.writeFileSync(menuFullPath, JSON.stringify(tree), 'utf-8')

console.log('Generate menu hierarchy')
