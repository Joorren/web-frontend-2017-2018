$(document).ready(function(){

    $loginBox = $("#loginBox");
    $searchBox = $(".searchBox");
    $searchBox.hide();
    $username = $('#username');
    $userLabel = $("#usernameLabel");

    $("#login").click(function(){  //Selects "Inloggen"
        $loginBox.slideToggle(); //Slides loginBox in or out
    });

    $(".search").click(function(){  //Selects "Zoeken"
            $searchBox.animate({width:'toggle'},750); //Slides loginBox in or out
    });


    // $username.change(
    //     function () {
    //         if($username.val()) {
    //             $userLabel.animate({width: 20}, 500);
    //         }
    //     }
    // );
});