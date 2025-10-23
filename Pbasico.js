import Plano from "./planos.js";
export default class Pbasico extends Plano {
    #limiteConsultas

    constructor() {
        super("Básico");
        this.#limiteConsultas = 5
    }
    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Limite de consultas: ${this.#limiteConsultas}`);
    }

    limiteConsulta() {
       if(this.#limiteConsultas == 0){
            console.log("Limite de consultas do mês atingido")
       } else {
            this.#limiteConsultas -= 1;
            console.log(`Número de consultas restantes ${this.#limiteConsultas}`)
       }
    }
}