"use strict"

//DZ 1 function isNumberInRange

function isNumberInRange(number){

    if(number>0 && number<10){
    number = 'true';
    }else{
    number = 'false';
    
    }

    return  console.log(number);

}

isNumberInRange(4);

//DZ 2 function even

function isEven(number){
 
    if(number%2 == 0){
        number = 'четное'; 
    }else{
        number = 'не четное'; 
    }
    return  console.log(number);
}
isEven(8);


//DZ 3 function update if in switch



var value = +prompt('value?', '');
switch(value){
    case 0:
                alert( 0 );
                break;
    case 1:
                alert( 1 );
                break;
    case 2: 
                alert( '2,3' );
                break;
    case 3:

                alert( '2,3' );
                break;
}

//DZ 4 function min(a,b)

function min(a,b){
    if(a < b){
     return console.log(a);
    }else{
    return console.log(b);
    }

}

min(2,4)

