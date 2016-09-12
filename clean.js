
var fs = require("fs");
var jsonfile = require('jsonfile');

jsonfile.readFile('references.json', function (err, obj){
   for (var i = 0; i < obj.length; i++) {
     delete obj[i]['id']
     delete obj[i]['lastVisitTime']
     delete obj[i]['typedCount']
   }
   var file = 'refs.json'

   jsonfile.writeFile(file, obj, {spaces: 2}, function (err) {
     if (err) throw err;
   });
})
