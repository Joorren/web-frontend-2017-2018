

var username = document.getElementById("username");
var password = document.getElementById("password");

function onForwardClick(e) {
    e.preventDefault();

    var forwardLink = e.currentTarget;
    forwardLink.classList.toggle("active");

    var forwardForm = document.querySelector(".forward-form");
    forwardForm.classList.toggle("active");
}

function onMenuToggle(e) {
    e.preventDefault();
    
    var menuLink = e.currentTarget.parentElement;
    menuLink.classList.toggle("active");
    
    var navMain = document.querySelector(".nav-main");
    navMain.classList.toggle("active");
}

function onLoginClick(e) {
    e.preventDefault();
    var loginBox = document.getElementById("loginBox");
    if(loginBox.style.display === "block") {
        loginBox.style.display = "none";
    }
    else {
        loginBox.style.display = "block";
    }
}

function onUsernameValChange() {

    var label = document.getElementById("usernameLabel");
    if(username.value) {
        label.style.top = "3vw";
        label.style.fontSize = "0.9rem";
        label.style.transition = "all 0.5s";
    }
    else {
        label.style.top = "4.2vw";
        label.style.fontSize = "1.3rem";
    }
}
function onPasswordValChange() {

    var label = document.getElementById("passwordLabel");
    if(password.value) {
        label.style.top = "3vw";
        label.style.fontSize = "0.9rem";
        label.style.transition = "all 0.5s";
    }
    else {
        label.style.top = "4.2vw";
        label.style.fontSize = "1.3rem";
    }
}

function bindEvents() {
    var forward = document.querySelector(".page-actions .forward");
    if (forward)
    {
        forward.addEventListener("click", onForwardClick);
    }
    
    var menu = document.querySelector(".menu a");
    menu.addEventListener("click", onMenuToggle);

    var login = document.querySelector(".nav-utility li");
    // login.addEventListener("click", onLoginClick);

    username.addEventListener("input", onUsernameValChange);
    password.addEventListener("input", onPasswordValChange);
}

bindEvents();