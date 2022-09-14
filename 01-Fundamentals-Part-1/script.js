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
let age = 30;
age = 32; //nadpisanie zmiennej inną wartością
console.log(age);

const birthYear = 2002; // zmienna, której nie da się zmienić
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

const myFirstName = "Karolina";
const myLastName = "Dbaj";
console.log(myFirstName + " " + myLastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x= x * 4 = 100
x++; // x = x + 1
console.log(x);

// Comparison operators
console.log(ageJohn < ageSara); // dzięki temu, możemy sprawdzić, czy konkretny warunek jest prawdą
const isFullAge = ageSara >= 18;

