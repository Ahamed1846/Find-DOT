var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "./bg/bgm.mp3";
document.body.addEventListener("mousemove", function () {
  audio.play();
});

var score = document.getElementById("score");
var player = document.getElementById("player");
var classic =document.getElementById('classic');
var screen =document.getElementById('screen');
var canvas = document.getElementById("canvas");
var timer =document.getElementById('timerbox');
var timeLimit;
var time=5;
var timerId;

var dot;
var dots;
var dotId = 0;

var highscore=0;
highscore=sessionStorage.getItem('highscore');

var points = 0;

var positionX = [0];
var positionY = [0];

function startTimer() {
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    sessionStorage.setItem("score", points);
    if (time == 0) {
        window.location='gameover.html'
    }
    timer.innerHTML = time;
  }, 1000);
}
function resetTime() {
    time = 5;
  startTimer(timerId);
}

timeLimit=sessionStorage.getItem('time')
if (timeLimit=='true') {
  startTimer();
}

player.innerText += sessionStorage.getItem("nickname");

function randomDot(mini, maxi) {
  return Math.floor(Math.random() * (maxi - mini)) + mini;
}

const MinDistance = 15;

function generateRandomHeight(mini, maxi) {
  var pos;
  do {
    pos = Math.floor(Math.random() * (maxi - mini)) + mini;
  } while (
    positionX.some(function (prevPos) {
      return Math.abs(pos - prevPos) < MinDistance;
    })
  );
  positionX.push(pos);
  return pos;
}

function generateRandomWidth(mini, maxi) {
  var pos;
  do {
    pos = Math.floor(Math.random() * (maxi - mini)) + mini;
  } while (
    positionY.some(function (prevPos) {
      return Math.abs(pos - prevPos) < MinDistance;
    })
  );
  positionY.push(pos);
  return pos;
}

function transition(){
    for(var i=0;i<dots.length;i++){
        dots[i].style.display='none'
    }
    screen.style.display='block'
    points++
    score.innerText=`Score: ${points}`
    setTimeout(() => {
      if (timeLimit=='true') {
        resetTime();
      }
      makeDot() 
    }, 1500);
    setTimeout(()=>{
      screen.style.display='none'
      for(var i=0;i<dots.length;i++){
        dots[i].style.display='block'
      }
    },1500)
}

function makeDot(){
    var dotElement = document.createElement("img");
    dotElement.id = `dot${dotId}`;
    dotElement.className = "dot";
    dotElement.src = `./dots/color${randomDot(1, 17)}.png`;
    dotElement.style.position = "absolute";
    dotElement.style.left = `${generateRandomWidth(20, canvas.offsetWidth - 20)}px`;
    dotElement.style.top = `${generateRandomHeight(20, canvas.offsetHeight - 20)}px`;
    canvas.appendChild(dotElement);
    dot = document.getElementById(`dot${dotId}`);
    dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
      dots[i].onclick = (e) => {
        var a = e.target.id;
        if (a.substring(3) == `${dotId - 1}`) {
          clearInterval(timerId);
          transition();
        } else {
          if (points>highscore){
            highscore==points
            sessionStorage.setItem("highscore", points);
          }
          sessionStorage.setItem("score", points);
          window.location = "gameover.html";
        }
      };
    }
    dotId++;
}

makeDot()
