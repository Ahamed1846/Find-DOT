let playButton=document.getElementById('play-button');
let userName=document.getElementById('username');
let nickName=document.getElementById('nickname');

var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "./bg/bgm.mp3";
document.body.addEventListener("mousemove", function () {
    audio.play()
});

playButton.onclick=()=>{
    if(userName.value=='' && nickName.value==''){
        window.alert("Please fill the fields")
    }else if (userName.value==''){
        window.alert("Please fill the fields")
    }else if (nickName.value==''){
        window.alert("Please fill the fields")
    }else{
        sessionStorage.setItem ('username',userName.value)
        sessionStorage.setItem ('nickname',nickName.value)
        window.location='mode.html'
    }
};