// let js = "amazing";
// if (js === "amazing") alert("javascript is fun!");

// LECTURE: Values and Variables
console.log(50 - 45 + 3);
console.log("Alice");
console.log(32);

let firstName = "abc"; // przypisanie wartości do zmiennej
console.log(firstName);
console.log(firstName);
let PI = 3.1415; // możemy nazwać zmienną samymi dużymi literami

let country = "Poland";
let continent = "Europe";
let population = "40";
console.log(country, continent, population);

// LECTURE: Data Types
javascriptIsFun = "Yes!!!"; //aby zmienić typ zmiennej wystarczy przypisać do niej inną wartość
console.log(typeof javascriptIsFun);

//LECTURE: let, const and var
//let age = 30;
//age = 32; //nadpisanie zmiennej inną wartością
//console.log(age);

//const birthYear = 2002; // zmienna, której nie da się zmienić
var job = "programmer";
job = "teacher";

var language = "polish";
language = "english";
console.log(language);

//LECTURE: Basic Operators

// Math operators
const now = 2050;
const ageJohn = 2050 - 1990;
const ageSara = 2050 - 2002;
console.log(ageSara, ageJohn, 2 ** 3); // 2**3 oznacza 2 do potęgi 3 = 2*2*2

//const myFirstName = "Karolina";
//const myLastName = "Dbaj";
//console.log(myFirstName + " " + myLastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x= x * 4 = 100
x++; // x = x + 1
console.log(x);

// Comparison operators
console.log(ageJohn < ageSara); // dzięki temu, możemy sprawdzić, czy konkretny warunek jest prawdą
const isFullAge = ageSara >= 18;

//LECTURE: Operator Precedence
let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a, b); 
console.log(ageJohn + ageSara / 2);

//Coding Challenge #1\

//1
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.88;
const johnMass = 85;

//2
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI,johnBMI);

//3
let markHigherBMI;

if (markBMI>johnBMI)
    markHigherBMI = true;
    console.log(markHigherBMI);// const markBMI = (markBMI>johnBMI)

//Strings and Template Literals

const myFirstName = 'Karolina';
const myJob = 'student';
const myBirthYear = 2002;
const year = 2022;

const karolina = "I'm " + myFirstName + ', a ' + (year -myBirthYear) + ' years old ' + myJob + '!';
console.log(karolina);

const karolinaNew = `I'm ${myFirstName}, a ${year - myBirthYear} years old ${myJob}!`;
console.log(karolinaNew);
console.log(`String with 
multiple 
lines`);

// Taking Decisions: if / else Statements
const sarahAge = 19;
const isOldEnough =  sarahAge >= 18;

if (isOldEnough){
    console.log(`Sarah can start driving license!!! 🚗`);
} else {
    console.log(`Sarah can't start driving license 😭`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000 ){
    century = 20;
} else { 
     century = 21;
}
console.log(century);

//Coding Challenge #2

//1
if (markBMI>johnBMI){
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

//2
if(markBMI>johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);

}else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`); 
}

// Type Conversion and Coercion

//type conversion
const inputYear='1991';
console.log(Number (inputYear) + 18);// konwertujemy ze string na liczbę

console.log(String (23));//konwertujemy na string

//type coercion
(console.log(`I'm ${20} years old`));
console.log(`223`*`2`);

//Truthy and Falsy Values
 console.log(Boolean (0));
 console.log(Boolean (undefined));
 console.log(Boolean ('Jonas'));
 console.log(Boolean ({}));

 let height;//jest undefined
 if (height){
    console.log('Yaaaaay! Height is defined');
 }else{
    console.log(`Height isn't defined!`);//undefined is falsy value (0)
 }

 //Equality Operators: == vs. ===
  const age = '18';
  if (age === 18) console.log('You just became an adult! :D (strict)');//=== takie samo
  if (age ==18) console.log('You just became an adult! :D (loose)');

 // const favourite = Number(prompt (`What's your favourite number???`));
  //console.log(favourite);
  //console.log(typeof favourite);

  //if (favourite === 23) {
    //console.log(`Cool!! 23 is really amazing number!`);
  //} else {
    //console.log(`That's great!`)
  //}

  //Logical Operators
const hasDriversLicense = true;//A
const hasGoodVision = true;//B
const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);// jest fałszywe(wynika to z logicznych wartości)

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive){
    console.log(`Sarah is able to drive!`);
}
    else{
        console.log(`Someone else should drive...`)
    }

//Coding Challenge #3

coalasAvarageScore = (88 + 91 + 110)/3;
dolphinsAvarageScore = (96 + 89 + 108)/3;
const minimumScore=100;

let isMinimum;
if ((coalasAvarageScore && dolphinsAvarageScore) >=100) minimumScore = true;
if (minimumScore >= 100)  isMinimum = true;

if (isMinimum = true){
    if (coalasAvarageScore>dolphinsAvarageScore){
        console.log(`Coalas are winners!!!🏆`);}
        else if (coalasAvarageScore<dolphinsAvarageScore){
            console.log(`Dolphins are the winners!!!🏆`)
        }
        else if(coalasAvarageScore === dolphinsAvarageScore){
            console.log(`There was a draw! :O`)
        }
}else {
    console.log(`Both teams had score lower than 100 :((`);
}

//The switch Statement

const day = 'thursday';

switch(day) {
        case 'monday':// day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meet up');
            break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
        case 'wensday':
        case 'thursday':
        console.log('Write code examples');
            break;
        case 'friday':
        console.log('Record videos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend :D');
        default:
            console.log('Not a valid day!');
}

if (day === 'monday')
{
    console.log('Plan course structure');
    console.log('Go to coding meet up');
}
else if (day=== "tuesday") console.log('Prepare theory videos');
else if (day === 'wensday' || day === 'thursday') console.log('Write code examples');
else if (day === 'friday') console.log('Record videos');
else if (day === 'saturday' || day === 'sunday') console.log('Enjoy the weekend :D');
else console.log('Not a valid day!');

//Statements and Expressions

Statements and Expressions