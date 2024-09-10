'use strict'

function onBallClick(){
    var elBall = document.querySelector(".ball")
    var ballSize = elBall.clientWidth;
    if(ballSize < 400){
    elBall.style.width = (elBall.clientWidth + 50)+'px'
    elBall.style.height = (elBall.clientHeight + 50)+'px'
    }else{
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
    elBall.innerText = elBall.style.width
}