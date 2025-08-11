document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".intro-section");

    // Effet de fade-in lors du défilement
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animation de survol des images
    const images = document.querySelectorAll(".intro-section img");
    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.5s ease-in-out";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
