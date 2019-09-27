let title = new Title('Welcome to the game')
let score = 0;
let button2 = new Button('OH HI MARK');
let button1 = new Button('HI JAMES');
let button4 = new Button('SALUTATIONS CODY');
let button3 = new Button('HI JAMES');
let button5 = new Button('Grow');
let scr = new Text(score);
button1.changeFont('Impact');       // The first button is changed to impact
button2.changeFont('Impact');
button4.changeFont('Impact');
button3.changeFont('Impact');

setInterval(scoreIncrease, 1000);


button1.hide()
button4.hide()
button3.hide()
button2.hide()
function scoreIncrease() { 
  score++;  
if(score > 10) {
  button1.show();
 }
 if(score > 20) {
  button2.show();
 }
 if(score > 30) {
  button3.show();
 }
 if(score > 40) {
  button4.show();
 }

}


function btnPress( c) {
  score++;
 (score);
}


createButton('decreace', btnPress2);




function btnPress() {
  score++;
  (score);
}

function btnPress2() {
  score--;
  (score);
} 
