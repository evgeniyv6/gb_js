"use strict";

const products = [ 
	{ 
		id: 3, 
		price: 127, 
		photos: [ 
			"1.jpg", 
			"2.jpg", 
		] 
	}, 
	{ 
		id: 5, 
		price: 499, 
		photos: [] 
	},
	{ 
		id: 10, 
		price: 26, 
		photos: [ 
			"3.jpg" 
		]
	}, 
	{ 
		id: 8, 
		price: 78,
	}, 
];

function chk_images(products) {
	let result = products.filter(function(imgs) {
		return (Array.isArray(imgs.photos) && imgs.photos.length > 0);
	});
	return result;
}


// sort functions: buble_sort_ and quick_sort_

function buble_sort_prices(products) {
	let n = products.length;
	let count = 0;
	while (count < n) {
		for (let i=0; i < n-1-count;i++) {
			if (products[i].price > products[i+1].price) {
				let tmp = products[i];
				products[i] = products[i+1];
				products[i+1] = tmp;
			}

		}
		count++;
	}
	return products;
}

function quick_sort_prices(products,begin,end) {
	if (begin > end) {
		return;
	} 
	let i = begin, j = end, pivot = products[Math.floor((begin + end) / 2)].price;
	while (i <= j) {
		while (products[i].price < pivot) {
			i++;
		}
		while (products[j].price > pivot) {
			j--;
		}
		if (i <= j) {
			let tmp = products[i];
			products[i] = products[j];
			products[j] = tmp;
			i++;j--;
		}
	}
	quick_sort_prices(products,begin,j);
	quick_sort_prices(products,i,end);
}



// output

console.log(chk_images(products)); //  products that have photo
console.log('');
quick_sort_prices(products,0, products.length-1);
console.log(products);

// console.log(buble_sort_prices(products)); // optional
