'use strict'

function onBallClick() {
    var elBall = document.querySelector(".ball")
    var ballSize = elBall.clientWidth;
    if (ballSize < 400) {
        var newSize = getRandomInt(20, 60)
        elBall.style.width = (elBall.clientWidth + newSize) + 'px'
        elBall.style.height = (elBall.clientHeight + newSize) + 'px'
    } else {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
    elBall.innerText = elBall.style.width
    elBall.style.backgroundColor = getRandomColor()
}



function onBall2Click(maxDiameter){
    var elBall = document.querySelector(".ball2")
    var ballSize = elBall.clientWidth;
    if(ballSize < maxDiameter){
    elBall.style.width = (elBall.clientWidth + 50)+'px'
    elBall.style.height = (elBall.clientHeight + 50)+'px'
    }else{
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
    elBall.innerText = elBall.style.width
    elBall.style.backgroundColor = getRandomColor()
}