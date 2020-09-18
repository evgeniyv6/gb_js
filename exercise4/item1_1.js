"use strict";


// es5

function ProductEs5(name, price) {
	this.name = name;
	this.price = price;
	this.make25PercentDiscount = function(discount=25) {
		this.price = this.price - (this.price / 100 * discount);
	}

}

//es 6


class ProductEs6 {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	make25PercentDiscount(discount=25) {
		this.price = this.price - (this.price / 100 * discount);
}
}


const es5 = new ProductEs5("Product1", 100);
const es6 = new ProductEs6("Product2", 200);

console.log(es5);
console.log(es6);

es5.make25PercentDiscount(); es6.make25PercentDiscount();

console.log(es5);
console.log(es6);