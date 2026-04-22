const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const revealItems = document.querySelectorAll(".reveal");

if (header) {
    const syncHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 16);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

$(document).ready(function() {
    // Check if the user has already made a choice
    const cookieChoice = localStorage.getItem("royal_thali_cookies");

    // If no choice is found, show the banner with a slight delay
    if (!cookieChoice) {
        setTimeout(function() {
            $("#cookie-banner").fadeIn(500);
        }, 1500);
    }

    // Handle Accept Button
    $("#accept-cookies").on("click", function() {
        localStorage.setItem("royal_thali_cookies", "accepted");
        hideBanner();
    });

    // Handle Reject Button
    $("#reject-cookies").on("click", function() {
        localStorage.setItem("royal_thali_cookies", "rejected");
        hideBanner();
    });

    function hideBanner() {
        $("#cookie-banner").fadeOut(400);
    }
});