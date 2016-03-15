// 201
//labOne
// 3-15-2016

var userName = prompt("What is your name?");
console.log("Well hello there " + userName);
var one = document.getElementById('tagName');
one.textContent = "Well hello there " + userName;

var userColor = prompt("So " + userName + " what is your favorite color?");
console.log(userColor + " is such a pretty color " + userName);
var two = document.getElementById('tagColor');
two.textContent = userColor + " is such a pretty color " + userName;


var userToday = prompt("If you, " + userName + " were a color today, what color would you be?");
console.log("Wow! What an interesting response " + userName + " I would have never thought of " + userToday);
var three = document.getElementById('tagToday');
three.textContent = "Wow! What an interesting response " + userName + " I would have never thought of " + userToday;

var userAnimal = prompt("And " + userName + " what is your spirit animal?");
console.log(userAnimal + " is a crazy spirit animal. You must be insane!");
var four = document.getElementById('tagAnimal');
four.textContent = userAnimal + " is a crazy spirit animal. You must be insane!";

var userDrink = prompt("So, " + userName + " if you were a drink, what drink would you be?");
console.log("Gross! " + userDrink + " is disgusting!");
var five = document.getElementById('tagDrink');
five.textContent = "Gross! " + userDrink + " is disgusting!";

var userSign = prompt("Finally, " + userName + " what's your sign?");
console.log("A " + userSign + " ! " + userName + " that is amazing, I have been looking for a " + userSign + " in my life :)");
var six = document.getElementById('tagSign');
six.textContent = "A " + userSign + " ! " + userName + " that is amazing, I have been looking for a " + userSign + " in my life :)";

var final = confirm("Well " + userName + " the " + userSign + " , your daily color is " + userToday + " while your favorite color is " + userColor + " and your spirit animal is " + userAnimal + ", your spirit drink is, " + userDrink + "! Very nice.");
alert("Ya done good " + userName + " ya done good.");
var seven = document.getElementById('tagFinal');
seven.textContent = "Well " + userName + " the " + userSign + " , your daily color is " + userToday + " while your favorite color is " + userColor + " and your spirit animal is " + userAnimal + ", your spirit drink is, " + userDrink + "! Very nice.";
