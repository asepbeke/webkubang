// Liquid Navbar Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Glass Mobile Menu Interact
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

const toggleMenu = (open) => {
    if (open) {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.pointerEvents = 'all';
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Ensure proper initial state for mobile menu
mobileMenu.style.position = 'fixed';
mobileMenu.style.inset = '0';
mobileMenu.style.zIndex = '2000';
mobileMenu.style.display = 'flex';
mobileMenu.style.flexDirection = 'column';
mobileMenu.style.justifyContent = 'center';
mobileMenu.style.alignItems = 'center';
mobileMenu.style.opacity = '0';
mobileMenu.style.pointerEvents = 'none';
mobileMenu.style.transition = 'opacity 0.4s ease';
mobileMenu.style.background = 'rgba(5, 10, 8, 0.9)';
mobileMenu.style.backdropFilter = 'blur(30px)';
mobileMenu.style.webkitBackdropFilter = 'blur(30px)';

hamburger.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

// 3D Glass Tilt Effect for Desktop (Mouse Move)
const glassPanels = document.querySelectorAll('.hero-glass-panel, .card-info, .card-stats, .card-wide');

glassPanels.forEach(panel => {
    panel.addEventListener('mousemove', (e) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        panel.style.transition = 'transform 0.1s linear';
    });
    
    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        panel.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
});

// Fluid Scroll Reveal
const revealElements = document.querySelectorAll('.scroll-reveal');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => {
    scrollObserver.observe(el);
});
