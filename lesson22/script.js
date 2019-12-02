"use strict";

// Проверка на бесконечность isfinite/ проверка на число isNaN

console.log(isNaN(NaN)); //true

// В начале она преобразует к числу переданные данные и потом определяет число ли это

let text = 'Привет';

console.log( isNaN(text)); //true

//NaN не равен ничему другому даже себе

console.log(NaN === NaN); // false

console.log(isFinite('15'))// true

//сначала преобразует к числу  переданные данные и потом возвращает true если это число

// Иногда используют isFinite используют для проверки - нет ли числа в строке


//parseInt и parseFloat

//parseInt - отделяет число от текста в строке (строка должна начинаться с числа)

console.log( parseInt('100px')); //100

//parseFloat - работает так же, только сохраняет еще и дробную часть числа

console.log( parseFloat('12.5em')); //12.5

//Учитывается только первая точка 

console.log(parseInt('12.3')); //12

console.log(parseFloat('12.2.3')); //12.2

//Если переданный текст начинается с буквы , то функция вернет NaN

console.log('a123'); //NaN

/*
 У parseInt еще есть 2 параметр , в который можно передать систему исчисления в которой записаны передаваемые данные

*/

console.log(parseInt('ff',16)); // 255

// Math.random() - генерирует случайное число от 0 до 1 (но не включая 1)

console.log(Math.random());

function getRandom(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

console.log(getRandom(10,100));

//Math.max(a,b,c.....) / Math.min(a,b,c...)

console.log(Math.max(1,2,3,4,5,6,7,18,25));

console.log(Math.min(1,2,3,4,5,6,7,18,25));

// Math.pow(n, power) - возвращает число n, возведение в степень power

console.log( Math.pow(2,10)); //1024


// СТРОКИ

let bigtext = `Привет
Как дела?
Хорошо`;

console.log(bigtext);

//Спецсимволы

/*
\n- перенос строки
Что бы вставить в текст спецсимвол нужно поставить переде ним "\" экранировать его


\uXXXX - для вставки unicode символов. 

*/


let str= 'Hel\\lo\nWor\'ld';

console.log(str);

console.log('\u00A9')

console.log("\u{1f60D}");

// Свойства - Длина строки (length)

console.log('hdvbfuybsuvh'.length);

let str2 = 'Hello';

console.log( str2[0]); // H

console.log( str2.chatAt(2)); // l

console.log( str2[str2.length-1]); // 0 (5-1 = 4)

/*
Если символ под номером [x] отсутствует, то вернется underfined , а в случае с chatAt вернется пустая строка



*/

console.log(str2[500]); //underfined

console.log(str.chatAt(5000)); // ''

//Строку можно перебрать посимвольно  с помощью for..of


for(let char of 'Hello'){
 console.log(char);
}

//Строки неизменяемые - нельзя поменять значения символа в строке обратившись к нему

//str[3] = 'b'; так нельзя;












