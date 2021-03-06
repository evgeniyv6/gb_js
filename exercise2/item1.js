"use strict";

//пример 1 
let a = 1, b = 1, c, d; 
c = ++a;
alert(c); // ответ: 2 
/*
В префиксной форме инкрементирование производится сразу, 
возврат уже с обновленным значением
*/


//пример 2 
d = b++;
alert(d); //ответ: 1 
/*
В постфиксной форме сначала происходит возвращение значения, 
а потом выполняется инкрементирование. 
Т.е. хотя и вывели 1, переменная b = 2
*/


//пример 3 
c = 2 + ++a;
alert(c); //ответ: 5 
/*
В "примере 1" переменная "a" была инкрементирована до зн-я 2, 
теперь мы ее снова инкрементируем до зн-я 3 (в префиксной форме! см. пояснени в "примере 1") 
и к 2 прибавляем 3, получаем  - 5
*/


//пример 4 
d = 2 + b++; 
alert(d); //ответ: 4
/*
Аналогично "примеру 2" - постфиксное инкрементирование переменной "b",
которая уже содержит зна-е 2, т.е. возврат зн-я 2, 2+2 = 4, и затем инкрементирование до зн-я 3
*/

alert(a); //3 
/*
инкрементирована до тройки в "примере 3"
*/

alert(b); //3
/*
инкрементирована до тройки в "примере 4"
*/