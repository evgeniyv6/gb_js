"use strict";

let a = 0, b = 4;

function two_vars_worker(a,b) {
	switch (true) {
		case a >= 0 && b >= 0:
			console.log(a-b);
			break;
		case a < 0 && b < 0:
			console.log(a * b);
			break;
		case a * b <= 0:  // <= because 0 is positive and -0 == 0 is true
			console.log(a + b);
			break;
		default:
			console.log(`a = ${a}, b = ${b}`)
	}
} 

two_vars_worker(a,b);