document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (useful for single-page links like #services)
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });
});
