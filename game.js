var title = new Title('Welcome to the game')
let score = 0;
let button1 = new Button('OH HI MARK');
let button2 = new Button('GROW'); 
let button3 = new Button('DECREASE');

let scr = new Text(score);
changeFont('Impact');

button.hide()

setInterval(scoreIncrease, 10)

function scoreIncrease() { 
  score++;  
if(score > 10) {
  button.show();
 }

}
var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
//hidden.hide();
var scr = new Text(score);                    // Create a text element
//changes
setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;
 (score);
}

function btnPress() {
  score++;
  (score);
  scr.edit(score);
}

function btnPress2() {
  score--;
  (score);
} 
