var nav = document.querySelector(".nav");
var sidenav = document.querySelector(".nav-respon");
var icon = document.querySelector("#icona");

function navopen() {
    if (sidenav.style.display === "block") {
        sidenav.style.display = "none";
        icon.classList.remove("ri-close-fill");
        icon.classList.add("ri-menu-line");
        nav.style.borderBottom = "2px solid black";
    } else {
        sidenav.style.display = "block";
        icon.classList.remove("ri-menu-line");
        icon.classList.add("ri-close-fill");
        nav.style.borderBottom = "0";
    }
}
