//path module
const path = require('path')

console.log(path.sep)
const sep = path.sep

const filePath = path.join(sep,'content','subfolder',sep,'text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt')
console.log(absolute);