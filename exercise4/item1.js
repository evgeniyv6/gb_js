"use strict";

function numToObject(num) {
	if (!Number.isInteger(num) || num < 0 || num > 999) {
		console.log(`Допустимо число из диапазона от 0 до 999. Вы ввели - ${num}.`);
		return {}
	} else {
		return {
			units: num % 10,
			tens: Math.floor(num / 10) % 10,
			hundreds: Math.floor(num / 100),
		}
	}
}

console.log(numToObject(100));