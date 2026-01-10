/* =========================
   MENU HAMBÚRGUER PADRÃO MDF
   Base: Página Artistas
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Fecha menu ao clicar em link (mobile)
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

})