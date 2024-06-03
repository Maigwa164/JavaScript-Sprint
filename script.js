/*
lesson 1

let js = 'amaizing';
//if(js=='amaizing') alert("Hello Maddy Welcome to js");
//console.log(20+20);

console.log(40 + 30 - 9);
console.log(23);

//Naming convention
let firtName = "Maddy";
console.log(firtName);
console.log(firtName);
console.log(firtName);

let firstJob = ("Freelancer");
let currentJob = ("Sofware Engineer");

console.log(firstJob);
console.log(currentJob);
*/

/*
//lesson 2
//Variable and Data Types

let maddy = true;
console.log(maddy);
console.log(typeof maddy);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Maddy");
console.log(typeof Null);

//Dynamic Typing 

maddy = 'Mad man';
console.log(typeof maddy);

//undefined
 let year;
 console.log(year);

 year = 2001;
 console.log(year);
 console.log(typeof year);

 console.log(typeof null);
 */

 /*
 //lesson 3
 // Three ways of variable declaration

 //let
 let age = 23;
 age = 24;
 console.log(age);

 //const

 const yearOfBirth = 2001;

 //yearOfBirth = 2000; not allowed to mutate the value
 console.log(yearOfBirth);

 //var

 var firstName = 'David';
 firstName = 'Maddy';

 console.log(firstName);

 //Not declaring

 lastName = 'Maigwa'
 console.log(lastName);
*/

/*
//lesson 4
 //operators in JavaScript

 //Math operators

 const currentYear = 2024;

 const davidYear = currentYear - 2001;
 const winnieYear = currentYear - 1996;

 console.log(davidYear, winnieYear);
 console.log(davidYear*2, davidYear/10, 2**3);
 //2**3 is 2 to the power of 3 that is 2*2*2

 //string concatenation
const myFirstName = 'David';
const myLastName = 'Maigwa';

console.log(myFirstName + ' ' + myLastName);

//Assignment operators

let x = 10+5;
x += 10;
x *= 4;
x += 1;
x -= 2;

console.log(x);

//comparison opperator

console.log(winnieYear > davidYear); // >, < , >=, <=
console.log(davidYear <= 22);

//const offAge = davidYear <= 22; //storing the value

console.log(currentYear - 2001 < currentYear - 1996); //presidence
*/

/*
//lesson 5
//The operator precedence
let x,y;
x = y = 25 - 10 - 5; //25 -10-5 (happens first) then y = 10 x=y which is 10
console.log(x,y);


x = 10;
y = 20;
const averageNumber = (x+y);
console.log(x,y,(averageNumber)/2);

//mdn for more information on precidence 

*/


//coding challenge 
/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
*/

//solution
/*
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

const markBmi = markMass / (markHeight**2);
const johnBmi = johnMass / (johnHeight**2);

console.log(markBmi, johnBmi);

const higherBmi = markBmi > johnBmi;
console.log(higherBmi);

if(markBmi > johnBmi){
    console.log("Mark BMI ("+markBmi+") is heigher than John's BMI ("+johnBmi+")" );
}
else{
    console.log("Mark BMI ("+markBmi+") is lower than John's BMI ("+johnBmi+")");
}


//test case two
let markMassTwo = 95;
let markHeightTwo = 1.88;

let johnMassTwo = 85;
let johnHeightTwo = 1.76;

const markBmiTwo = markMassTwo / (markHeightTwo**2);
const johnBmiTwo = johnMassTwo / (johnHeightTwo**2);

console.log(markBmiTwo, johnBmiTwo);

const higherBmiTwo = markBmiTwo > johnBmiTwo;
console.log(higherBmiTwo);

if ( markBmiTwo > johnBmiTwo){
    console.log("Marks BMI ("+markBmiTwo+")is greater than John's BMI("+johnBmiTwo+")");
}else{
    console.log("Johns BMI ("+johnBmiTwo+") is less than Mark's BMI("+johnBmiTwo+")");
    console.log(`John BMI is ${johnBmiTwo}
    and Marsks BMI is ${markBmiTwo}`)
}
*/

/*
//Lesson 13 Srings and Template literals

const firstName = 'David';
const birthYear = 2001;
const currentYear = 2024;
const job = 'Pilot';
const bio = "I'm " + firstName + ' a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(bio);

//Using Template Literals
const bioNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`
console.log(bioNew);

//template literals on normal string
console.log(`This is normal string on template literals`);

//multiple line the old way
console.log('This is a \n\
string with \n\
Multiple Lines');

//multiple lines using template literals
console.log(`This is a
string with
Multiple Lines`);
*/

/*
//Taking Decisions If Else statement
//drivers license challenge

const currentYear = 2024;
const birthYear = 2009;
const offAge = currentYear -birthYear;
const yearsRemaining = 18 - offAge;

if(offAge >=18){
    console.log(`You are ${offAge} you can Enroll for Driving lincense🚗`);
}
else{
    console.log(`You can enroll after ${yearsRemaining} years Thankyou!`)
}

//centuary task

const yearOfBirth = 1963;
let centuary;
let generation;

if(yearOfBirth<1997){
 centuary = 20;
 generation = 'Millenial'
 console.log(centuary +'th centuary',generation)
}else{
 centuary = 21;
 generation = 'GenZ'
 console.log(centuary +'st Centuary',generation);
}
*/

