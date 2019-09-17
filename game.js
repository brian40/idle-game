var score = 0;

postToPage(score); // Print to the page

createButton('grow', btnPress);
changeTitle('Clicker Game');

setInterval(btnPress, 2000);

function btnPress() {
  score++;
  postToPage(score);
}
postToPage(score); // Print to the page

createButton('decreace', btnPress);
changeTitle('Clicker Game');

setInterval(btnPress, -1000);

function btnPress() {
  score--;
  postToPage(score);
}


