var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

createButton('grow', btnPress);
changeTitle('Clicker Game');


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
postToPage(score); // Print to the page

createButton('decreace', btnPress2);
changeTitle('Clicker Game');



function btnPress() {
  score++;
  postToPage(score);
}

function btnPress2() {
  score--;
  postToPage(score);s
} 
