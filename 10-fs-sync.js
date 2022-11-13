const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `\nHello is the result ${first}, ${second}`,
    {flag:'a'}
 )

 console.log('done with this task');
 console.log('staring the next one');