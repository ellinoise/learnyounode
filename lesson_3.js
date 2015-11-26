 var fs = require('fs');
 var str = fs.readFileSync(process.argv[2], 'utf8');
     str = str.split('\n');
     str = str.length - 1;

 console.log(str)
