// Função para abrir e fechar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}
