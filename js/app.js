const observerOptions = { threshold: 0.1 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Spline Watermark Fix */
window.addEventListener('load', () => {
    const spline = document.querySelector('spline-viewer');
    if (spline && spline.shadowRoot) {
        const style = document.createElement('style');
        style.textContent = `#logo { display: none !important; }`;
        spline.shadowRoot.appendChild(style);
    }
});