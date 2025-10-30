export default class Consulta {
    #paciente
    #data
    #vet_responsavel
    #diagnostico
    #tratamento

    constructor(paciente,data, vet_responsavel, diagnostico, tratamento) {
        this.#paciente = paciente;
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