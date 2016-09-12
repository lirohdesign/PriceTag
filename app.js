var express = require('express');
var app = express();
var fs = require("fs");
var jsonfile = require('jsonfile');
var tableify = require('tableify');


app.get('/read_all', function (req, res) {
   jsonfile.readFile( "itemlist.json", 'utf8', function (err, data) {
      res.end( tableify(data) );
    });
});


app.get('/:item_name', function (req, res) {
  jsonfile.readFile( "itemlist.json", 'utf8', function (err, data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]['Item'] == req.params.item_name) {
        //res.end(JSON.stringify(data[i], null, 4));
      res.end( tableify(data[i]) ) ;
      }
    }
  })
  console.log('data sent...')
});




var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
