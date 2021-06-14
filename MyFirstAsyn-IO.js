let fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
    if (err) {
       return console.error(err);
    }

    let num=data.toString().split('\n').length-1;
    console.log(num);
 });
