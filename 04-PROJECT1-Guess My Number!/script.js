"use strict";
/* //PROJECT #1: Guess My Number!
console.log(document.querySelector(".message").textContent);

//Selecting and Manipulating Elements
document.querySelector(".message").textContent = "Correct Number!🎉";

document.querySelector(".number").textContent = "12";
document.querySelector(".score").textContent = 3;

document.querySelector(".guess").value = 23;
console.log((document.querySelector(".guess").value = 23));
*/

//Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there's no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!🛑";
    displayMessage("No number!🛑");
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!🎉";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      // guess > secretNumber ? "It's too high!📈" : "It's too low!📉";
      displayMessage(
        guess > secretNumber ? "It's too high!📈" : "It's too low!📉"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game!😿";
      displayMessage("You lost the game!😿");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "It's too high!📈";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!😿";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "It's too low!📉";
  //     score--;
  //
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!😿";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // });

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
