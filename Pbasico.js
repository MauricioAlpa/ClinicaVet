import Plano from "./plano.js";
export class Pbasico extends Plano {

    constructor(valor) {

        super(valor, 'Básico', false, true); 
    }
    exibirDetalhes() {
        super.exibirDetalhes();
    }
}