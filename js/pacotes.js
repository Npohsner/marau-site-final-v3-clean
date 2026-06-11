document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU ================= */
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    /* ================= TRADUÇÕES ================= */
    const translations = {
        pt: {
            menu_home: "Página Inicial",
            menu_artistas: "Artistas",
            menu_hospedagem: "Hospedagem",
            menu_galeria: "Galeria",
            menu_programacao: "Programação",
            menu_como_chegar: "Como Chegar",
            titulo_pacotes: "Pacotes Marau Dance Festival 2027",
            validade: "Disponível até 24 de Setembro de 2026",
            "footer.text": "© Marau Dance Festival - Todos os direitos reservados. By Newton Pohsner.",
            title:" Onde se Hospedar",
            subtitle:" Pacote – 05 Noites"
        },
        en: {
            menu_home: "Home",
            menu_artistas: "Artists",
            menu_hospedagem: "Accommodation",
            menu_galeria: "Gallery",
            menu_programacao: "Schedule",
            menu_como_chegar: "How to Get There",
            titulo_pacotes: "Marau Dance Festival 2027 Packages",
            validade: "Available until September 24, 2026",
            "footer.text": "© Marau Dance Festival - All rights reserved. By Newton Pohsner.",
            title:" Where to Stay",
            subtitle:" Package – 5 Nights"
        },
        es: {
            menu_home: "Inicio",
            menu_artistas: "Artistas",
            menu_hospedagem: "Alojamiento",
            menu_galeria: "Galería",
            menu_programacao: "Programación",
            menu_como_chegar: "Cómo llegar",
            titulo_pacotes: "Paquetes Marau Dance Festival 2027",
            validade: "Disponible hasta el 24 de Septiembre de 2026",
            "footer.text": "© Marau Dance Festival - Todos los derechos reservados. By Newton Pohsner.",
            title:" Dónde alojarse",
            subtitle:" Paquete – 5 Noches"
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        document.querySelectorAll(".lang-btn").forEach(btn =>
            btn.classList.remove("active")
        );

        document.querySelector(`.lang-btn[data-lang="${lang}"]`)
            .classList.add("active");
    }

    /* ================= BOTÕES IDIOMA ================= */
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });

    /* ================= IDIOMA PADRÃO ================= */
    const savedLang = localStorage.getItem("lang") || "pt";
    setLanguage(savedLang);

});

/* =========================
   LIGHTBOX IMAGENS (COM ESGOTADO)
========================= */
const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxOverlay = document.getElementById("lightbox-overlay");
const closeBtn = document.querySelector(".lightbox .close");

cards.forEach(card => {
    const img = card.querySelector("img:not(.overlay)");
    const overlay = card.querySelector(".overlay");

    if (!img) return;

    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;

        if (overlay) {
            lightboxOverlay.src = overlay.src;
            lightboxOverlay.style.display = "block";
        } else {
            lightboxOverlay.style.display = "none";
        }
    });
});

function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    lightboxOverlay.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});