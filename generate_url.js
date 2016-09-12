var jsonfile = require('jsonfile')

var x = 'Carpet Installation'

  jsonfile.readFile( "itemlist.json", 'utf8', function (err, data) {
    for (var i = 0; i < data.length; i++) {
      //if (data[i]['Item'] === x) {
        //console.log(encodeURIComponent(JSON.stringify(data[i]['Item'])));

        var pth = 'http://localhost:8081/'
        console.log(pth + encodeURIComponent(data[i]['Item']));
      //}
    }
  })
