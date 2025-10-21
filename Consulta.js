export default class Consulta {
    #data
    #vet_responsavel
    #diagnostico
    #tratamento

    constructor(data, vet_responsavel, diagnostico, tratamento) {
        this.#data = new Date(data);
        this.#vet_responsavel = vet_responsavel;
        this.#diagnostico = diagnostico;
        this.#tratamento = tratamento;
    }

    getData() {
        return this.#data
    }

    getVet_responsavel() {
        return this.#vet_responsavel
    }

    getDiagnostico() {
        return this.#diagnostico
    }

    getTratamento() {
        return this.#tratamento
    }

    setData(data){
        this.#data = data;
    }

    setVet_responsavel(vet_responsavel){
        this.#vet_responsavel = vet_responsavel;
    }

    setDiagnostico(diagnostico){
        this.#diagnostico = diagnostico;
    }

    setTratamento(tratamento){
        this.#tratamento = tratamento;
    }
}