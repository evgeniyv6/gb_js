"use strict";

// ex 4

function get_sum(x, y) {
	return x + y;
}

function get_diff(x, y) {
	return x - y;
}

function get_multiple(x,y) {
	return x * y;
}

function get_div(x, y) {
	return x / y;
}


// ex 5

function mathOperation(arg1, arg2, oper) {
	let res;
	switch (oper) {
		case "summarize":
			res = get_sum(arg1, arg2);
			return res;
		case "difference":
			res = get_diff(arg1, arg2);
			return res;
		case "multiply":
			res = get_multiple(arg1, arg2);
			return res;
		case "divide":
			res = get_div(arg1, arg2);
			return res;
		default:
			return null;
	}
}


console.log(mathOperation(1,2,"divide"));