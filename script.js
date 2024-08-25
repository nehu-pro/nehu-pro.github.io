$(document).ready(function () {
    $(".button").click(function (e) { 
        $(".background").fadeOut();
        $(".back2").fadeIn();
    });

     $(".back-icon").click(function (e) { 
         $(".back2").fadeOut();
         $(".background").fadeIn();
     });
});

var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
     button.innerHTML = "<i class='fa-solid fa-circle-stop'></i>";
  } else {
    audio.pause();
     button.innerHTML = "<i class='fa-solid fa-circle-play'></i>";
  }
});