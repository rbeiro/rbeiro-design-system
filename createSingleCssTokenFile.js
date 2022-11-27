const fs = require('fs')
const { promisify } = require('util')

const readdir_promise = promisify(fs.readdir);
const readFile_promise = promisify(fs.readFile);

function readFilesAsync(dir) {
  return readdir_promise(dir, { encoding: 'utf8' })
    .then(filenames => {
      const files = getFiles(dir, filenames);

      return Promise.all(files);
    })
    .catch(err => console.error(err));
}

function getFiles(dir, filenames) {
    return filenames.map(filename => {
      return readFileContent(dir, filename)
  })
}

function readFileContent (dir, filename) {
  return readFile_promise(dir + filename, 'utf-8')
  .then(content => {
      if(filename === 'index.css') return
      const start = content.indexOf("{") + 1
      const end = content.indexOf("}")
      const parsedString = content.substring(start, end)
      
      return parsedString
    }  
  )
}

readFilesAsync('./packages/tokens/css/')
  .then(files => {
    files.unshift(":root {")
    files.push("}")
    const strinfyArray = files.toString()
    const noCommasString = strinfyArray.replace(/,/g, '')

    fs.writeFile('./packages/tokens/css/index.css', noCommasString, (err) => {if(err) throw err})
    console.log(noCommasString)
  })
  .catch(err => console.log(err));


