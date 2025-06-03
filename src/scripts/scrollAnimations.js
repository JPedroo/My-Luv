document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const animateElement = (element) => {
        element.classList.add('fade-in-up');
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elementos
    const elementsToAnimate = document.querySelectorAll('.countdown, .gerador');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});