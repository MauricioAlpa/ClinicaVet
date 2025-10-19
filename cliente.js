class Cliente {
    #nome
    #raça
    #especie
    #n_consultas
    constructor(nome,espécie, raça, n_consultas) {
        this.#nome = nome
        this.#raça = raça
        this.#especie = espécie
        this.#n_consultas = n_consultas
    }
    getNome() {
        return this.#nome
    }
    getRaça() {
        return this.#raça
    }  
    getEspecie() {
        return this.#especie
    }
    getN_consultas() {
        return this.#n_consultas
    }
    setN_consultas(n_consultas) {
        this.#n_consultas = n_consultas
    }
    setEspecie(espécie) {
        this.#especie = espécie
    } 
    setRaça(raça) {
        this.#raça = raça
    }
    setNome(nome) {
        this.#nome = nome
    }
    agendarConsulta() {
        if (this.getN_consultas() == 0) {
            console.log("Essa é a primeira consulta do cliente " + this.#nome)
        }
        else {
            console.log(`O cliente  ${this.getNome()}, da raça ${this.getRaça()} já teve ${this.getN_consultas()} consultas.`)
        }

    }
}
