var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);


/*Result*/

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS "
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS "
}

else{
    
    document.querySelector("h1").innerHTML="DRAW "
}