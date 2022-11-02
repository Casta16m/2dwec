class Factura {
    constructor(codi, nom, preu) {
        this.codi = codi;
        this.nom = nom;
        this.preu = preu;
    }

    retornavalor() {
        return this.codi;
    }
}

class guardarFactures {
    constructor(codi, nom, quantitat, preu) {
        this.codi = codi;
        this.nom = nom;
        this.quantitat = quantitat;
        this.preu = preu;
    }

    retornavalor() {
        return this.codi;
    }


}


export { Factura };