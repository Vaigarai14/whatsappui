const status_Ori = document.getElementById("status_bar")
const status_bar = document.getElementById("status_check").innerText
const test = document.getElementById('test')
const nav_line = document.getElementById('nav_line')
const status_default = document.getElementById('status_default');
const defaults = document.getElementById("Default")

function statuschange() {
    if (status_bar === "STATUS") {
        nav_line.style.marginLeft = "12em"
        status_Ori.style.display = "none"
        status_default.style.display = "block"
        test.style.visibility = "visible"
        defaults.style.display = "none"
    }
}

function secoundfuc() {
    nav_line.style.marginLeft = "4em"
    status_Ori.style.display = "block"
    test.style.visibility = "hidden"
}

var ham_nav = document.getElementById('ham_nav');
const ham_icons = document.getElementById('ham_icons');
var ul = document.getElementsByTagName('ul');
var li = document.querySelectorAll('li')


function navbar() {
    ham_nav.classList.toggle('hidden')
}

window.onclick = function (event) {
    if (!event.target.matches('.btn')) {
        for (var i = 0; i < ul.length; i++) {
            var openDropdown = ul[i];
            if (openDropdown.classList.contains('hidden')) {
                openDropdown.classList.remove('hidden');
            }
        }
    }
}