var fs = require('fs')
var file = process.argv[2]
var lines;
fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
   lines = contents.toString().split('\n').length - 1
   console.log(lines)
})

