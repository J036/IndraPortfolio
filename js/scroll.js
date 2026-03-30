/* Triggers fade in for js elements*/
const workItems = document.querySelectorAll('.work-item');

const workObserver = new IntersectionObserver((entries) => {
entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
    setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
});
}, { threshold: 0.1 });

workItems.forEach(el => workObserver.observe(el));
