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


//function with for loop inside?
