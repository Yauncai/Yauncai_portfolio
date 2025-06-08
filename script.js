document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Nav link highlighting on scroll
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => link.classList.remove('active'));
                let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (activeLink) activeLink.classList.add('active');
            }
        });
    };

    // EmailJS initialization
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
                .then(function() {
                    form.reset();
                    document.getElementById('thankyou-popup').style.display = 'flex';
                }, function(error) {
                    alert('There was a problem sending your message. Please try again.');
                });
        });
    }

    // Popup close button
    const closeBtn = document.getElementById('close-popup');
    if (closeBtn) {
        closeBtn.onclick = function() {
            document.getElementById('thankyou-popup').style.display = 'none';
        };
    }
});