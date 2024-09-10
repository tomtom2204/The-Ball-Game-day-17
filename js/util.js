'use strict'
function getRandomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215);
    var hexColor = "#" + randomColor.toString(16).padStart(6, '0');
    return hexColor;
}