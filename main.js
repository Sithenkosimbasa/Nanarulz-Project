document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    // Initialize testimonials carousel if present
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    if (testimonialsCarousel) {
        let currentIndex = 0;
        const testimonials = testimonialsCarousel.querySelectorAll('.testimonial');
        const totalTestimonials = testimonials.length;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = (i === index) ? 'block' : 'none';
            });
        }

        showTestimonial(currentIndex);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            showTestimonial(currentIndex);
        }, 5000); // Change testimonial every 5 seconds
    }
});