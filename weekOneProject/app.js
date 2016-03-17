//CF201
//labTwo-aboutMe

/*
the code below prompts the user to input a name, logs
the input to the console and then finds the p tag element
by the id i placed within the html to then add in a textContent
method by the one variable declared.
*/

/* function to return document method "getElementById" in DRY*/
function findId(id) {
  return document.getElementById(id);
}

var userName = prompt("Hello! What is your name?");
console.log("This user's name is " + userName);
//use findId function here
var one = document.getElementById("tagName");
findId("tagName");
one.textContent = "Hey there " + userName + "!";

alert("Hey there " + userName + " let's play a narcissistic game about ME! Go ahead and click OK there :)" );

/* the first question to the user with prompt to user, logs the user response to the console, and then provides a conditional response based on what the user responded with */
var userResponseOne = prompt("Was I born in Wisconsin?");
console.log("The user's respons is " + userResponseOne);
//use findId function here
var two = document.getElementById("tagResponse");
var two = findId("tagResponse", userResponseOne);

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

/* the second question to the user with prompt to user about which sport I have played. This also was amended to apply to the lab condition that accepts multiple possible correct answers that are stored in an array*/

var userResponseTwo = prompt("What sport did I play growing up?");
var sports = ["hockey", "soccer", "tennis", "lacross"];
var three = document.getElementById('tagSport')

for (i = 0; i < sports.length; i++) {
  //debugging purposes
  console.log(sports[i]);
  //check if answer user gives is anything in Sports array
  if (userResponseTwo === sports[i]) {
    console.log("user answered sports guessing game correcly!");
    three.textContent = "You got it right!";
    alert("Correct!");
    break;
  } else if (i === sports.length - 1) {
    console.log("user was wrong with sports guessing game");
    three.textContent = "Wrong, wrong, so wrong!";
    alert("WRONG!");
  }
}

// the third question which is yes or no about living in Chile.

var userResponseThree = prompt("Did I ever live in Chile?");
console.log("The user's response is " + userResponseThree);
//use findId function here
var four = document.getElementById("tagChile");

if (userResponseThree.toLowerCase() === "y" || userResponseThree.toLowerCase() === "yes") {
  alert("correct");
  console.log("The user answered correctly");
  four.textContent = "Nicely done!"
} else {
  alert("Come on! Go read my bio - it's really short I promise :)");
  console.log("the user answered incorrectly and doesn't pay attentin or thinks my life story is boring");
  four.textContent = "Oh my my, you have learned nothing about me!"
}

var userResponseFour = prompt("Do I play an instrument?");
console.log("The user said " + userResponseFour);
// use findId function here
var five = document.getElementById("tagMusic");

if (userResponseFour.toLowerCase() === "y" || userResponseFour.toLowerCase() === "yes" || userResponseFour.toLowerCase() == "ya") {
  alert("yes! you are correct :)");
  console.log("The user answered incorrectly");
  five.textContent = "You know so much about me already. Kinda creepo!"
} else {
  alert("I do play an instrument! Two in fact ");
  console.log("the user answered incorrectly");
  five.textContent = "You are a lost cause my friend.";
}

//5th question --> with numeric input and has too high too low with 4 opportunities to answered


var six = document.getElementById("tagNumberGame");
var age = 28;

var counter = 0;
while (counter < 5) {
  //ask q
  var userGuess = parseInt(prompt("How old am I? take a guess :)"));
  //interpret response
  if (userGuess === 28) {
    //if they get it right
    six.textContent = "CORRECT!";
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
    six.textContent = "Enter a number of god's sake!!";
    counter++;
  }
}



var theEnd = alert("thanks for playing!");
