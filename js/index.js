/* =========================
   TRADUÇÕES
========================= */
const translations = {
    pt: {
        "menu.packages": "Pacotes",
        "menu.artists": "Artistas",
        "menu.accommodation": "Hospedagem",
        "menu.gallery": "Galeria",
        "menu.schedule": "Programação",
        "menu.howToGet": "Como Chegar",

        "hero.line1": "O início de uma nova era nos trouxe até aqui…",
        "hero.line2": "Agora, é hora de fazer história!",
        "hero.date": "29/01/2026 à 01/02/2026",
        "hero.text": "Muito sol, muita Lambada e Zouk Brasileiro em um Paraíso Tropical! Venha para o MARAÚ DANCE FESTIVAL",

        "social.title": "Redes Sociais",
        "location.text": "Rua Vasco Neto, nº 09 – Barra Grande – Maraú – Bahia – Brasil – CEP: 45520-000",
        "footer.text": "© Marau Dance Festival - Todos os direitos reservados. By Newton Pohsner."
    },

    en: {
        "menu.packages": "Packages",
        "menu.artists": "Artists",
        "menu.accommodation": "Accommodation",
        "menu.gallery": "Gallery",
        "menu.schedule": "Schedule",
        "menu.howToGet": "How to Get There",

        "hero.line1": "The beginning of a new era brought us here…",
        "hero.line2": "Now it's time to make history!",
        "hero.date": "Jan 29, 2026 to Feb 1, 2026",
        "hero.text": "Lots of sun, lots of Lambada and Brazilian Zouk in a Tropical Paradise! Come to the MARAÚ DANCE FESTIVAL",

        "social.title": "Social Media",
        "location.text": "Rua Vasco Neto, nº 09 – Barra Grande – Maraú – Bahia – Brazil – ZIP: 45520-000",
        "footer.text": "© Marau Dance Festival - All rights reserved. By Newton Pohsner."
    },

    es: {
        "menu.packages": "Paquetes",
        "menu.artists": "Artistas",
        "menu.accommodation": "Hospedaje",
        "menu.gallery": "Galería",
        "menu.schedule": "Programación",
        "menu.howToGet": "Cómo Llegar",

        "hero.line1": "El inicio de una nueva era nos trajo hasta aquí…",
        "hero.line2": "¡Ahora es el momento de hacer historia!",
        "hero.date": "29/01/2026 al 01/02/2026",
        "hero.text": "Mucho sol, mucha Lambada y Zouk Brasileño en un Paraíso Tropical. ¡Ven al MARAÚ DANCE FESTIVAL!",

        "social.title": "Redes Sociales",
        "location.text": "Rua Vasco Neto, nº 09 – Barra Grande – Maraú – Bahía – Brasil – CP: 45520-000",
        "footer.text": "© Festival de Danza Marau - Todos los derechos reservados. Por Newton Pohsner."
    }
};

/* =========================
   FUNÇÕES DE IDIOMA
========================= */
function applyTranslations(lang) {
    if (!translations[lang]) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("lang", lang);

    if (typeof closeMenu === "function") {
        closeMenu();
    }
}

/* =========================
   INICIALIZAÇÃO
========================= */
document.addEventListener("DOMContentLoaded", () => {

    /* ===== MENU HAMBÚRGUER (CORRIGIDO) ===== */
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    function toggleMenu() {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    }

    function closeMenu() {
        menu.classList.remove("active");
        menuToggle.classList.remove("active");
    }

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", toggleMenu);

        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    }

    /* ===== IDIOMA ===== */
    const savedLang = localStorage.getItem("lang") || "pt";
    applyTranslations(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            applyTranslations(btn.dataset.lang);
        });
    });
});