/* Hamburger Menu */

function toggle () {
    let menu = document.getElementById("nav-ul");
        if (menu.style.display === "block") {
            menu.style.display = "none";     
        }
        else {
           menu.style.display = "block";
        }
}

document.getElementById("hamburger").addEventListener("click", "toggle");





