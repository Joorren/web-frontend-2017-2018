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
    if(loginBox.style.display === "block") { loginBox.style.display = "none"; }
    else { loginBox.style.display = "block"; }
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
    console.log(login);
    login.addEventListener("click", onLoginClick);
}

bindEvents();