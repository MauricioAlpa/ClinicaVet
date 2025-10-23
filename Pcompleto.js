import Plano from "./planos.js";
export default class Pcompleto extends Plano {
    #bonus
    #limiteConsultas

    constructor() {

        super("Completo"); 
        this.#bonus = "1x Vacinação Anual Grátis";
        this.#limiteConsultas = 10 ;
    }
    exibirDetalhes() {
        super.exibirDetalhes(); 
        console.log(`Bônus: ${this.#bonus}`); 
        console.log(`Limite de consultas: ${this.#limiteConsultas}`);
    }

    limiteConsulta() {
       if(this.#limiteConsultas == 0){
            console.log("Limite de consultas do mês atingido");
       } else {
            this.#limiteConsultas -= 1;
       }
    }
}