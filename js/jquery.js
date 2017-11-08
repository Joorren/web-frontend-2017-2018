$(document).ready(function(){

    $loginBox = $("#loginBox");
    $searchBox = $(".searchBox");
    $searchBox.hide();

    $("#login").click(function(){  //Selects "Inloggen"
        $loginBox.slideToggle(); //Slides loginBox in or out
    });

    $(".search").click(function(){  //Selects "Zoeken"
            $searchBox.animate({width:'toggle'},750); //Slides loginBox in or out
    });
});