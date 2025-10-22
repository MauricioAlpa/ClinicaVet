import Cliente from "./cliente";
var cli = new Cliente();
export default class Plano {
    #valor
    #cobertura
    #tosa
    #banho
    
    constructor(valor, cobertura, tosa, banho) {
        this.#valor = 5000;
        this.#cobertura = cobertura;
        this.#tosa = tosa;
        this.#banho = banho;
    }
    getValor() {
        return this.#valor;
    }
    getCobertura() {
        return this.#cobertura;
    }
    getTosa() {
        return this.#tosa;
    }
    getBanho() {
        return this.#banho;
    }
    setValor(Valor) {
        this.#valor = Valor;
    }
    setCobertura(cobertura) {
        this.#cobertura = cobertura;
    }
    setTosa(tosa) {
        this.#tosa = tosa;
    }
    setBanho(banho) {
        this.#banho = banho;
    }


    exibirDetalhes() {
        console.log(`--- Plano: ${this.#cobertura} ---`);
        console.log(`Valor: R$ ${this.#valor.toFixed(2)}`);
        console.log(`Inclui Banho: ${this.#banho ? 'Sim' : 'Não'}`);
        console.log(`Inclui Tosa: ${this.#tosa ? 'Sim' : 'Não'}`);
    }


    calcularCustoAnual() {
        return this.#valor * 12;
    }
}








