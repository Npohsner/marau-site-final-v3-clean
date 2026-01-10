document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       TRADUÇÕES
    ========================= */
    const translations = {
        pt: { title: "Fotos – Aulas", back: "Voltar", "title.bailes": "Fotos – Bailes" },
        en: { title: "Photos – Classes", back: "Back", "title.bailes": "Photos – Dances" },
        es: { title: "Fotos – Clases", back: "Volver", "title.bailes": "Fotos – Bailes" }
    };

    function applyTranslation(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".lang-btn")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            applyTranslation(btn.dataset.lang);
        });
    });

    applyTranslation(localStorage.getItem("lang") || "pt");

    /* =========================
       MENU HAMBÚRGUER
    ========================= */
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    /* =========================
       CARROSSEL COVERFLOW
    ========================= */
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let current = 0;
    const total = items.length;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove(
                "is-center",
                "is-left",
                "is-right",
                "is-hidden"
            );

            if (index === current) {
                item.classList.add("is-center");
            }
            else if (index === (current - 1 + total) % total) {
                item.classList.add("is-left");
            }
            else if (index === (current + 1) % total) {
                item.classList.add("is-right");
            }
            else {
                item.classList.add("is-hidden");
            }
        });
    }

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + total) % total;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % total;
        updateCarousel();
    });

    updateCarousel();

    /* =========================
       MODAL FULLSCREEN
    ========================= */
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = modal.querySelector(".close");

    items.forEach(item => {
        item.addEventListener("click", () => {
            modalImg.src = item.src;
            modal.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

});