//CF201
//labTwo-aboutMe

/*
the code below prompts the user to input a name, logs
the input to the console and then finds the p tag element
by the id i placed within the html to then add in a textContent
method by the one variable declared.
*/

// score counter for printing how many answers the user got correct at end of page
var score = 0;

/* function created with pair programming */

var htmlId          = ['questionOne', 'questionTwo', 'questionThree'];
var htmlResponseId  = ['responseOne', 'responseTwo', 'responseThree'];
var question        = ['what is your name?', 'where did you grow up?', 'are you ready to know this shit?'];
var response        = [' , welcome!', ' sounds cool.', '? Me too!'];

function ask(htmlId, htmlResponseId, questionText, responseText) {
  var askQ = prompt(questionText);
  console.log("answer is " + askQ);
  var questionTag = document.getElementById(htmlId);
  var responseTag = document.getElementById(htmlResponseId);
  questionTag.textContent = questionText;
  responseTag.textContent = askQ + responseText;
}

for (i = 0; i < 3; i++) {
  ask(htmlId[i], htmlResponseId[i], question[i], response[i]);
}


/* the first question to the user with prompt to user, logs the user response to the console, and then provides a conditional response based on what the user responded with */
var userResponseOne = prompt("Was I born in Wisconsin?");
console.log("The user's respons is " + userResponseOne);
//use findId function here
var two = document.getElementById("tagResponse");


if(userResponseOne.toLowerCase() === "n" || userResponseOne.toLowerCase() === "no") {
  alert("Correct! Minnesota is where I was born :)");
  console.log("the user said No, which is correct");
  two.textContent ="So right you are! I was born in Minnesota, but went to school in Wisconsin";
  score++;
} else if (userResponseOne.toLowerCase() === "y" || userResponseOne.toLowerCase() === "yes") {
  alert("Oh hell no! I was born in Minnesota, but went to school in Wisconsin");
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
    score++;
    console.log("user answered sports guessing game correcly!");
    three.textContent = "You got it right! I did play " + userResponseTwo + " growing up";
    alert("Correct!");
    break;
  } else if (i === sports.length - 1) {
    console.log("user was wrong with sports guessing game");
    three.textContent = "Wrong, wrong, so wrong! I never played " + userResponseTwo;
    alert("WRONG!");
  }
}

// the third question which is yes or no about living in Chile.

var userResponseThree = prompt("Did I ever live in Chile?");
console.log("The user's response is " + userResponseThree);
//use findId function here
var four = document.getElementById("tagChile");

if (userResponseThree.toLowerCase() === "y" || userResponseThree.toLowerCase() === "yes") {
  score++;
  alert("correct");
  console.log("The user answered correctly");
  four.textContent = "Nicely done! I did live in Chile. Thanks for reading :)"
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
  score++;
  alert("yes! you are correct I play piano and guitar :)");
  console.log("The user answered correctly");
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

var seven = document.getElementById('tagScore');
seven.textContent = "Thanks for playing! You got " + score + " out of 5 questions"


var theEnd = alert("thanks for playing!");
