// =========================
// PORTFOLIO JAVASCRIPT
// =========================

console.log("Portfolio Muhammad Haris berhasil dimuat!");


// =========================
// SCROLL ANIMATION
// =========================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .section-title"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.classList.add("hidden");

    observer.observe(card);

});