/*
//Type conversion and Type coercion

//type conversion
const inputYear = '2001';
console.log(inputYear + 18, inputYear);
console.log(Number(inputYear) + 18 ,inputYear);//converts the string to number
console.log(typeof NaN);//it's a special type of number

console.log(Number('five'));//cannot convert what is not a number (NaN)
console.log(String(23));// converts 23 to string

//type coersion
console.log('I am David '+ 23 + ' years old');// 23 is converted to a string
console.log('23'-'10'-3); //in subtruction 23 and 10 are converted to numbers
console.log('23'+'10'+3); //in addition 23 and 10 are converted to strings
console.log('23'*'2'); //converted to numbers
console.log('23'/'10'); //converted to numbers


//Guess the output
let n = '1' + 1;
n = n-1;
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');
*/

/*

//Truthy and falsy values
console.log(Boolean (NaN));
console.log(Boolean (undefined));
console.log(Boolean (''));
console.log(Boolean (0));
console.log(Boolean (null));
console.log(Boolean ('David'));
console.log(Boolean ({}));

const money = 0;

if(money){
    console.log("Don't spend it all :)");
}else{
    console.log('Get a job ):');
}

let height;
if(height){
    console.log("I am growing");
}else{
    console.log('Height is Undefined');
}
*/

/*

//Equality operators == / ===
const age ='18';

if(age===18) console.log("You are an adult (Strict equality)");
if(age==18) console.log("You are an adult (Loose equality)");

const favourite =Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

/*if(favourite=='23'){// 23 number is converted to 23 string
    console.log("Cool 23 is a cool number!");
}/*
if (favourite ===23 ){
    console.log("23 is a great number!");
}else if(favourite===7){
    console.log("9 is also a great number!");
}
else if(favourite===9){
    console.log("9 is also a great number!");

}else{
    console.log("Number is not 23, 7 or 9");
}

if(favourite!==23){
    console.log("why not 23");
}
*/

/*
020
//LOGICAL OPERATORS
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

// if(hasDriversLicense && hasGoodVision){
//     console.log("David can drive");
// }else{
//     console.log("Someone else should drive");
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);


if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("David can drive");
}else{
    console.log("Someone else should drive");
}
*/

/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

/*
const avgDolphins = (97 + 112 + 80)/3;
const avgKoalas = (109 + 95 + 50)/3;
const minAverage =100;

console.log('Average of Dolphins is: ',avgDolphins, "Average of Koalas is: ",avgKoalas);

// if(avgDolphins>avgKoalas){
//     console.log("Dolhins are the winners");
// }else if(avgDolphins<avgKoalas){
//     console.log("Koalas are the winners");
// }else{
//     console.log("It is a draw");

// }

// if(avgDolphins>avgKoalas && avgDolphins>=minAverage){
//     console.log("Dolhins are the winners");
// }else if(avgDolphins<avgKoalas && avgKoalas>=100){
//     console.log("Koalas are the winners");
// }else if(avgDolphins === avgKoalas){
//     console.log("It is a draw");
// }else{
//     console.log("None of the team won")
// }

if(avgDolphins>avgKoalas && avgDolphins>=minAverage){
    console.log("Dolhins are the winners");
}else if(avgDolphins<avgKoalas && avgKoalas>=100){
    console.log("Koalas are the winners");
}else if(avgDolphins === avgKoalas && avgDolphins && avgKoalas>=100){
    console.log("It is a draw");
}else{
    console.log("None of the team won")
}
*/

/*
//Switch statement

const day = 'Wednesday'
switch(day){
    case 'Monday':
        console.log('Plan the week');
        console.log('Attend meetings');
        break;
    case 'Tuesday':
        console.log("Go for workout");
        console.log('Learn javascript');
        break;
    case'Wednesday':
        // console.log('Attend Kamilimu');
        // console.log('Attend Hackathon');
    case'Thursday':
        console.log('Attend Kamilimu');
        console.log('Attend Hackathon');
        break;
    case'Friday':
        console.log("Recap of the week");
        console.log("Hiking");
        break;
    case'Saturday':
        console.log('Grab that beer');
        console.log('Netflix');
        break;
    case'Sunday':
        console.log('Go to church!');

    default:
        console.log('Not a day');

}

//with if else

const dayofTheWeek = 'Thursday'

if(dayofTheWeek === 'Monday'){
    console.log('Plan the week');
    console.log('Attend meetings');
}else if(dayofTheWeek === 'Tuesday'){
    console.log("Go for workout");
    console.log('Learn javascript');
}else if(dayofTheWeek ==='Wednesday' || 'Thursday'){
    console.log('Attend Kamilimu');
    console.log('Attend Hackathon');
}
// else if(dayofTheWeek ==='Thursday'){
//     console.log('Attend Kamilimu');
//     console.log('Attend Hackathon');
else if(dayofTheWeek ==='Friday'){
    console.log("Recap of the week");
    console.log("Hiking");
}else if(dayofTheWeek ==='Saturday'){
    console.log('Grab that beer');
    console.log('Netflix');
}else if(dayofTheWeek === 'Sunday'){
    console.log('Go to church!');
}else{
    console.log('Go to church!');
}
*/

// experiment on round off const avg = (10+3+1+6+3+7+8+3+9)/9
// console.log(avg.toFixed(2));


//The conditional operator

const age = 23;

age>=18 ? 'wine🍷' :  'water💦';

console.log(`I like to drink ${age>=18 ? 'wine🍷' :  'water💦'}`);

