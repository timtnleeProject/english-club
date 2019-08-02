const fs = require('fs')
const path = require('path')
const journalPath = path.join(__dirname, '../public/journal')
const journalFullPath = path.join(__dirname, '../public/journal.json')
const classPath = path.join(__dirname, '../public/class')
const classFullPath = path.join(__dirname, '../public/class.json')
const targetRegex = /.html$/

const read = (dir, dname, pointer, id = 0) => {
  const dirs = fs.readdirSync(dir)
  dirs.forEach(fullname => {
    const name = fullname.replace(targetRegex, '')
    const fullPath = `${dname}/${name}`
    const subpath = path.join(dir, fullname)
    const isFile = fs.lstatSync(subpath).isFile()
    const isDir = !isFile
    const notMdFile = !targetRegex.test(fullname)
    const node = {
      id: ++id,
      name,
      fullname,
      path: fullPath,
      isFile,
      children: []
    }
    if (isFile && notMdFile) return // 圖片或其他檔案
    else if (isDir) read(subpath, fullPath, node.children, id)
    pointer.push(node)
  })
}

const getTreeJson = (sourcePath, resultPath) => {
  const tree = []
  read(sourcePath, '', tree)
  fs.writeFileSync(resultPath, JSON.stringify(tree), 'utf-8')
}

getTreeJson(journalPath, journalFullPath)
getTreeJson(classPath, classFullPath)

console.log('Generate menu hierarchy')
