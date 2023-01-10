var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "./bg/bgm.mp3";
document.body.addEventListener("mousemove", function () {
  audio.play();
});

var timerbox =document.getElementById('timerbox')
var timer =document.getElementById('timer')

classic.onclick=()=>{
    sessionStorage.setItem('time',false)
    window.location='game.html'
}
  
timer.onclick=()=>{
    timeLimit=sessionStorage.setItem('time',true)
    window.location='game.html'
}