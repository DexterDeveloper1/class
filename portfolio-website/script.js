document.addEventListener('DOMContentLoaded', function() {
    // Typed.js Initialization
    if (document.querySelector('.typed-text')) {
        var typed = new Typed('.typed-text', {
            strings: ["Freelancer", "Web Developer", "UI/UX Designer"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }
});