/// creating a js file which uses fs module in nodejs

var fs = require('fs');

var content = fs.readFileSync('nodewiki.txt','utf8'); //reading file synchronously

console.log(content);

