document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links (if using internal sections)
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const sectionID = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionID);
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Contact Form Validation (only if form exists)
    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        });
    }

    // Theme Toggle with Dynamic Button Text
    const themeToggle = document.querySelector("#theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            themeToggle.textContent = document.body.classList.contains("dark-mode") 
                ? "Switch to Light Mode" 
                : "Switch to Dark Mode";
        });
    }
});
