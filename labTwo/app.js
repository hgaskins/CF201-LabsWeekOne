//CF201
//labTwo-aboutMe

/*
the code below prompts the user to input a name, logs
the input to the console and then finds the p tag element
by the id i placed within the html to then add in a textContent
method by the one variable declared.
*/

var userName = prompt("Hello! What is your name?");
console.log("This user's name is " + userName);
var one = document.getElementById("tagName");
one.textContent = "Hey there " + userName + "!";

alert("Hey there " + userName + " let's play a narcissistic game about ME! Go ahead and click OK there :)" );

/* the first question to the user with prompt to user, logs the user response to the console, and then provides a conditional response based on what the user responded with */
var userResponseOne = prompt("Was I born in Wisconsin?");
console.log("The user's respons is " + userResponseOne);
var two = document.getElementById("tagResponse");

if(userResponseOne.toLowerCase() === "n" || userResponseOne.toLowerCase() === "no") {
  alert("Correct! Minnesota is where I was born :)");
  console.log("the user said No, which is correct");
  two.textContent ="So right you are!";
} else if (userResponseOne.toLowerCase() === "y" || userResponseOne.toLowerCase() === "yes") {
  alert("Oh hell no!");
  console.log("the user said yes, which is incorrect. I was not born in Wisconsin");
  two.textContent = "Oh ya think so?"
} else {
  alert("say Yes or No - nothing else will do!");
  console.log("the user input was neither yes or no");
}

/* the second question to the user with prompt to user, logs the user response to the console, and then provides a conditional response based on what the user responded with */

var userResponseTwo = prompt("What sport did I play growing up?");
console.log("The user's response is " + userResponseTwo);
var three = document.getElementById('tagSport');

if (userResponseTwo.toLowerCase() === "hockey" || userResponseTwo.toLowerCase() === "soccer" || userResponseTwo.toLowerCase() === "tennis") {
  alert("correct!");
  console.log("the user said " + userResponseTwo + " which is correct!");
  three.textContent = "You pay attention! ";
} else {
  alert("Nah I never played that!");
  console.log("the user's response was " + userResponseTwo + " which is incorrect");
  three.textContent = "That is a fun sport, but nope I didn't play it!";
}
