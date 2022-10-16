"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

//Functions

function logger() {
  console.log("My name is Karolina :))");
}

// wywołanie funkcji
logger();
logger();
logger();
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
const age1 = calAge1(1991);

function calAge1(birthYear) {
  return 2022 - birthYear;
}

// Function expression

const calAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calAge2(2002);

console.log(age1, age2);

// Arrow Functions

const calcAge3 = (birthYear) => 2037 - birthYear;
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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

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

const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;

let teamDolphins = calcAverage(44, 23, 71);
let teamCoalas = calcAverage(65, 54, 49);
console.log(teamCoalas, teamDolphins);

const checkWinner = function (avgCoalas, avgDolphins) {
  if (avgCoalas >= 2 * avgDolphins) {
    console.log(
      `The winner is team Coalas!!!! They win ${avgCoalas} vs ${avgDolphins}.`
    );
  } else if (avgDolphins >= 2 * avgCoalas) {
    console.log(
      `The winner is team Dolphins!!!! They win ${avgDolphins} vs ${avgCoalas}.`
    );

    return teamCoalas, teamDolphins;
  } else {
    console.log(`No one won`);
  }
};
checkWinner(teamCoalas, teamDolphins);

// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "John";
const friend3 = "John";

const friends = ["Michael", "John", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

let firstName = "karolina";
const karolina = [firstName, "dbaj", 2022 - 2002, "student", friends];
console.log(karolina);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1930, 1232, 1999];

const age = calcAge(years[0]);
const age11 = calcAge(years[1]);
const age22 = calcAge(years[2]);
console.log(age11, age22, age);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);

// Basic Array Operations (Methods)

// Add elements
const friends1 = ["Michael", "John", "Peter"];
const newLength = friends1.push("Jay");
console.log(friends1);
console.log(newLength);

friends.unshift("John");
console.log(friends1);

// Remove elements
friends1.pop();
const popped = friends1.pop();
console.log(popped);
console.log(friends1); // Last element

friends1.shift();
console.log(friends1); // First element

console.log(friends1.indexOf("John"));
console.log(friends1.indexOf("Bob"));

friends1.push(2223);
console.log(friends1.includes("John"));
console.log(friends1.includes("Bob"));
console.log(friends1.includes("2223"));

if (friends1.includes("Peter"));
{
  console.log("You have a friend called Peter :D");
}

// Coding Challenge #2

// 1

let billValue = 50;

function calcTip(billValue) {
  let tip;
  if (billValue > 50 && billValue < 300) {
    tip = (billValue * 15) / 100;
    console.log(`The tip is ${tip} :))`);
  } else {
    tip = (billValue * 20) / 100;
    console.log(`The tip is ${tip} :))`);
  }
  return tip;
}

// 2
const bills = [125, 555, 44];

// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// 4
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// Introduction to Objects

const karolinaArray = [
  "Karolina",
  "Dbaj",
  2022 - 2002,
  "student",
  ["Michael", "Peter", "Steven"],
];

// Dot vs. Bracket Notation
const karolina1 = {
  firstName: "Karolina",
  lastName: "Dbaj",
  birthYear: 2002,
  job: "student",
  friends: ["michael", "jonas", "adam"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(karolina1);
console.log(karolina1.age);
console.log(karolina1["age"]);

const nameKey = "Name";
//console.log(karolina["first" + nameKey]);
//console.log(karolina["last" + nameKey]);

//const interesedIn = prompt(
//"What do you want to know about Karolina? Choose between firstName, lastName, age, job"
//);
//console.log(karolina1[interesedIn]);

karolina1.location = "poland";
karolina1["twitter"] = "@abc";
console.log(karolina1);

// challenge
// "Jonas has 3 friends and his best friend is called Michael";

console.log(
  `${karolina1.firstName} has ${karolina1.friends.length} friends, and his best friend is called ${karolina1.friends[0]}`
);

// Object Methods

console.log(karolina1.calcAge(1991));
console.log(karolina1["calcAge"](1991));

console.log(karolina1.calcAge());
console.log(karolina1.calcAge());
console.log(karolina1.calcAge());
console.log(karolina1.calcAge());

// Coding challenge #3

//1
//2

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.fullName} BMI (${Mark.BMI}) is higher than John's! (${John.BMI})`
  );
} else {
  if (Mark.BMI < John.BMI) {
    console.log(
      `${John.fullName} BMI (${John.BMI}) is higher than Mark's! (${Mark.BMI})`
    );
  }
}
