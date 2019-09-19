let score = 0;
let button = new Button('Boo!');
postToPage(score); // Print to the page
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
  postToPage(score);
}
postToPage(score); // Print to the page

createButton('decreace', btnPress2);
//changeTitle('Clicker Game');



function btnPress() {
  score++;
  postToPage(score);
}

function btnPress2() {
  score--;
  postToPage(score);
} 
