let currentLang = 'pt';

const translations = {
    pt: {
        "menu.packages": "Pacotes",
        "menu.artists": "Artistas",
        "menu.accommodation": "Hospedagem",
        "menu.gallery": "Galeria",
        "menu.schedule": "Programação",
        "menu.howToGet": "Como Chegar",

        "hero.line1": "Em cada giro, um segredo… em cada conexão, um feitiço… a dança conduz aqueles que ousam atravessar para além do que os olhos podem ver.",
       // "hero.line2": "Agora, é hora de fazer história!",
        "hero.date": "28/01/2027 à 31/01/2027",
        "hero.text": "Em um mundo onde o tempo se curva, o sol aquece os sonhos e a lambada encontra o zouk, nasce um paraíso feito para dançar... MARAÚ DANCE FESTIVAL",

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

        "hero.line1": "In every turn, a secret… in every connection, a spell… the dance guides those who dare to cross beyond what the eyes can see.",
        //"hero.line2": "Now it’s time to make history!",
        "hero.date": "Jan 28, 2027 to Jan 31, 2027",
        "hero.text": "In a world where time bends, the sun warms dreams and lambada meets zouk, a paradise made for dancing is born... MARAÚ DANCE FESTIVAL",

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

        "hero.line1": "En cada giro, un secreto… en cada conexión, un hechizo… la danza guía a quienes se atreven a cruzar más allá de lo que los ojos pueden ver.",
        //"hero.line2": "¡Ahora es el momento de hacer historia!",
        "hero.date": "28/01/2027 al 31/01/2027",
        "hero.text": "En un mundo donde el tiempo se curva, el sol calienta los sueños y la lambada encuentra al zouk, nace un paraíso hecho para bailar... ¡Ven al MARAÚ DANCE FESTIVAL!",

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