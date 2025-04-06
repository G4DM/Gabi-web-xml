// Main JavaScript file for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Hide preloader after page load
        window.addEventListener('load', function() {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'navbar-scrolled', 'shadow-sm');
                navbar.classList.remove('navbar-dark');
                navbar.classList.add('navbar-light');
            } else {
                navbar.classList.remove('bg-white', 'navbar-scrolled', 'shadow-sm');
                navbar.classList.remove('navbar-light');
                navbar.classList.add('navbar-dark');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Card hover effects for course cards
    const courseCards = document.querySelectorAll('.course-card');
    if (courseCards.length > 0) {
        courseCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('shadow');
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('shadow');
                this.style.transform = 'translateY(0)';
                this.style.transition = 'all 0.3s ease';
            });
        });
    }

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('shadow');
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('shadow');
                this.style.transform = 'translateY(0)';
                this.style.transition = 'all 0.3s ease';
            });
        });
    }
});
