import { menuDesplegable, afegirColumna } from './menu.js';
import { mostrarArticle } from './mostrar.js';

window.onload = function start() {
    menuDesplegable();
    mostrarArticle();
    const boto = document.getElementsByTagName("button")[0];
    boto.addEventListener("click", afegirColumna);
}