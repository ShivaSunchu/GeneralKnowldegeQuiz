var readlineSync = require ('readline-sync');
var score = 0;
var userName = readlineSync.question("Please enter your name!")
console.log("Welcome! " + userName);
var userConfirmation = readlineSync.question("Please enter Yes to Continue");
console.log( "You've entered the GK Quiz made by Shiva ")
function quiz(question,answer){
  var userQuestion = readlineSync.question(question);
  if (userQuestion === answer){
    console.log("You are Right! " + userName);
    score = score + 1;
    console.log("Your score is: " + score);
  } else {
    console.log("You are Wrong! ")
    score = score - 1;
    console.log("Your score is: " + score);;
  }
  console.log("---------------------------------");
}
quiz("Q.1 What is the Capital of India?","delhi");
quiz("Q.2 What is the Addition of 20 & 5?","25");
quiz("Q.3 What is the name of the QuizMaster?", "shiva");
quiz("Q.4 What is the full form of SBI","state bank of india");
quiz("Q.5 When did India got it's Independence?","15 august 1947");
quiz("Q.6 What is the biggest statue in the world called?", "statue of unity");
quiz("Q.7 What is the national animal of India?", "tiger");
console.log("-----------------------------");
console.log(userName + ", your final score is: " + score + ". Thank you for participating!")