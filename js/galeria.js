document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       TRADUÇÕES
    ========================= */
    const translations = {
        pt: {
            page_title: "Galeria | Marau Dance Festival",
            menu_home: "Página Inicial",
            menu_packages: "Pacotes",
            menu_artists: "Artistas",
            menu_accommodation: "Hospedagem",
            menu_schedule: "Programação",
            menu_location: "Como Chegar",

            title: "Galeria",

            videos_title: "Vídeos",
            photos_title: "Fotos",

            official_music: "Música Oficial",
            video_musica: "Música: Maraú me chamou",
            cantora: "AIYSHA COLKETT",

            balls: "Bailes",
            classes: "Aulas",

            "footer.text": "© Marau Dance Festival - Todos os direitos reservados. By Newton Pohsner."
        },

        en: {
            page_title: "Gallery | Marau Dance Festival",
            menu_home: "Home",
            menu_packages: "Packages",
            menu_artists: "Artists",
            menu_accommodation: "Accommodation",
            menu_schedule: "Schedule",
            menu_location: "How to Get There",

            title: "Gallery",

            videos_title: "Videos",
            photos_title: "Photos",

            official_music: "Official Music",
            video_musica: "Music: Maraú me chamou",
            cantora: "AIYSHA COLKETT",

            balls: "Parties",
            classes: "Classes",

            "footer.text": "© Marau Dance Festival - All rights reserved. By Newton Pohsner."
        },

        es: {
            page_title: "Galería | Marau Dance Festival",
            menu_home: "Inicio",
            menu_packages: "Paquetes",
            menu_artists: "Artistas",
            menu_accommodation: "Alojamiento",
            menu_schedule: "Programación",
            menu_location: "Cómo Llegar",

            title: "Galería",

            videos_title: "Videos",
            photos_title: "Fotos",

            official_music: "Música Oficial",
            video_musica: "Música: Maraú me chamou",
            cantora: "AIYSHA COLKETT",

            balls: "Bailes",
            classes: "Clases",

            "footer.text": "© Marau Dance Festival - Todos los derechos reservados. By Newton Pohsner."
        }
    };

    const buttons = document.querySelectorAll(".lang-btn");
    const elements = document.querySelectorAll("[data-i18n]");

    function setLanguage(lang) {
        const selectedLanguage = translations[lang] ? lang : "pt";

        elements.forEach(el => {
            const key = el.dataset.i18n;

            if (translations[selectedLanguage][key]) {
                el.textContent = translations[selectedLanguage][key];
            }
        });

        document.title = translations[selectedLanguage].page_title;

        buttons.forEach(btn => btn.classList.remove("active"));

        document
            .querySelector(`.lang-btn[data-lang="${selectedLanguage}"]`)
            ?.classList.add("active");

        localStorage.setItem("language", selectedLanguage);
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });

    setLanguage(localStorage.getItem("language") || "pt");

    /* =========================
       FULLSCREEN – DESKTOP ONLY
    ========================= */
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {

        document
            .querySelectorAll(".videos video, .videos-musica video")
            .forEach(video => {

                video.addEventListener("click", () => {
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                        video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) {
                        video.msRequestFullscreen();
                    }
                });

                const onExitFullscreen = () => {
                    const isFullscreen =
                        document.fullscreenElement === video ||
                        document.webkitFullscreenElement === video ||
                        document.msFullscreenElement === video;

                    if (!isFullscreen) {
                        video.pause();
                        video.currentTime = 0;
                    }
                };

                document.addEventListener("fullscreenchange", onExitFullscreen);
                document.addEventListener("webkitfullscreenchange", onExitFullscreen);
                document.addEventListener("msfullscreenchange", onExitFullscreen);
            });
    }

});