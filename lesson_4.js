// var fs = require('fs');
// var str = fs.readFileSync(process.argv[2], 'utf8');
//     str = str.split('\n');
//     str = str.length - 1;

var fs = require('fs');
var str = fs.readFile(process.argv[2], 'utf8');

//function processData (callback) {
//  fetchData(function (err, data) {
//    if (err) {
//      console.log("An error has occured. Abort everything!");
//      callback(err);
//    }
//    data += 1;
//    callback(data);
//  });
//}

 console.log(str);
