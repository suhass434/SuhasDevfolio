import portfolioData from './data.js';

// Initialize basic information
function initializeBasicInfo() {
    document.getElementById('profile-image').src = portfolioData.basic.profileImage;
    document.getElementById('profile-image').alt = portfolioData.basic.name;
    document.getElementById('name').textContent = portfolioData.basic.name;
    document.getElementById('title').textContent = portfolioData.basic.title;
    document.getElementById('resume-link').href = portfolioData.basic.resumeLink;
}

// Typing effect for name and title
function typeText(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize sections
function initializeSections() {
    // About section
    document.getElementById('about-content').textContent = portfolioData.about.description;

    // Experience section
    const experienceList = document.getElementById('experience-list');
    portfolioData.experience.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <h3>${exp.title}, ${exp.company}</h3>
            <span class="period">${exp.period}</span>
        </div>
        <ul>
            ${exp.points.map(point => `<li><p>${point}</p></li>`).join('')}
        </ul>
    `;
        experienceList.appendChild(li);
    });

    // Responsibilities section
    const responsibilitiesList = document.getElementById('responsibilities-list');
    portfolioData.responsibilities.forEach(resp => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <h3>${resp.title}, ${resp.organization}</h3>
            <span class="period">${resp.period}</span>
        </div>
        <ul>
            ${resp.points.map(point => `<li><p>${point}</p></li>`).join('')}
        </ul>
    `;
        responsibilitiesList.appendChild(li);
    });

    // Projects section
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.innerHTML = `
            <img src="${project.image}" alt="${project.name} Project" onclick="openModal(this.src)">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p class="tech-used"><strong>Tech:</strong> ${project.techStack}</p>
            <a href="${project.githubLink}" target="_blank">GitHub</a>
        `;
        projectsGrid.appendChild(div);
    });

    // Skills section
    const skillsContainer = document.getElementById('skills-container');
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const div = document.createElement('div');
        div.className = 'skills-category';
        div.innerHTML = `
            <h3>${category}</h3>
            <div class="skills-list">
                ${skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(div);
    });

    // Education section
    const educationList = document.getElementById('education-list');
    portfolioData.education.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <h3>${edu.institution}</h3>
            <span class="period">${edu.period}</span>
        </div>
        <ul>
            ${edu.details.map(detail => `<li><p>${detail}</p></li>`).join('')}
        </ul>
    `;
        educationList.appendChild(li);
    });

    // Achievements section
    const achievementsList = document.getElementById('achievements-list');
    portfolioData.achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = achievement;
        achievementsList.appendChild(li);
    });

    // Hobby section
    document.getElementById('hobby-description').textContent = portfolioData.hobby.description;
    document.getElementById('youtube-link').href = portfolioData.hobby.youtubeLink;

    // Social links section - Updated with proper icons and labels
    const socialLinks = document.getElementById('social-links');
    const socialIcons = {
        linkedin: '<i class="fab fa-linkedin"></i> LinkedIn',
        github: '<i class="fab fa-github"></i> GitHub',
        instagram: '<i class="fab fa-instagram"></i> Instagram',
        leetcode: '<i class="fas fa-code"></i> LeetCode',
        kaggle: '<i class="fas fa-database"></i> Kaggle'
    };

    Object.entries(portfolioData.social).forEach(([platform, url]) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.className = `social-link ${platform}`;
        a.innerHTML = socialIcons[platform] || platform;
        socialLinks.appendChild(a);
    });
}

// Modal functionality
window.openModal = function(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

window.closeModal = function() {
    document.getElementById('imageModal').style.display = "none";
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const alertClose = document.getElementById('alert-close');

    emailjs.init(portfolioData.contact.emailjs.publicKey);

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value,
            to_email: portfolioData.contact.emailjs.toEmail
        };

        emailjs.send(
            portfolioData.contact.emailjs.serviceId,
            portfolioData.contact.emailjs.templateId,
            formData
        ).then(
            function(response) {
                showAlert('Message sent successfully!');
                contactForm.reset();
            },
            function(error) {
                showAlert('Failed to send message. Please try again.');
            }
        );
    });

    alertClose.addEventListener('click', function() {
        alertBox.style.display = 'none';
    });
}

function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeBasicInfo();
    typeText(document.getElementById('name'), portfolioData.basic.name, 100);
    initializeSections();
    initializeContactForm();
});