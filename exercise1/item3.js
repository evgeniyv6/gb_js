"use strict";


let result = 10 + 10 + "10";
console.log(result);
/*
1. складываем 2 числа 10+10
2. выполняем конкатенацию "20"+"10", получаем 2010
3. результат присваиваем переменной result
4. выводим в консоль с пом-ю console.log
*/

result = 10 + "10" + 10;
console.log(result);
/*
1. конкатенация числа 10 и строки "10" = получаем 1010
2. конкатенация полученной на шаге один строки 1010 и числа 10, получаем 101010
3. результат переприсваиваем переменной result
4. выводим в консоль с пом-ю console.log
*/

result = 10 + 10 + +"10";
console.log(result); // (обратите внимание на пробелы, пишите также) 
/*
1. складываем 2 числа, получаем 20
2. с пом-ю унарного оператора "+"" преобразуем строку "10" в число и складываем с результатом сложения из п.1, получаем 30
3. результат переприсваиваем переменной result
4. выводим в консоль с пом-ю console.log
*/

result = 10 / -"";
console.log(result);
/*
1. конвертируем с пом-ю знака минус пустую строку в -0
2. делим 10 на -0 и получаем -Infinity
3. результат переприсваиваем переменной result
4. выводим в консоль с пом-ю console.log
*/

console.log(10 / +"2,5"); //(да здесь запятая, это не опечатка)
/*
1. получаем NaN, т.к. дробная часть отделяется точкой
2. выводим в консоль с пом-ю console.log
*/