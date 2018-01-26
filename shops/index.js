var Shops = function () {
	

var street, houseNumber, name;

	this.setStreet = function (str) {
		street = str;
	};

	this.setHouseNumber = function (h) {
		houseNumber = h;
	};

	this.setName = function (n) {
		name = n;
	};

	this.getInfo = function () {
		return {
			street: street, houseNumber: houseNumber, name: name
		};
	};
};


module.exports = function () {
	var instance = new Shops();
	return instance;
};