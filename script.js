// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typewriter effect
const roles = ["Web Developer", "Editor", "UI/UX Designer","Full Stack Developer", "Software Engineer","Gamer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
const textElement = document.getElementById("changing-text");

function typeRole() {
    const currentRole = roles[index];
    if (charIndex < currentRole.length) {
        textElement.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1000);
    }
}

function eraseRole() {
    const currentRole = roles[index];
    if (charIndex > 0) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

// Start the animation
typeRole();
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thanks! Your message has been sent.');
            form.reset();
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    });
});
  function animateProgressBars() {
            const skillItems = document.querySelectorAll('.skill-item');
            
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                    item.classList.add('slide-in');
                    
                    // Get the progress fill element and target percentage
                    const progressFill = item.querySelector('.progress-fill');
                    const targetPercentage = parseInt(item.dataset.percentage);
                    const percentageElement = item.querySelector('.skill-percentage');
                    
                    // Animate the width with delay
                    setTimeout(() => {
                        progressFill.style.width = targetPercentage + '%';
                    }, 800); // Increased delay for better effect
                    
                    // Add counting animation to percentage
                    setTimeout(() => {
                        animateCounter(percentageElement, targetPercentage);
                    }, 1000);
                    
                }, index * 200);
            });
        }

        // Enhanced counter animation
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 60; // More steps for smoother animation
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    // Add completion effect
                    element.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        element.style.transform = 'scale(1)';
                    }, 200);
                }
                element.textContent = Math.round(current) + '%';
            }, 40);
        }

        // Parallax scroll effect
        function handleParallaxScroll() {
            const scrolled = window.pageYOffset;
            const skillsSection = document.querySelector('.skills-section');
            const rect = skillsSection.getBoundingClientRect();
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxSpeed = scrolled * 0.1;
                skillsSection.style.backgroundPosition = `center ${parallaxSpeed}px`;
            }
        }

        // Enhanced intersection observer with staggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('skill-item') && !element.classList.contains('slide-in')) {
                        const skillItems = document.querySelectorAll('.skill-item');
                        const index = Array.from(skillItems).indexOf(element);
                        
                        setTimeout(() => {
                            element.classList.add('slide-in');
                            element.classList.add('animate');
                            
                            const progressFill = element.querySelector('.progress-fill');
                            const targetPercentage = parseInt(element.dataset.percentage);
                            const percentageElement = element.querySelector('.skill-percentage');
                            
                            setTimeout(() => {
                                progressFill.style.width = targetPercentage + '%';
                            }, 600);
                            
                            setTimeout(() => {
                                animateCounter(percentageElement, targetPercentage);
                            }, 800);
                            
                        }, index * 150);
                    }
                    
                    if (element.classList.contains('skills-header')) {
                        element.classList.add('header-animated');
                    }
                }
            });
        }, observerOptions);

        // Page load animations
        window.addEventListener('load', function() {
            // Animate floating background elements
            setTimeout(() => {
                document.querySelector('.skills-section').style.position = 'relative';
            }, 100);
            
            // Start main animations after initial load
            setTimeout(animateProgressBars, 1500);
        });

        // Scroll event listeners
        window.addEventListener('scroll', function() {
            handleParallaxScroll();
            
            // Add dynamic scroll effects
            const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
            const skillsSection = document.querySelector('.skills-section');
            
            if (skillsSection) {
                const opacity = Math.max(0.8, 1 - scrollPercent * 0.3);
                skillsSection.style.background = `linear-gradient(to left, 
                    rgba(89, 18, 231, ${opacity}), 
                    rgba(11, 11, 11, ${opacity}))`;
            }
        });

        // Resume button with enhanced interaction
        document.getElementById('resumeBtn').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Enhanced click animation
            this.style.transform = 'scale(0.95) rotateZ(-1deg)';
            this.style.boxShadow = '0 5px 15px rgba(89, 18, 231, 0.5)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1.05) rotateZ(1deg)';
            }, 100);
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 300);
            
            // Replace with your resume link
            alert('Please add your resume link to the href attribute of the resume button!');
        });

        // Observe all elements for scroll animations
        document.querySelectorAll('.skill-item, .skills-header, .resume-section').forEach(item => {
            observer.observe(item);
        });

        // Enhanced hover effects with 3D transforms
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) rotateX(5deg) rotateY(5deg)';
                this.style.boxShadow = '0 20px 40px rgba(89, 18, 231, 0.2)';
                
                const progressFill = this.querySelector('.progress-fill');
                progressFill.style.filter = 'brightness(1.3) saturate(1.2)';
                progressFill.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
                
                const progressFill = this.querySelector('.progress-fill');
                progressFill.style.filter = '';
                progressFill.style.boxShadow = '';
            });
            
            // Mouse move parallax effect
            item.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });

        // Keyboard shortcuts for animations
        document.addEventListener('keydown', function(e) {
            if (e.key === 'r' || e.key === 'R') {
                // Reset all animations
                document.querySelectorAll('.skill-item').forEach(item => {
                    item.classList.remove('animate', 'slide-in');
                    const progressFill = item.querySelector('.progress-fill');
                    const percentageElement = item.querySelector('.skill-percentage');
                    progressFill.style.width = '0%';
                    percentageElement.textContent = '0%';
                });
                
                setTimeout(animateProgressBars, 200);
            }
            
            if (e.key === 'p' || e.key === 'P') {
                // Pause/resume animations
                const skillItems = document.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    const style = window.getComputedStyle(item);
                    if (style.animationPlayState === 'paused') {
                        item.style.animationPlayState = 'running';
                    } else {
                        item.style.animationPlayState = 'paused';
                    }
                });
            }
        });