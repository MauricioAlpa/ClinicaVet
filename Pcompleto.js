import Plano from "./planos.js";
export class Pcompleto extends Plano {
    

    #bonus


    constructor(valor) {

        super(valor, 'Completo', true, true); 
        this.#bonus = "1x Vacinação Anual Grátis"; 
    }
    exibirDetalhes() {
        super.exibirDetalhes(); 
        console.log(`Bônus: ${this.#bonus}`); 
       
    }

    calcularCustoAnual() {
        const custoBase = super.calcularCustoAnual();
        const desconto = custoBase * 0.10;
        return custoBase - desconto;
    }
}