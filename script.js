// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
        }
    });

    // Gallery image loading animation
    const images = document.querySelectorAll('.image-wrapper img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.parentElement.style.opacity = '1';
        });
    });

    // Add ripple effect on gallery items
    const galleryItems = document.querySelectorAll('.image-wrapper');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                pointer-events: none;
                background: rgba(255,255,255,0.6);
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: ripple-animation 0.6s ease-out;
            `;
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 25) + 'px';
            ripple.style.top = (e.clientY - rect.top - 25) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.gallery-item, .fact-card').forEach(el => {
        observer.observe(el);
    });

    // Add nice scroll behavior to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Log a sweet message
    console.log('%cAishwarya 💙', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%cYou\'re incredibly cute and genuinely sweet! 🌟', 'font-size: 14px; color: #764ba2;');
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        from {
            width: 50px;
            height: 50px;
            opacity: 1;
        }
        to {
            width: 400px;
            height: 400px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
