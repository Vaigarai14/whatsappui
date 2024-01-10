const chat_bar = document.getElementById("status_bar");
const nav_line = document.getElementById('nav_line');
const status_default = document.getElementById('status_default');
const defaults = document.getElementById("Default");


const call_nav_default = document.getElementById('call_nav_default');
const default_call = document.getElementById('default_call');

// ! When i click this function it will 
//! disable the display in another two function

function statuschange() {
    nav_line.style.marginLeft = "12em"
    chat_bar.style.display = "none"
    call_nav_default.style.display = "none"
    //^ status
    status_default.style.display = "block"
    defaults.style.display = "none"
}

function chatfunc() {
    nav_line.style.marginLeft = "4em"
    chat_bar.style.display = "block"
    call_nav_default.style.display = "none"
    status_default.style.display = "none"
}

function callfunc() {
    nav_line.style.width = "6.5em"
    nav_line.style.marginLeft = "18em"
    chat_bar.style.display = "none";
    status_default.style.display = "none"

    call_nav_default.style.display = "block"
    default_call.style.display = "none"
}


var ham_nav = document.getElementById('ham_nav');
const ham_icons = document.getElementById('ham_icons');
var ul = document.getElementsByTagName('ul');
var li = document.querySelectorAll('li')


function navbar() {
    ham_nav.classList.toggle('hidden')
}

