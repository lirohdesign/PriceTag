var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var fs = require("fs")
var jsonfile = require('jsonfile')

//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (jsonArray) {

   for (var i = 0; i < jsonArray.length; i++) {
     delete jsonArray[i]['field1']
   }
   var file = 'itemlist.json'

   jsonfile.writeFile(file, jsonArray, {spaces: 2}, function (err) {
     if (err) throw err;
   })
});

//read from file
fs.createReadStream("./items.csv").pipe(converter);
