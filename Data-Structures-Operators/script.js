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
};
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

/*******************Destructuring an Object********/
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//****renaming property name */
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
