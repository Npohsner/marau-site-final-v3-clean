document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       TRADUÇÕES
    ========================== */
    const translations = {
        pt: {
            title: "Fotos – Bailes",
            back: "Voltar"
        },
        en: {
            title: "Photos – Partys",
            back: "Back"
        },
        es: {
            title: "Fotos – Bailes",
            back: "Volver"
        }
    };

    const langButtons = document.querySelectorAll(".lang-btn");

    function applyTranslation(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });

        localStorage.setItem("lang", lang);
    }

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            applyTranslation(btn.dataset.lang);
        });
    });

    applyTranslation(localStorage.getItem("lang") || "pt");

    /* ==========================
       CARROSSEL INFINITO
    ========================== */
    const items = [...document.querySelectorAll(".carousel-item")];
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = Math.floor(items.length / 2);

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active", "side-left", "side-right");

            const offset = index - currentIndex;

            if (offset === 0) item.classList.add("active");
            if (offset === -1) item.classList.add("side-left");
            if (offset === 1) item.classList.add("side-right");
        });
    }

    function next() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    /* ==========================
       MODAL FULLSCREEN
    ========================== */
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".photo-modal .close");

    items.forEach(item => {
        item.addEventListener("click", () => {
            if (item.classList.contains("active")) {
                modalImg.src = item.src;
                modal.classList.add("show");
            }
        });
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("show");
    });

    updateCarousel();
});