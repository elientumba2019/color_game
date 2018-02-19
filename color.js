
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");



colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked squares
        var clickedColor = this.style.background;
        //compare color to pickedColor

        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }

        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}


/**
 * changes all color to match the selected color
 * @param color
 */
function changeColors(color){
    //loop and change color
    for(var c = 0 ; c < colors.length ; c++){
        squares[c].style.backgroundColor = color;
    }
}


/**
 * picks a color
 */
function pickColor() {
   var random =  Math.floor((Math.random() * colors.length));
   return colors[random];
}


/**
 * generate random Array
 */
function generateRandomColors(num) {
    var array = [];

    for(var c = 0 ; c < num ; c++){
        array.push(randomColor());
    }
    return array;
}


/**
 * generate a single color
 */
function randomColor() {
     var red = Math.floor(Math.random() * 256);
     var green = Math.floor(Math.random() * 256);
     var blues = Math.floor(Math.random() * 256);

     return "rgb(" + red + ", " + green + ", " + blues + ")";
}


resetButton.addEventListener("click" , function () {

    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var c = 0 ; c < squares ;c++){
        squares[c].style.background = colors[c];
    }
});

