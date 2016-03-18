// get rid of this when we merge project back into app.js
var score = 0;

var six = document.getElementById("tagNumberGame");
var age = 28;

var counter = 0;
function guessy() {
  while (counter < 5) {
    //ask q
    var userGuess = parseInt(prompt("How old am I? take a guess :)"));
    //interpret response
    if (userGuess === age) {
      //if they get it right
      score++;
      six.textContent = "CORRECT! I am 28!";
      console.log("the user got my age correct!");
      counter = 5;
      break;
    } else if (userGuess > 28) {
      //if too high
      six.textContent = "Come on. Too high!";
      console.log("the user guess is too high");
      counter++;
    } else if (userGuess < 28) {
      //if too low
      six.textContent = "Too Low!";
      console.log("the user guess is too low");
      counter++;
    } else {
      //if NaN etc
      six.textContent = "Enter a number!";
      counter++;
    }
  }
}
guessy();
