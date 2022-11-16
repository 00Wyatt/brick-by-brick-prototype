function openNav() {
    'use strict';
    document.getElementById("sidenav").style.width = "180px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    'use strict';
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

function init() {
    'use strict';
    document.getElementById('hamburger').onclick = openNav;
    document.getElementById('closeButton').onclick = closeNav;
    document.getElementById('overlay').onclick = closeNav;
}

window.onload = init;