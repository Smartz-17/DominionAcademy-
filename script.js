/* =========================================================
   DOMINION ACADEMY — JAVASCRIPT
   ========================================================= */

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});


// Scroll reveal animation
const animatedElements = document.querySelectorAll(
    ".school-card, .value-card, .about-visual"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});
