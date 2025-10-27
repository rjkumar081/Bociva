// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the hamburger menu button and the navigation links
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    // Add a click event listener to the hamburger button
    hamburger.addEventListener("click", function() {
        // Toggle the "active" class on the nav-links list
        // This will make it show or hide (based on the CSS)
        navLinks.classList.toggle("active");
    });

});
