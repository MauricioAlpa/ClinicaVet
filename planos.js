export default class Plano {
    #valor
    #cobertura
    #tosa
    #banho
    
    constructor(cobertura) {
        this.#cobertura = cobertura;
        this.#valor = 450;
        this.#tosa = true;
        this.#banho = true;
    }

    getCobertura() {
        return this.#cobertura
    }

    getValor() {
        return this.#valor;
    }

    getTosa() {
        return this.#tosa;
    }

    getBanho() {
        return this.#banho;
    }

    setCobertura(cobertura){
        this.#cobertura = cobertura;
    }

    setValor(Valor) {
        this.#valor = Valor;
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








