const translations = {
    pt: {
        page_title: "Programação | Marau Dance Festival",
        menu_home: "Página Inicial",
        menu_packages: "Pacotes",
        menu_artists: "Artistas",
        menu_accommodation: "Hospedagem",
        menu_gallery: "Galeria",
        menu_location: "Como Chegar",
        title: "Programação Oficial",
        description: `
            ✨ Uma experiência inesquecível espera por você ✨
            <br><br>
            No dia 01/02, embarque no majestoso Barco Diamante para um passeio exclusivo que revelará
            5 das ilhas mais deslumbrantes da Península de Maraú.
            <br><br>
            Enquanto você se encanta com paisagens paradisíacas, será presenteado com um pocket show
            especial do cantor paraense Felipe Cordeiro.
            <br><br>
            🌴 Música, dança, natureza e alegria.
            <br><br>
            🎟 Vagas ESGOTADAS.
            <br><br>
            <strong>Data:</strong> 01/02<br>
            <strong>Local de embarque:</strong> Píer de Barra Grande<br>
            <strong>Embarque:</strong> 10:00h<br>
            <strong>Saída:</strong> 10:30h<br>
            <strong>Retorno:</strong> 16:30h
            <br><br>
            Vamos juntos criar memórias inesquecíveis ⚓🛳
        `
    },

    en: {
        page_title: "Schedule | Marau Dance Festival",
        menu_home: "Home",
        menu_packages: "Packages",
        menu_artists: "Artists",
        menu_accommodation: "Accommodation",
        menu_gallery: "Gallery",
        menu_location: "How to Get There",
        title: "Official Schedule",
        description: `
            ✨ An unforgettable experience awaits you ✨
            <br><br>
            On February 1st, board the majestic Diamante Boat for an exclusive tour revealing
            5 of the most stunning islands of the Maraú Peninsula.
            <br><br>
            Enjoy breathtaking landscapes and a special pocket show by Brazilian singer
            Felipe Cordeiro.
            <br><br>
            🌴 Music, dance, nature and joy.
            <br><br>
            🎟 SOLD OUT.
            <br><br>
            <strong>Date:</strong> Feb 1<br>
            <strong>Boarding location:</strong> Barra Grande Pier<br>
            <strong>Boarding:</strong> 10:00 AM<br>
            <strong>Departure:</strong> 10:30 AM<br>
            <strong>Return:</strong> 4:30 PM
            <br><br>
            Let’s create unforgettable memories together ⚓🛳
        `
    },

    es: {
        page_title: "Programación | Marau Dance Festival",
        menu_home: "Inicio",
        menu_packages: "Paquetes",
        menu_artists: "Artistas",
        menu_accommodation: "Hospedaje",
        menu_gallery: "Galería",
        menu_location: "Cómo Llegar",
        title: "Programación Oficial",
        description: `
            ✨ Una experiencia inolvidable te espera ✨
            <br><br>
            El 01/02, sube al majestuoso Barco Diamante para un recorrido exclusivo por
            5 de las islas más impresionantes de la Península de Maraú.
            <br><br>
            Disfruta de paisajes paradisíacos y un show especial del cantante brasileño
            Felipe Cordeiro.
            <br><br>
            🌴 Música, danza, naturaleza y alegría.
            <br><br>
            🎟 ENTRADAS AGOTADAS.
            <br><br>
            <strong>Fecha:</strong> 01/02<br>
            <strong>Embarque:</strong> Muelle de Barra Grande<br>
            <strong>Hora:</strong> 10:00h<br>
            <strong>Salida:</strong> 10:30h<br>
            <strong>Regreso:</strong> 16:30h
            <br><br>
            Creemos juntos recuerdos inolvidables ⚓🛳
        `
    }
};

const buttons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.title = translations[lang].page_title;

    buttons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-lang="${lang}"]`).classList.add("active");

    localStorage.setItem("language", lang);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

setLanguage(localStorage.getItem("language") || "pt");

document.addEventListener("DOMContentLoaded", () => {

    const imagens = document.querySelectorAll(".programacao img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// ABRIR
imagens.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

// FECHAR NO X
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// FECHAR CLICANDO FORA
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// FECHAR COM ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }
});

});