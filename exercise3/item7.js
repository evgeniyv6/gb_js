
"use strict";

function repeat_x_universal(x_symbol, count) {
	for (let ch=x_symbol; ch.length <= count; ch += x_symbol) {
		console.log(ch);
	}
}

function repeat_x_alter(x_symbol, count) {
	for (let i=1; i<=count;i++) {
		console.log(x_symbol.repeat(i));
	}
}

repeat_x_universal("x", 20);
// repeat_x_alter("x", 20); // optional

