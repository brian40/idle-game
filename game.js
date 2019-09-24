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
