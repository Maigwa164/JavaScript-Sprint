'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  oder: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
    //logic to be implimented
    // if (this.otherIngridients) {
    //   console.log(`Pizza with only ${mainIngridient}`);
    // } else {
    //   console.log(`Pizza with ${mainIngridient} and ${otherIngridients}`);
    // }
  },
};

/*
restaurant.orderDelivery({
  address: 'Via del Sole',
  time: '22:30',
  starterIndex: 2,
  mainIndex: 2,
});

//Testing default values
restaurant.orderDelivery({
  address: 'Nairobi',
  starterIndex: 1,
  //time :20:00
  //mainIndex: 0:
});
/*
//*************Destructuring an array*************
let arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;

console.log(x, y, z);

//skipping an element in the array
const [first, , third] = restaurant.categories;
// console.log(first, third);

//Swapping /switching odinary way

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

//swapping using destructuring

[main, secondary] = [secondary, main];

console.log(main, secondary);

//Receiving two values from a function then destructuring
const [starter, mainCourse] = restaurant.oder(2, 0);
console.log(starter, mainCourse);

//Nested array
const nested = [2, 4, [5, 6]];
// const [i, , k] = nested;
// console.log(i, k);

//getting individual elements
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default value
//setting default values
const [p = 1, q = 1, r = 1] = [7, 8, 9];
console.log(p, q, r);

*/

/*

/*******************Destructuring an Object********
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//****renaming property name *
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Setting default values

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating Variables
let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);

console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

//practice question
/*
const calcAreas = {
  length: 5,
  width: 2,
  radius: 7,
  calcArea: function ({ length = 0, width = 0, radius = 0 }) {
    const squareArea = width * width;
    const circleArea = 3.14 * radius * radius;
    const rectangleArea = length * width;

    console.log(
      `The square area is: ${squareArea} The Circle is: ${circleArea} The Area of rectacgle : ${rectangleArea}`
    );
  },
};

calcAreas.calcArea({
  length: 30,
  width: 20,
  radius: 7,
});
*/

/*********Spread operator *
const arr = [7, 8, 9];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

//using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

//using spread operator to get individual
console.log(...newArr);
//its like writing
console.log(1, 2, 7, 8, 9);

//spread operator in practice
const newMenu = [...restaurant.mainMenu, 'Ugali'];
console.log(newMenu);

//Copy array

const mainMenuCopy = { ...restaurant.mainMenu };
console.log(mainMenuCopy);

//Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//spread operator on strings
const str = 'David';
const letters = [...str, '', 'M'];
console.log(letters);
console.log(...str);

//this wont work because spread operator only works with places with multiple values separated by commas
// console.log(`${...str}`);

/*
//spread operator on functions
const ingridients = [
  prompt("Let's make Pasta! Ingridient 1?"),
  prompt('Ingridient 2?'),
  prompt('Ingridient 3?'),
];
console.log(ingridients);
//old way
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
//with spread operator
restaurant.orderPasta(...ingridients);
*

//****spread operator in object *
//creating a new restautant object with all data from the original object
const newRestautant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
//order doesnt matter
console.log(newRestautant);

//creating shallow copy of an object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/**********The REST PATTERN AND PARAMETERS *
//Destructuring
//Spread operator since it's on the right side of the =
const arrs = [1, 2, ...[3, 4, 4]];
console.log(arrs);

//Rest pattern because its on the left side of the =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Using the three dots on both sides
const [pizza, , risotto, ...otherFoood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoood);

//Rest pattern in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//-----Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//destructing an array before passing it into a function

const x = [23, 5, 7];
add(...x);

//restaurant example
// const specialMenu = ['onion', 'cheese', 'pinaple', 'chicken'];
// restaurant.orderPizza(...specialMenu);
restaurant.orderPizza('onion', 'cheese', 'pinaple', 'chicken');
restaurant.orderPizza('onion');
*/

/*
/*************Short circuiting *
console.log('-----------OR operator-------');
console.log(3 || 'David');
console.log('' || 'David');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//Practical exaple on the restaurant object
//checking if property exist and setting values

// restaurant.numGuests = 23;
//using ternary operator
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//using the OR shortcircuit
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----------AND Operator------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//practicle example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'spinach');
}
//using AND shortcircuit

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'spinach');
*/

/***************Nullish Coalescing Operator *

//Using the OR Operator
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

//Nullish Coalescing Operator
//Nullish :null and undefined (NOT 0 OR '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/***************Logical Assignment Operator *******

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//Using OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1.numGuests, rest2.numGuests);

// //Using OR assignment operator
// rest1.numGuests ||= 100;
// rest2.numGuests ||= 100;

// console.log(rest1);
// console.log(rest2);

//Using nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

//Logical AND assignment operator

//using the AND opertator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// using Logical AND assignment operator
/*
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
Data Structures, Modern Operators and Strings 
Coding Challenge #1 
We're building a football betting app (soccer for my American friends 
�
�)! 
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data. 
Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

const [gk, ...fieldplayers] = players1;

console.log(gk, fieldplayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/*4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'*/

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

/* 5 .Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') */

const { team1 = 0, x: draw = 0, team2 = 0 } = game.odds;
console.log(team1, draw, team2);

/* 6 .Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
//Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored*/
const printGoals = function (...players) {
  console.log(`${players.length} Goals were scored`);
  console.log(...players);
};
printGoals(...game.scored);

/*7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.*/

// const win =
//   game.odds.team1 < game.odds.team2 &&
//   game.odds.team1 < game.odds.x &&
//   game.team1;
// console.log(win);

// const winner = game.odds.team1 && game.team1;
// game.odds.x || (game.odds.team2 && game.team2);
// console.log(`${winner} is likely to win`);

game.odds.team1 < game.odds.team2 &&
  console.log(`${game.team1} is likely to win`);

game.odds.team1 > game.odds.team2 &&
  console.log(`${game.team2} is likely to win`);
