'use strict';
/*
let hasDriversLicense = false;
const passedTest = true;

if(passedTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("can drive");
*/

/*
//INTRODUCTION TO FUNCTIONS

function logger(){
    console.log('My first function');
}

logger();
logger();
logger();

function fruitProccesor(apple, orange){
// console.log(apple,orange);
const juice = `Juice with ${apple} apple and ${orange} oranges.`
return juice;
}

// fruitProccesor(4,2);
const appleJuice = fruitProccesor(4,0);
console.log(appleJuice);

// console.log(fruitProccesor(4,2));

const appleOrangeJuice = fruitProccesor(3,5);
console.log(appleOrangeJuice);
*/



//my logic

function age(currentYear,birthYear){
    const youraAge = currentYear - birthYear;
    return youraAge;
}

const currentAge = age(2024,2001);
console.log(currentAge);


//Function Declaration
function age1Calc(yearofBirth){
return 2024 -yearofBirth;
}
const Age1 = age1Calc(2001);
// console.log(Age1);

//function expression
const Age2Calc = function(yearofBirth){
    return 2024 - yearofBirth;
}
const Age2 = Age2Calc(2000)

console.log(Age1,Age2);