function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}
function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu button");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
