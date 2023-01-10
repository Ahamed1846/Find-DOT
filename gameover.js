let retry=document.getElementById('retry');
let mainmenu=document.getElementById('mainmenu');
var score=document.getElementById('score');
var highscore=document.getElementById('highscore');

var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "./bg/bgm.mp3";
document.body.addEventListener("mousemove", function () {
    audio.play()
});
mainmenu.onclick=()=>{
    window.location='mode.html'
};
retry.onclick=()=>{
    window.location='game.html'
};
highscore.innerText+=sessionStorage.getItem('highscore');
score.innerText+=sessionStorage.getItem('score');