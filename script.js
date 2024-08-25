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