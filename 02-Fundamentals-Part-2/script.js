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

const yearsUntilRetirement = (birthYear, firstName) => {

    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;

    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2002, 'Karolina'));
console.log(yearsUntilRetirement(1980, 'Bob'));

 
