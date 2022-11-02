import { Factura } from './constructors.js';

export function menuDesplegable() {
    let ArticlePoma = new Factura(1, "Poma", 1);
    let ArticlePatata = new Factura(2, "Patata", 1);
    let ArticleTomaquet = new Factura(3, "Tomaquet", 1);
    let ArticleRaim = new Factura(4, "Raïm", 1);
    let ArticleCirera = new Factura(5, "Cirera", 1);
    let ArticlePlatan = new Factura(6, "Platan", 1);
    let ArticleMaduixa = new Factura(7, "Maduixa", 1);
    let ArticlePressec = new Factura(8, "Pressec", 1);
    let ArticlePastanaga = new Factura(9, "Pastanaga", 1);
    let ArticleMango = new Factura(10, "Mango", 1);

    const select = document.getElementsByTagName("select")[0];

    let Articles =
        [ArticlePoma.nom, ArticlePatata.nom, ArticleTomaquet.nom, ArticleRaim.nom,
        ArticleCirera.nom, ArticlePlatan.nom, ArticleMaduixa.nom, ArticlePressec.nom,
        ArticlePastanaga.nom, ArticleMango.nom];
    Articles.sort();

    for (let i = 0; i < Articles.length; i++) {
        let option = document.createElement("option");
        option.value = Articles[i];
        option.innerHTML = Articles[i];
        select.append(option);
    }
}

export function afegirColumna() {
    let taula = document.getElementsByTagName("table")[0];
    let select = document.getElementsByClassName("select")[0].value.Articles;
    let objecta = select.keys(Fila);
    for (let i = 0; i < objecta.length; i++) {
        if (!objecta.id) {
            console.log("Hola");
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.value = objecta[i];
            td.innerHTML = objecta[i];
        } else {
            console.log("Hola");
            let td = document.createElement("td");
            td.value = objecta[i];
            td.innerHTML = objecta[i];
        }
    }
}