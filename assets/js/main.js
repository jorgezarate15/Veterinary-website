const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.querySelector(".menuPrincipal");
const menuNavegacion = document.getElementById("menuNavegacion");

if (menuToggle && menuPrincipal && menuNavegacion) {
    const cerrarMenu = () => {
        menuPrincipal.classList.remove("abierto");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
        const estaAbierto = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!estaAbierto));
        menuPrincipal.classList.toggle("abierto", !estaAbierto);
    });

    menuNavegacion.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", cerrarMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            cerrarMenu();
        }
    });
}
