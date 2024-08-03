/*========== menu icon navbar ==========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


// emailjs

emailjs.init("GhSDXue-7OKh9As4H");

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('input[type="submit"]');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Change button text and disable it
        submitButton.value = 'Sending...';
        submitButton.disabled = true;

        // Prepare the form data
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        // Send the email using EmailJS
        emailjs.send('service_t1dkpak', 'template_847zzzy', {
            from_name: formData.name,
            to_name: 'Suhas', 
            from_email: formData.email,
            to_email: 'musicom464@gmail.com', 
            message: formData.message,
        })
        .then(function() {
            alert('Thank you. I will get back to you as soon as possible.');
            contactForm.reset();
        })
        .catch(function(error) {
            console.log('Error:', error);
            alert('Something went wrong. Please try again.');
        })
        .finally(function() {
            // Reset button text and enable it
            submitButton.value = 'Send Message';
            submitButton.disabled = false;
        });
    });
});