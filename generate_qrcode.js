var qr = require('qr-image');
var express = require('express');
var fs = require('fs');
var app = express();
var jsonfile = require('jsonfile')
var ip = require('ip')

//choose an item from itemlist.json
var x = 'furniture'


var full_pth =  jsonfile.readFile( "itemlist.json", 'utf8', function (err, data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]['Item'] === x) {

        var pth = 'http://' + ip.address() + ':8081/'
        //full_pth = (pth + encodeURIComponent(data[i]['Item']));
        full_pth = (pth + (data[i]['Item']));
        console.log(full_pth)
      }
    }
  })


app.get('/', function(req, res) {

  var code = qr.image(full_pth, { type: 'svg' })
  //var output = fs.createWriteStream("C:/Users/wylies/PriceTag/qrcodes/test.svg")
  res.type('svg');
  code.pipe(res);
  //code.pipe(output);
});

var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
