// var userResponseTwo = prompt("What sport did I play growing up?");
// console.log("The user's response is " + userResponseTwo);
// //use findId function here
// var three = document.getElementById('tagSport');
//
// if (userResponseTwo.toLowerCase() === "hockey" || userResponseTwo.toLowerCase() === "soccer" || userResponseTwo.toLowerCase() === "tennis") {
//   alert("correct!");
//   console.log("the user said " + userResponseTwo + " which is correct!");
//   three.textContent = "You pay attention! ";
// } else {
//   alert("Nah I never played that!");
//   console.log("the user's response was " + userResponseTwo + " which is incorrect");
//   three.textContent = "That is a fun sport, but nope I didn't play it!";
// }

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
