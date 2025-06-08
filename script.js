let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scroll;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.getElementById('contact-form');
    if(form){
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
});