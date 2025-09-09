document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('hover'));
        card.addEventListener('mouseleave', () => card.classList.remove('hover'));
    });

    // Testimonials carousel
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        let index = 0;
        const testimonials = carousel.querySelectorAll('.testimonial');
        const total = testimonials.length;

        function showTestimonial(i) {
            testimonials.forEach((t, j) => t.style.display = (i === j) ? 'block' : 'none');
        }

        showTestimonial(index);
        setInterval(() => {
            index = (index + 1) % total;
            showTestimonial(index);
        }, 5000);
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
});



