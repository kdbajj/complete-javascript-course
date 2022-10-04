'use strict';
 let hasDriversLicense = false;
 const passTest = true;

 if (passTest) hasDriversLicense = true;
 if (hasDriversLicense) console.log(`I can drive :D`);

 //Functions

 function logger (){
    console.log('My name is Karolina :))');
 }

 // wywołanie funkcji
 logger ();
 logger ();
 logger ();
/*
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,3));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/
//Function Declarations vs. Expressions

// Function declarations
const age1 = calAge1(1991)

function calAge1(birthYear){
    return 2022-birthYear;
}

// Function expression

const calAge2 = function (birthYear){
    return 2022 - birthYear;
}
const age2 = calAge2(2002);

console.log(age1, age2);

// Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
/*
const yearsUntilRetirement = (birthYear, firstName) => {

    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;

    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2002, 'Karolina'));
console.log(yearsUntilRetirement(1980, 'Bob'));   
*/

// Functions Calling Other Functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));

//Reviewing Functions 

/*const calcAge = function(birthYear){
    return 2022 - birthYear;
}

 const yearsUntilRetirement = function (birthYear, firstName) {

    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }   else {
        console.log(`${firstName} has already retired. :)`);
        return -1;
    }
    
   // return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1888, 'John'));
*/

//Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1,score2, score3)/3;

let teamDolphins = calcAverage(44, 23, 71);
let teamCoalas = calcAverage(65, 54,49);
console.log(teamCoalas, teamDolphins);


const checkWinner = function (avgCoalas, avgDolphins){

   if (avgCoalas >= 2 * avgDolphins){
       console.log(`The winner is team Coalas!!!! They win ${avgCoalas} vs ${avgDolphins}.`);
       
   } else if(avgDolphins >= 2 * avgCoalas ){
    console.log(`The winner is team Dolphins!!!! They win ${avgDolphins} vs ${avgCoalas}.`);
   
   return teamCoalas,teamDolphins;
   }
   else {
    console.log(`No one won`);
   }
  
}
checkWinner(teamCoalas,teamDolphins);

// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'John';
const friend3 = 'John';

const friends = ['Michael', 'John', 'Peter'];
console.log(friends);



console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

let firstName = 'karolina';
const karolina = [firstName, 'dbaj', 2022-2002, 'student',friends];
console.log(karolina); 

// Exercise
const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const years = [1990, 1930, 1232, 1999];

const age = calcAge(years[0]);
const age11 = calcAge(years[1]);
const age22 = calcAge(years[2]);
console.log(age11,age22,age);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];
console.log(ages);
