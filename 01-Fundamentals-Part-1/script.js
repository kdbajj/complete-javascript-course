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
const age = 19;
const isOldEnough =  age >= 18;

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



