# PriceTag
Bones of an inventory app.


Here are the basics of what this app does:

1. convert.js : takes a raw .csv file from quickbooks inventory list and converts it to itemlist.json
2. app.js reads from itemlist.json and sends an object back when an item name is requested.
    this looks like http://localhost/8081/item_name
3. generate_qrcode.js reads item names from itemlist.json and creates a QR code.
    the code contains text that looks like http://localhost/8081/item_name
