"use strict";

let a = 2; let x = 1 + (a *= 2);

/*
1. инициализируем переменную "а" двойкой
2. a *=2 тоже что и a = a * 2, получаем 4
3. 1 + 4 = 5 для переменной x
*/

console.log(`${a} - ${x}`)