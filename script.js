//image
window.addEventListener('load', function() {
    const profileImage = document.querySelector('.profile-image-container');
    profileImage.style.opacity = '0';
    setTimeout(() => {
        profileImage.style.opacity = '1';
    }, 500);
});



// Typing effect for name and title
function typeText(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

typeText(document.getElementById('name'), 'Suhas S', 100);
setTimeout(() => {
    typeText(document.getElementById('title'), 'ML Enthusiast and Java Developer', 50);
}, 1000);

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (placeholder)

emailjs.init("GhSDXue-7OKh9As4H");

function showCustomAlert(message) {
    const alertElement = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeButton = document.getElementById('alert-close');

    alertMessage.textContent = message;
    alertElement.style.display = 'block';

    closeButton.onclick = function() {
        alertElement.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!submitButton) {
        console.error('Submit button not found');
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        emailjs.send('service_t1dkpak', 'template_847zzzy', {
            from_name: formData.name,
            to_name: 'Suhas', 
            from_email: formData.email,
            to_email: 'musicom464@gmail.com', 
            message: formData.message,
        })
        .then(function() {
            showCustomAlert('Thank you. I will get back to you as soon as possible.');
            contactForm.reset();
        })
        .catch(function(error) {
            console.error('Error:', error);
            showCustomAlert('Something went wrong. Please try again.');
        })
        .finally(function() {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        });
    });
});


//image pop up

function openModal(imgSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}


function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
