"use strict";

let obj1 = {
name : 'Иван',
age  : 25

}


let admin = obj1;

admin.name = 'Александр';


console.log(obj1.name); //Александр

let name = 'Иван';
let user = name;


// Копирование обьекта

let clone = {};
    for(let key in obj1){
        clone[key] = obj1[key];
    }

    // object.assing - склеивание обьектов

    let obj2 = { name : 'Петр'};

    let premission1 = {canViev:true};

    let premission2 = {canViev:false};

    Object.assign(obj2,premission1,premission2);

    cionslole.log(obj2);

    //Длина Массива (length)

    let friits = [];

    fruits[123] ='ЯБЛОКО';

    console.log(fruits.length);

    let arr3 = [1,2,3,4,5,5,10];

    arr3.length = 2; // обрежется массив до двух элементов;
    
    console.log(arr3);

    //Создание массив через new Array()

    let arr4 = new Array('Яблоко', 'Груша','Апельсин');
    let arr5 = new Array(4); // создасться массив пустой на 4 элемента

    //Многомерные массивы

    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],

    ];

    console.log(matrix[1][1]); //5

    //Преобразование массива в string

    let arr6 = [1,3,4];

    console.log(String(arr6)); // '1,2,3'

    console.log([] +1 ); //'1'

    console.log([1] + 1); //'11'
     
    console.log([1,2] +1); // '1.21'





/* С массивами работают те же функции что и с обьектом
   push
   pop
   shift
   unshift


*/ 


// функция массива splice - эта функция удаления из массива

let arr7 = [1,'hello',3,42,'name'];

arr7.splice(1.1);// первым параметром передаем с какого элемента удалить а вторым сколько элементов удалить

console.log(arr7);



let deleted =arr7.splice(0,3, 'Яблоко' , 'Груша');

console.log(arr7);

console.log(deleted);

arr7.splice(1,0,1,3,5);

console.log(arr7);

//Метод slice - возвращает новый массив и копирует в него элементы начиная от start до end (не включая end)

let arr8 = ['h','e','1','1','0'];

console.log( arr8.slice(1,3));

// Метод concat

let arr9 = []

console.log( arr9.concat(arr8, arr7)  );

// Препебор массива forEach - позволяет запустить функцию для каждого отдельного элемента массива.


/* item - это текущий элементи итерации
   index - порядковый номер итерации.
   array - это массив с которым мы работаем
*/
 
arr7.forEach(function(item, index, array)
{
    console.log(index + ' ' + item);
});

// Поиск в массиве 

// indexOf/lastIndexOf и includes

/*
Работают аналогично с текстом но вместо символов перебирают значения элементов масива.

 

*/

 console.log(arr7.indexOf(1)); // 1

 console.log(arr7.indexOf(3)); // 2

//indexOf(item,from) - ищет значение  item ,  начинает с индекса from. Возвращает индекс, либо -1 если не найдено

// lastIndexOf - то же самое только с конца

// includes(item,from) - ищет item, начиная с from и возвращает true если нечего не найдено.


console.log(arr7.includes(1)); // true

// Дата и время

/*
Для работы с дотой и временем используется встроенный обьект DATE
*/ 

let now = new Date();

console.log(now);

let jan01_1970 = new Date(0);

console.log(jan01_1970);

// Отсчет времени и идет  от 1.01.1970


let jan01_1970 = new Date(24*3600*1000); //02.01.1970.

//new Date принимает мллисекунды.

//new Date(ms) принимает милисекунды

//new Date(datestring) -это форма записи 2017-01-26 \ 2017-01-26Т10:22;

//new Date(2011, 10, 5, 12, 40, 565) - год,месяц,день,часы,минуты,секунды,милисекунды


//Получение компонентов даты

console.log(now.getFullYear()); // Выведет год

/*

 getMonth() - Выведет месяц от 0 до 11

 getDate() - выведет день месяца от 1 до 31;

 getHours, getMiniseconds , getSeconds, getMilliseconds.

 getday - вернет день недели от 0(воскресение) до 6;

 Cуществует также фналогичные функции с приставкой UTC - они выведут тоже самое , только в 9 часовом формате;

 Например: getUTCFullYear()...



 Таймстемп - это особый вид хранения времени в котором сочетаются дата + время + часовой пояс:

 getTime() -возвращает timestamp, количество ms c 1 января.

 getTimezoneOffset() - возвращает разницу в минутах между вашим поясом и UTC+0;

 Есть так же аналогичные функции для установки всех параметров доты и времени с приставкой set

 Например: setFullYear() \ setDate() \ setSeconds()...

И у этих всех функции есть аналоги с приставкой UTC




*/






