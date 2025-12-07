// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to photos
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    photoPlaceholders.forEach(photo => {
        photo.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Create floating hearts on scroll
    window.addEventListener('scroll', function() {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const hearts = document.querySelector('.hearts');
        if (hearts) {
            hearts.style.opacity = Math.max(0, 1 - scrollPercent * 0.5);
        }
    });

    // Log a sweet message
    console.log('💕 Aishwarya, you are cute and sweet! - Gautham');
});
