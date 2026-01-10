document.addEventListener("DOMContentLoaded", () => {

    /* ========= TRADUÇÕES ========= */
    const translations = {
        pt: {
            title: "Como Chegar",
            subtitle: "Informações de acesso ao evento",
            menu_home: "INÍCIO",
            menu_packages: "PACOTES",
            menu_artists: "ARTISTAS",
            menu_host: "HOSPEDAGEM",
            menu_gallery: "GALERIA",
            menu_program: "PROGRAMAÇÃO"
        },
        en: {
            title: "How to Get There",
            subtitle: "Access information for the event",
            menu_home: "HOME",
            menu_packages: "PACKAGES",
            menu_artists: "ARTISTS",
            menu_host: "ACCOMMODATION",
            menu_gallery: "GALLERY",
            menu_program: "SCHEDULE"


        },
        es: {
            title: "Cómo Llegar",
            subtitle: "Información de acceso al evento",
            menu_home: "INICIO",
            menu_packages: "PAQUETES",
            menu_artists: "ARTISTAS",
            menu_host: "HOSPEDAJE",
            menu_gallery: "GALERÍA",
            menu_program: "PROGRAMACIÓN"
        }
    };

    const langButtons = document.querySelectorAll(".lang-btn");

    function setLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key];
        });

        langButtons.forEach(btn => btn.classList.remove("active"));
        document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add("active");
    }

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });

    setLanguage("pt");

    /* ========= MODAL IMAGENS ========= */
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".como-chegar-grid img").forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", e => e.target === modal && modal.classList.remove("show"));
    document.addEventListener("keydown", e => e.key === "Escape" && modal.classList.remove("show"));

});