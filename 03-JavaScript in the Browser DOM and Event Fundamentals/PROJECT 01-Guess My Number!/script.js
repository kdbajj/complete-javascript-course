"use strict";
//PROJECT #1: Guess My Number!
console.log(document.querySelector(".message").textContent);

//Selecting and Manipulating Elements
document.querySelector(".message").textContent = "Correct Number!🎉";

document.querySelector(".number").textContent = "12";
document.querySelector(".score").textContent = 3;

document.querySelector(".guess").value = 23;
console.log((document.querySelector(".guess").value = 23));
