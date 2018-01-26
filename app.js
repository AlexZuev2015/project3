var colors = require('colors');

var ShopsModule = require('./shops');

var shops = new ShopsModule();

shops.setStreet('Rabochaya');
shops.setHouseNumber(178);
shops.setName('grocery shop "the well fed dad"');

var shops2 = new ShopsModule();

shops2.setStreet('Rabochaya');
shops2.setName('bank "Unex"');
shops2.setHouseNumber(178);

var shops3 = new ShopsModule();

shops3.setStreet('Rabochaya');
shops3.setName('pharmacy of low prices');
shops3.setHouseNumber(178);

var shops4 = new ShopsModule();

shops4.setStreet('Rabochaya');
shops4.setName('privat bank');
shops4.setHouseNumber(178);

var shops5 = new ShopsModule();

shops5.setStreet('Rabochaya');
shops5.setName('bank "Pumb"');
shops5.setHouseNumber(176);

var shops6 = new ShopsModule();

shops6.setStreet('Rabochaya');
shops6.setName('pawnShop');
shops6.setHouseNumber(176);
console.log("Rabochaya str. 178".bgGreen.blue);
console.log(shops.getInfo());
console.log(shops2.getInfo());
console.log(shops3.getInfo());
console.log(shops4.getInfo());
console.log("Rabochaya str. 176".bgGreen.blue);
console.log(shops5.getInfo());
console.log(shops6.getInfo());
