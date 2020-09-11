"use strict";

let rub  = prompt("Введите сумму для пополнения счета"); // always returns string

function ruble_worker(rubles) {
	if (isNaN(parseInt(rubles))) {
		alert( "Вы ввели не число!" );
	} else if (+rubles <= 0) {
		alert( "Нечего зачислять на счет!" );
	} else {
		let rub_last_symb = rubles.charAt(rubles.length-1);
		switch (+rub_last_symb) {
			case 1:
				alert( `Ваша сумма в ${rubles} рубль успешно зачислена` );
				break;
			case 2: case 3: case 4:
				alert( `Ваша сумма в ${rubles} рубля успешно зачислена` );
				break;
			default:
				alert( `Ваша сумма в ${rubles} рублей успешно зачислена` );
		}
	}

}

ruble_worker(rub)