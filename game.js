var title = new Title('Welcome to the game')
var score = 0;
var button1 = new Button('OH HI MARK');
var button2 = new Button('GROW'); 
var button3 = new Button('DECREASE');
var scr = new Text(score);                    


changeFont('Impact');

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
//changes
   // Set up a loop

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
