// ===================================
// ARTIST PAGE INTERACTIVE FEATURES
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScroll();
});

// ===================================
// TYPING EFFECT
// ===================================

function initTypingEffect() {
    const text = `TAZII is a budding Rap/Trap artiste raised in Ota, Ogun State, Nigeria. He discovered his flare for rap while freestyling with the guys back in UNI. Now, he's developed his sound and came into the scene with his debut single "Bando Basic" which has received much critical acclaim. While Rap is his main MO, he has delved into different genres and successfully fused his "trap boy vibe" in the mix to deliver outstanding records. As he evolves, you get to see the diverse catalogue this talent has to offer.`;
    
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    let index = 0;
    let isVisible = false;

    function typeWriter() {
        if (index < text.length && isVisible) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 20); // Typing speed
        }
    }

    // Start typing when bio box is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isVisible) {
                isVisible = true;
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const bioBox = document.querySelector('.bio-box');
    if (bioBox) {
        observer.observe(bioBox);
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.music-card, .video-item, .blog-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(255, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// MUSIC CARD INTERACTIONS
// ===================================

const musicCards = document.querySelectorAll('.music-card-inner');

musicCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===================================
// VIDEO LAZY LOADING
// ===================================

const videoWrappers = document.querySelectorAll('.video-wrapper');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const iframe = entry.target.querySelector('iframe');
            if (iframe && !iframe.src) {
                iframe.src = iframe.dataset.src;
            }
            videoObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.25
});

videoWrappers.forEach(wrapper => {
    videoObserver.observe(wrapper);
});

// ===================================
// PARALLAX BACKGROUND
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgGradient = document.querySelector('.bg-gradient');
    
    if (bgGradient) {
        bgGradient.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===================================
// FORM VALIDATION & SUBMISSION
// ===================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('.form-submit');
        
        if (emailInput.value) {
            // Simulate submission
            submitBtn.textContent = 'SUBSCRIBED!';
            submitBtn.style.background = '#00ff00';
            submitBtn.style.borderColor = '#00ff00';
            
            setTimeout(() => {
                submitBtn.textContent = 'SUBSCRIBE';
                submitBtn.style.background = '';
                submitBtn.style.borderColor = '';
                emailInput.value = '';
            }, 3000);
        }
    });
}

// ===================================
// SOCIAL LINK RIPPLE EFFECT
// ===================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 0, 0, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Defer non-critical animations
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Initialize less critical features
        console.log('TAZII - Artist Page Loaded');
    });
}

// ===================================
// EASTER EGG
// ===================================

console.log('%c🎤 TAZII THE ARTIST 🎤', 'font-size: 24px; font-weight: bold; color: #ff0000; text-shadow: 0 0 10px #ff0000;');
console.log('%cTrap · Rap · Drill', 'font-size: 14px; color: #ffff00;');
console.log('%cHurtman Music © 2026', 'font-size: 12px; color: #a0a0a0;');

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

document.addEventListener('keydown', (e) => {
    // Press 'M' to scroll to Music
    if (e.key === 'm' || e.key === 'M') {
        document.querySelector('#music').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'V' to scroll to Videos
    if (e.key === 'v' || e.key === 'V') {
        document.querySelector('#videos').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'B' to scroll to Blog
    if (e.key === 'b' || e.key === 'B') {
        document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'F' to scroll to Follow
    if (e.key === 'f' || e.key === 'F') {
        document.querySelector('#follow').scrollIntoView({ behavior: 'smooth' });
    }
});