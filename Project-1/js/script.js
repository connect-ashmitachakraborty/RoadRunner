var audio = document.createElement('audio');
audio.src = "img/sound.mp3";
audio.loop = true;

document.addEventListener("click", function(){
    audio.play();
});
