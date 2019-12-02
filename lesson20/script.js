'use strict';



function c(text){
    console.log(text);
}

// Возврат значения функциями (return)

function sum(a, b){
    return a + b;
}

console.log( sum(10, 20) ); //30

let resultSum = sum(10, 20);

console.log( resultSum ); //30


/*
    При срабатывании return происходит тоже что и при break, но дополнительно
    еще возвращается значение переданное через return
*/


function checkAge(age){
    if(age > 18){
        return true;
    }else{
        return false;
    }
}

console.log( checkAge(22) ); // true

/*
    return можно использовать и без значения. Тогда он сработает как break
    (просто завершит выполнение функции)

    Функция с пустым return вернет undefined
    Функция без return вернет тоже undefined
*/

function doNothing(){}

c( doNothing() ); //undefined

function doNothing2(){ return; }

c( doNothing2() ); //undefined

// Никогда не добавляйте перенос строки между return и значением

/*
    Именование функций

    1) В имени функции должно содержаться действие и имя того над чем прозводится действие
    Например:
    showMessage
    getAge
    createAccount
    checkPremission
    ...


    2) Функции нужно создавать с условием, что она выполняет какое-то одно действие.
    Даже если функции будут выполняться вместе.
    Например
    Функция showMessage выполняет 2 другие функции showName и showText
    Функция Стирать (для стиральной машинки) будет содержать функции Залить_воду \ 
    Залить_порошок \ Вращать_барабан \ Слить_воду

    Нужно комментировать действия происходящие в функциях, описывая этапы работы,
    принимаемые значения, возвращаемые значения...
*/


/*
    function showMessage(){ showName()  showText() }

    function showName(){ getUserName() }

    function getUserName(){}

    function showText(){ getUserText() }

    function getUserText(){}
*/


// Function Expression (Функциональные выражения)

/*
    Синтаксис функция, который мы записывали ранее называется Function Declaration
    (Объявление функции)
*/


let sayHi = function(){
    c('Привет');
};

sayHi(); // Привет

c( sayHi ); // Выведет тело функции


let copySayHi = sayHi; // Запишет тело функции в переменную и теперь она будет работать также.

copySayHi();



//Функции - коллбеки

/* процесс передачи функции как значения */

function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}

function showOk(){
    c('Вы согласны');
}
function showCancel(){
    c('Вы не согласны');
}

ask('Вы согласны?', showOk, showCancel);

ask('Вы согласны?', function(){c('Вы согласны');}, function(){c('Вы не согласны');});

// Функции передаваемые в другую функцию - это как значения представляющие 'действие'


// Различия Function Expression и Function Declaration

/*
    Function Expression создается, когда выполнение кода доходит до нее и в послежствии может 
    использзоваться(запускаться).

    Function Declaration может использоваться сразу во всем скрипте.

    При строгом режиме(use strict), когда function declaration находится в блоке {...},
    эта функция доступна только внутри этого блока. Но не с наружи него.
*/

let age2 = 19;

if(age2 >= 18) {

    function welcome(){
        c('Добро пожаловать');
    }

    welcome();
}


// welcome(); - будет ошибка - эта функция доступна только внутри скобок.


let copyWelcome;

if(age2 >= 18) {

    copyWelcome = function (){
        c('Добро пожаловать');
    }

    copyWelcome();
}

copyWelcome();


// Функции-стрелки (стрелочные функции)

let sum2 = (a, b) => a+b;

c( sum2(20, 43) ); // 63

// Тело стрелочной функции сразу врзвращает значение (встроенный return).

// Если использовать только 1 аргумент, то можно не ставить скобки

let double = n => n*2;

c( double(6) ); // 12

// Если аргументов нет, то нужно указывать пустые скобки

let sayHello = () => c('Hello');

sayHello();


// Многострочне стрелочные функции

let sum3 = (a, b) => {
    let result = a + b;
    return result; // в многострочном варианте return не встроен и нужно его указывать
};

c( sum3(14, 44) ); // 58


// Тип данных Объекты


let user = new Object();

let user2 = {}; // Литеральная нотация или оитерал объекта

let user3 = {
    name : 'Иван',
    age : 30,
    height : 180
};

// Свойства объектра также называют полями объекта


// Получение или обращение к свойствам объекта

c( user3.name ); // Иван

c( user3 ); // Выведет все поля объекта, но только 1 уровня


// Если название свойства состоит из нескольких слов, то название нужно брать в кавычки

let user4 = {
    'name' : 'John',
    'home address' : 'Poltava'
};

c( user4['home address'] ); // Poltava


/*
    Чтобы обратиться к свойству с названием из более чем 1 слова, нужно соблюдать такой синтаксис
    ['название_свойства']
    Этот способ также позволяет обратиться к свойству передавая вместо имени переменную.
*/

let option_name = 'home address';

c( user4[option_name] ); // Poltava


// Вычисляемые свойства

let fruit = prompt('Какой фрукт купить?', 'apple');

let bag = {
    [fruit] : 5 // имя свойства будет взято из переменной fruit
};

c( bag.apple ); // 5

c( bag );



// Удаление из объекта


delete user3.height; // удаление свойства height в объекте user3

c( user3 );


// Добавление свойства в объекта

user3.isAdmin = true;

c( user3 );



// Проверка на существование свойства


let user5 = {
    age: 19
};

c( user5.name === undefined ); // true 

c( 'name' in user5 ); // false
c( 'age' in user5 ); // true



// Цикл for ... in

/*
    Нужен для перебора свойств объекта

    for( key in object ){

    }

    key - это переменная, куда на каждой итерации будет попадать имя текущего свойства
    object - имя объекта, который мы перебираем

*/

for(let key in user3){
    c( key + ': ' + user3[key]  );
}









