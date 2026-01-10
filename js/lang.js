let currentLang = 'pt';

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
        "artists.title": "ARTISTAS",
        "organization.title": "ORGANIZAÇÃO",

        "footer.text": "© Marau Dance Festival - Todos os direitos reservados. By Newton Pohsner."
    },

    en: {
        "menu.packages": "Packages",
        "menu.artists": "Artists",
        "menu.accommodation": "Accommodation",
        "menu.gallery": "Gallery",
        "menu.schedule": "Schedule",
        "menu.howToGet": "How to Get There",

        "hero.line1": "The beginning of a new era has brought us here…",
        "hero.line2": "Now it’s time to make history!",
        "hero.date": "Jan 29, 2026 to Feb 1, 2026",
        "hero.text": "A lot of sun, Lambada and Brazilian Zouk in a Tropical Paradise! Come to the MARAÚ DANCE FESTIVAL",

        "social.title": "Social Media",
        "artists.title": "ARTISTS",
        "organization.title": "ORGANIZATION",


        "footer.text": "© Marau Dance Festival - All rights reserved. By Newton Pohsner."
    },

    es: {
        "menu.packages": "Paquetes",
        "menu.artists": "Artistas",
        "menu.accommodation": "Alojamiento",
        "menu.gallery": "Galería",
        "menu.schedule": "Programación",
        "menu.howToGet": "Cómo llegar",

        "hero.line1": "El inicio de una nueva era nos trajo hasta aquí…",
        "hero.line2": "¡Ahora es el momento de hacer historia!",
        "hero.date": "29/01/2026 al 01/02/2026",
        "hero.text": "Mucho sol, Lambada y Zouk Brasileño en un Paraíso Tropical. ¡Ven al MARAÚ DANCE FESTIVAL!",

        "social.title": "Redes Sociales",
        "artists.title": "ARTISTAS",
        "organization.title": "ORGANIZACIÓN",

        "footer.text": "© Marau Dance Festival - Todos los derechos reservados. By Newton Pohsner."
    }
};

function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

/* idioma padrão */
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('pt');
});