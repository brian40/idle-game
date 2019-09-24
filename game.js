let title = new Title('Welcome to the game')
let score = 0;
let button = new Button('OH HI MARK');
let scr = new Text(score);


button.hide()

setInterval(scoreIncrease, 1000);

function scoreIncrease() { 
  score++;  
if(score > 10) {
  button.show();
 }

}

createButton('grow', btnPress);
//changeTitle('Clicker Game');


function btnPress() {
  score++;
 (score);
}


createButton('decreace', btnPress2);
//changeTitle('Clicker Game');



function btnPress() {
  score++;
  (score);
}

function btnPress2() {
  score--;
  (score);
} 
