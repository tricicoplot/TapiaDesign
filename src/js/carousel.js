// Espera a que el DOM esté completamente cargado para evitar problemas de lectura
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('td-carousel-slider');
    const prevBtn = document.getElementById('td-prev-btn');
    const nextBtn = document.getElementById('td-next-btn');

    // Control de seguridad por si los elementos no existen en la página
    if (!slider || !prevBtn || !nextBtn) return;

    // Al hacer clic en Siguiente, salta directamente a la siguiente imagen completa
    nextBtn.addEventListener('click', () => {
        const cardWidth = slider.offsetWidth;
        // Si llega al final, vuelve al inicio de una
        if (slider.scrollLeft + cardWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'auto' });
        } else {
            slider.scrollBy({ left: cardWidth, behavior: 'auto' });
        }
    });

    // Al hacer clic en Anterior, retrocede de inmediato
    prevBtn.addEventListener('click', () => {
        const cardWidth = slider.offsetWidth;
        // Si está al principio, salta directo al final
        if (slider.scrollLeft <= 0) {
            slider.scrollTo({ left: slider.scrollWidth, behavior: 'auto' });
        } else {
            slider.scrollBy({ left: -cardWidth, behavior: 'auto' });
        }
    });
});