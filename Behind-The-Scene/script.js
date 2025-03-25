'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  // console.log(firstName); //variable lookup to the global scope
  function printAge() {
    let output = `${firstName} is ${age}-old and was born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // //Creating New variables with same name as
      // outer scope's variables
      const firstName = 'Abel'; //this will be the first to be found in a lookup
      //and so it will be picked since it is in the current scope

      //Reassigning outer scope's variablen
      output = 'NEW OUTPUT!';

      const str = `You are also a millenial, ${firstName}`;
      console.log(str);

      //functions are also block scoped
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(add(2, 3)); //refference error since functions
    //are also block scoped {It can work though if
    //strict mode is disabled}
    // console.log(str); //Cnnnot be accesed because let and const
    //are function scoped
    console.log(millenial); //accessed because var is function scoped
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'David';
calcAge(1991);
