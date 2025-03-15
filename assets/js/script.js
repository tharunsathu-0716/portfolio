document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionID = this.getAttribute("href").substring(1);
            document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Simple Form Validation
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }
        alert("Thank you, " + name + "! Your message has been sent.");
        form.reset();
    });

    // Toggle Theme
    const themeToggle = document.querySelector("#theme-toggle");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
