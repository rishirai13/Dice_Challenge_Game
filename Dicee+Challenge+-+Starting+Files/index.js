// 🎲 Generate random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 to 6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
var randomImageSource1 = "images/" + randomDiceImage1;
document.querySelector(".img1").setAttribute("src", randomImageSource1);

// 🎲 Generate random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// 🏆 Change the title depending on who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "🎲 It's a Draw!";
}
