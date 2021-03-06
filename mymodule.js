// var fs = require('fs')
// var path = require('path');


// module.exports = function(directry, extension , callback) {
//      fs.readdir(directry, function (err, list) {
//         if (err) return callback(err);
//         else {
//             list = list.filter(function (file) {
//                 if(path.extname(file) === '.' + extension) return true;
//             })
//             return callback(null, list);
//         }
//     })
// };


var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        });

        callback(null, list)
    })
}
