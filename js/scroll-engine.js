const track = document.getElementById('evoTrack');
const wrapper = document.querySelector('.evolution-wrapper');

window.addEventListener('scroll', () => {
    if (window.innerWidth < 1024) {
        track.style.transform = 'none';
        return;
    }

    const wrapperRect = wrapper.getBoundingClientRect();
    const progress = -wrapperRect.top / (wrapper.offsetHeight - window.innerHeight);
    
    if (progress >= 0 && progress <= 1) {
        // Вычисляем дистанцию: ширина всего трека минус ширина окна + отступы
        const trackWidth = track.scrollWidth;
        const viewWidth = window.innerWidth;
        const maxScroll = trackWidth - viewWidth + (viewWidth * 0.1); 
        
        track.style.transform = `translateX(-${progress * maxScroll}px)`;
    }
});

/* Simple Reveal Animation for Cases */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px) scale(0.95)";
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
});