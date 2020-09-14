"use strict";

const sea_products = [ 
	{ 
		id: 3, 
		price: 200, 
	}, 
	{ 
		id: 4, 
		price: 900, 
	}, 
	{ 
		id: 1, 
		price: 1000, 
	}, 
];


sea_products.forEach(function(calc_discount) {
	calc_discount.price = calc_discount.price - calc_discount.price * 0.15;
})

console.log(sea_products);