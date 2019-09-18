var score = 0;

postToPage(score); // Print to the page

createButton('grow', btnPress);
changeTitle('Clicker Game');


function btnPress() {
  score++;
  postToPage(score);
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
  postToPage(score);
} 
