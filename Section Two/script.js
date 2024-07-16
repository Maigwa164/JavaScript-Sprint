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

/*

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
*/

/*
//Arrow function

const calcAge3 = birthYear=> 2024 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const retirementYear = (birthYear,firstName) =>{
   const age = 2024 -birthYear;
   const retirement = 60 - age; 
//    return retirement;
    return `${firstName} retires in ${retirement}years`

}

console.log(retirementYear(2001,'David'));
console.log(retirementYear(1996, 'Winnie'));
*/


/*
//fuctions calling other functions

const cutPieces = function(fruit){
    return fruit*4;
};

const fruitProccesor = function(apple,orange){
    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(orange);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`
    return juice;
}

console.log(fruitProccesor(2,3));

*/


/*

//Review of Function
const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const ageUntilRetirement= function(dateOfBirth, name ){
    const age = calcAge(dateOfBirth);
    const retirement = 60 - age;
    if(retirement>0){
        // return retirement;
        return `${name} has left ${retirement} years before retirement`;
   
    }
    else {
        // return -1;
        return `${name} has retiremented 👴🏾`;
   
    }
//     return `${name} has left ${retirement} years before retirement`;
   
}

console.log(ageUntilRetirement(2001,'David'));
console.log(ageUntilRetirement(1950,'Daniel'));


//TEST EXAMPLE
function calcAge (birthYear,firstName){
    const age = 2024 -birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}
const age =calcAge(2001, 'David');
*/

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK �*/

/*
//fuction to calculate the average
const calcAverage = (firstGame, secondGame, thirdGame)=>(firstGame+secondGame+thirdGame)/3;

    let scoreDolphin = calcAverage(44,23,71);
    let scoreKoalas = calcAverage(65, 54, 49);
    console.log(scoreDolphin,scoreKoalas);

const checkWinner = function(avgDolhins,avgKoalas){
 
    if(avgDolhins>=avgKoalas*2){
        console.log(`Dolphis win (${avgDolhins} vs.${avgKoalas})`);
    }
    else if(avgKoalas>=avgDolhins*2){
        console.log(`Koalas win (${avgKoalas} vs.${avgDolhins})`);

    }else{
        console.log("None of the team won")
    }
}

checkWinner(scoreDolphin,scoreKoalas);


//test data 2
    scoreDolphin = calcAverage(85, 54, 41);
    scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphin,scoreKoalas);


//myexcerise


const area = (l,w)=> l*w;
const perimeter = (l,w)=> l+w;

const recArea = area(4,4);
const recPerimter = perimeter(4,4);

console.log(recArea,recPerimter);

const areaAndPerimeter= function(myArea,myPerimeter){
    console.log(`The area is ${recArea}and perimeter is ${recPerimter}`);
}
areaAndPerimeter(recArea.recPerimter);

*/

/////////////////////////////////////////////////////////////////////////////////
/*
//Arrays

const friends = ['David','George','Alex'];
console.log(friends);

//printing the position of each element in the array
console.log(friends[0]);
console.log(friends[2]);

//getting the length of the array
console.log(friends.length);

//printing the last element of the array

console.log(friends[friends.length - 1]);

//changing element of an array

friends [2] = 'Abel';

console.log(friends);


const firstName = 'David';

const david = [firstName, 'Maigwa', 2024 - 2001, 'Software Engineer', friends[0,1,2]];

console.log(david);

//exercise

const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const birthYear = [2000,2001,2002,2003,2004];
const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[2]);

console.log(age1,age2,age3);

const ages = [calcAge(birthYear[0]),calcAge(birthYear[1]), calcAge(birthYear[2])];
console.log(ages);
*/

/*
//Basic Array Operations

const friends = ['Micheal', 'Stephen', 'Peter'];

//method to add an element at the end of the array
const newLength = friends.push('Jay');
console.log(friends);
//To check the return value of push
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Removes Element
//removing last Element
friends.pop();
console.log(friends.pop());

//Removing first element
friends.shift();
console.log(friends);

//Index of
console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('David'));  //-1 for elements not found

//Includes
friends.push(23);
console.log(friends.includes('Stephen'));
console.log(friends.includes('David'));
console.log(friends.includes(23)); // use strict comparison '23' would be false

if(friends.includes('Stephen')){
    console.log(`You have a friend called ${friends[1]}`);
}
 */


/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44*/
/*
const calcBill = function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill * 0.2;
}

const bill =[125,555,44];

const tip = [calcBill(bill[0]),calcBill(bill[1]),calcBill(bill[2]),];

const total =[tip[0]+bill[0],tip[1]+bill[1],tip[2]+bill[2]];

console.log(total);
*/

//did before
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
*/

/*
//My logic
const tips = [];
const totals = [];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];


const calcTip = function(bill){
    if(bill>=50 && bill<=300){
        return `The bill is ${bill} The tip is ${(bill * 0.15)} and the total is ${(bill * 0.15) + bill}`;
    }else{
        return `The bill is ${bill} The tip is ${(bill * 0.15)} and the total is ${(bill * 0.15) + bill}`;
    }

}

// console.log(calcTip(60));

for(let i=0; i<bills.length; i++){
   tips.push(calcTip(bills[i]));
}



console.log(`${tips[0]}
${tips[1]} 
${tips[2]} 
${tips[3]} 
${tips[4]} 
${tips[5]} 
${tips[6]} 
${tips[7]} 
${tips[8]} 
${tips[9]}`);
*/


/*OBJECTS*/
//Array recap
/*const davidArray = [
    'David',
    'Maigwa',
    2024 - 2001,
    'Pilot'
    ['Abel','Victor','Alex']
]
*/
const david = {
    firstName: 'David',
    lastName: 'Maigwa',
    age: 2024 -2001,
    job:'Pilot',
    friends:['Abel','Victor','Alex']
};

console.log(david.firstName);

const nameKey = 'Name';

console.log(david['first' + 'Name']);
console.log(david['last' + 'Name']);

//More on bracket notation

const intrestedIn = prompt('What would you like to know about David? firstName, lastName, age, job, friends?');
// console.log(david[intrestedIn]);

if(david[intrestedIn]){
    console.log(david[intrestedIn]);
}else{
    console.log('Wrong Request! What would you like to know about David? firstName, lastName, age, job, friends?');
}

//adding elements on an object using dot and bracket notatiuon

david.location = 'Kenya';
david['twitter'] = '@maigwa164';
console.log(david);

//challenge
// David has 3 frriends, and his best friend is Micheal

console.log(david.firstName + ' has ' + david.friends.length + ' friends, and his bestfriend is ' + david.friends[0]);