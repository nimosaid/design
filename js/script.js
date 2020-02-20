// DEFINE VARIABLES
stylesheet = document.getElementById("stylesheet");
lightbutton = document.getElementById("lightbutton");
darkbutton = document.getElementById("darkbutton");
theme = localStorage.getItem("theme");

// DARK/LIGHT TOGGLE FUNCTIONS
function darkmode() {
    stylesheet.href = "assets/style-dark.css";
    localStorage.setItem("theme", "assets/style-dark.css");
}
function lightmode() {
    stylesheet.href = "assets/style.css";
    localStorage.setItem("theme", "assets/style.css");
}
// CHECK IF "theme" IS ALREADY DEFINED
if (localStorage.getItem("theme") === null) {
    stylesheet.href = "assets/style.css";
    localStorage.setItem("theme", "assets/style.css");
}
// CALL LOCAL STORAGE AND ASSIGN IT TO THEME (if it is defined)
else {
    stylesheet.href = theme;
}
/* Code created by JACOB ALFAHAD (https://codepen.io/hircinus/post/dark-light-theme-switch) */