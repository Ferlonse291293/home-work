'use strict';

//alert('Привет, мир!');

let message;

message = 10;

console.log(message);

let message2 = 20;

message = 30;

console.log(message);


let user = 'John', age = 30, height = 180;

let hello;

hello = user;

console.log(hello); //John


const COLOR_ITEM = '#fff';



// Типы данных

let number = 10; // Целое число

let number2 = 34.567; // Число с плавающей точкой

// Существует спец. значение для бесконечности - Infinity \ -Infinity

console.log( 1 / 0 ); // Infinity

console.log( -1 / 0 ); // -Infinity

// Если мы не число делим на число, то получится NaN (Not a Number)

console.log( 'не число' / 10 );
// NaN


// Тип данных Строки (String)

message = "Привет";
message = 'Привет';

message = `${message} Андрей`;

console.log(message);


let x = 10, y = 20;

console.log( `${x + y} человек` ); // 30

// 'f', ' '- это строка, в отличие от других некоторых языков.



// Тип данных - Булевый (логический) тип (Boolean)

// Поддерживает 2 типа значений - true\false (правда\ложь)

let nameChecked = true;

let isGreater = 4 > 1;

console.log(isGreater);


// Специальное значение - null

/*
    Не относится ни к одному типу данных и представляет собой 'ничего' \ 'пусто' \ 'значение не известно'
*/

let weight = null;



// Специальное значение undefined

/*
    Также не относится ни к одному типу данных. Если объявлена переменная и в нее ничего не записано,
    то в ней хрначится значение undefined
*/

let z;

console.log(z);


/*
    рекомендуется использовать null для определения пустой переменной, а undefined будет показателем, 
    что в переменную ничего не записывалось.
*/

/*
    Все типы, которые мы описали выше - это примитивы.

    Тип данных Объект (object) - особенный тип данных, который может хранить все типы данных сразу.

    Тип символ (symbol) - используется для угткальных идентификаторов переменных.
*/


/*
    Оператор typeof - нужен для определения типа данных аргумента, либо данных хранязихся в переменной
*/

console.log( typeof 0 ); // number
console.log( typeof z ); // undefined

console.log( typeof null ); // object - это ошибка в языке программирования



// Строковое преобразование

let value = true;
console.log( typeof value ); // Boolean

value = String(value); // 'true'
console.log( typeof value ); // string



// Числовое преобразование

/*
    Числовое преобразвание срабатывает, когда в выражении участвуют числа или происходит 
    математическое действие.
*/


console.log( '6' / '2' );
// 3

let text = '123';

let number3 = Number(text);

console.log(number3); // 123

console.log( Number('привет') ); // NaN

/*
    undefined > NaN
    null > 0
    true > 1
    false > 0
*/

console.log( Number('      123          ') ); // 123

console.log( Number('123n') ); // NaN

console.log( 1 + '2' ); // 12
/*
    Если один из операндов строка при сложении, то произойдет конкатенация строк (Присоединение)
*/



// Логическое преобразование

/*
    Значения типа 'пустые', 0, пустая строка, null, undefined и NaN преобразуются в false
    Все остальные в true
*/

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean('0') ); // true

console.log( Boolean(' ') ); // true



// Операторы

/*
        Операнд - то к чему применяется оператор.
        Унарный оператор - когда оператор применяется только в 1 операнду.
        Бинарный оператор - когда оператор применяется к 2 операндам.
*/

let g = 1;

g = -g; // -1 \ унарный оператор

g = 2 - 1; // 1 \ бинарный оператор


// Сложение строк (бинарный +)

text = 'моя' + 'прелесть';
console.log(text); // мояпрелесть

console.log( 2 + 3 + '1' ); //51

console.log( '2' - 1 ); // 1 (происходит преобразование к числу)

console.log( '6' / '3' );
// 2 (происходит преобразование к числу)


// Преобразование к числу (унарный +)

number = 1;
console.log( +number ); // 1 (не влияет на положительное число)

number = -1;
console.log( +number ); // -1 


console.log( +true ); // 1 (произойдет преобразование к числу)

console.log( +'' ); // 0 (пустая строка = 0)

console.log( +'число' ); // NaN (все что не число = NaN)


let apples = '2';
let oranges = '4';

console.log( apples + oranges ); // 24
console.log( +apples + +oranges ); // 6



