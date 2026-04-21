document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 500) {
                    navMenu.classList.remove('open');
                }
            });
        });
    }

    window.addEventListener('scroll', function () {
        document.querySelector('header')?.classList.toggle('shrink', window.scrollY > 40);
    });

    // Newsletter subscription handler
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('newsletter-email');
            const message = document.getElementById('newsletter-message');
            
            if (emailInput && emailInput.value.trim()) {
                // Simulate subscription
                message.textContent = '✅ Thanks for subscribing! Check your email for exclusive recipes.';
                message.classList.add('success');
                message.style.display = 'block';
                
                emailInput.value = '';
                
                setTimeout(() => {
                    message.style.display = 'none';
                    message.classList.remove('success');
                }, 4000);
            }
        });
    }
});

function acceptCookies() {
    const cookieBox = document.getElementById('cookie-box');
    if (cookieBox) cookieBox.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

window.onload = function () {
    if (localStorage.getItem('cookiesAccepted')) {
        const cookieBox = document.getElementById('cookie-box');
        if (cookieBox) cookieBox.style.display = 'none';
    }
};