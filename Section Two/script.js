/*'use strict';

let hasDriversLicense = false;
const passedTest = true;

if(passedTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("can drive");
*/
'use strict';

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
