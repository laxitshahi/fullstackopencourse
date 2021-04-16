var fs = require('fs')
//  OR (modern)
// import fs from 'fs' // gives 'cannot import statement outside of module' error

var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.replace('\t','')
// .map(line => line.split('\t'))

/*
1. trim removes line breaks at start and end of a string
2. split, splits data into an array
3. map to create an array of arrays 
 */

console.log('output',output);