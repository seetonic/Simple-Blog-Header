const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const clsBtn = document.querySelector('.cls-btn');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');

mobileMenuIcon.addEventListener("click", function() {
    mobileMenu.style.display = "block";
})

clsBtn.addEventListener("click", function() {
    mobileMenu.style.display = "none";
})

dark.addEventListener("click", function() {
    this.style.display = "none";
    light.style.display = "block";
    body.style.backgroundColor = "#212121";
    nav.style.backgroundColor = "#212121";
    nav.style.color = "#fff";
})

light.addEventListener("click", function() {
    this.style.display = "none";
    dark.style.display = "block";
    body.style.backgroundColor = "#fff";
    nav.style.backgroundColor = "#fff";
    nav.style.color = "#000";
})