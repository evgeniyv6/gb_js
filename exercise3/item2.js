"use strict";


function int_descr(count) {
	let i=0;
	while (i <= count) {
		if (i==0) {
			console.log(`${i} - это ноль`);
			i++;
		} else {
			i % 2 == 0 
			? console.log(`${i} - четное число`) 
			: console.log(`${i} - нечетное число`);
			i++;
		}

	}
}

int_descr(10);