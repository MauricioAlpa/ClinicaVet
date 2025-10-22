import Cliente from "./cliente";
export default class Plano {
    #valor
    #cobertura
    #tosa
    #banho

    constructor(valor, cobertura, tosa, banho) {
        this.#valor = valor;
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
}
