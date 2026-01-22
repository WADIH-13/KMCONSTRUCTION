// ===================================
// KM CONSTRUCTIONS - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderScroll();
    initContactForm();
    initActiveNavLinks();
});

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .contact-item, .about-text');
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// Header Scroll Effect
// ===================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// Active Navigation Links
// ===================================
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let current = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set active link on page load
}

// ===================================
// Contact Form Handling
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!name || !email || !phone || !message) {
                showFormMessage('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                showFormMessage('Veuillez entrer une adresse email valide.', 'error');
                return;
            }

            // Create mailto link (since we don't have a backend)
            const mailtoLink = `mailto:frejus83var@hotmail.com?subject=${encodeURIComponent('Contact KM CONSTRUCTIONS - ' + (subject || 'Demande de renseignements'))}&body=${encodeURIComponent(
                `Nom: ${name}\n` +
                `Email: ${email}\n` +
                `Téléphone: ${phone}\n` +
                `Sujet: ${subject || 'Non spécifié'}\n\n` +
                `Message:\n${message}`
            )}`;

            // Show success message
            showFormMessage('Merci pour votre message ! Votre client mail va s\'ouvrir pour envoyer votre demande.', 'success');

            // Open mailto link
            window.location.href = mailtoLink;

            // Reset form after a delay
            setTimeout(() => {
                form.reset();
            }, 2000);
        });
    }
}

// ===================================
// Helper Functions
// ===================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;

    // Add styles
    messageElement.style.padding = '1rem';
    messageElement.style.marginTop = '1rem';
    messageElement.style.borderRadius = '4px';
    messageElement.style.fontSize = '0.95rem';
    messageElement.style.fontWeight = '500';

    if (type === 'success') {
        messageElement.style.backgroundColor = '#d4edda';
        messageElement.style.color = '#155724';
        messageElement.style.border = '1px solid #c3e6cb';
    } else {
        messageElement.style.backgroundColor = '#f8d7da';
        messageElement.style.color = '#721c24';
        messageElement.style.border = '1px solid #f5c6cb';
    }

    // Insert message before submit button
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    form.insertBefore(messageElement, submitButton);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// ===================================
// Log initialization
// ===================================
console.log('KM CONSTRUCTIONS - Website initialized');
