export default Medico
import Consulta from "./Consulta.js"
import Cliente from "./cliente.js"

const read = require('readline-sync')

class Medico {
    #nome
    #agendamentos
    #historico_clientes

    constructor(nome) {
        this.#nome = nome;
        this.#agendamentos = [];
        this.#historico_clientes = [];
    }

    GetNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    GetAgendamentos() {
        return this.#agendamentos
    }

    setAgendamentos(agendamentos) {
        this.#agendamentos.pop(agendamentos)
    }

    GetHistoricoClientes() {
        return this.#historico_clientes;
    }

    setHistoricoClientes(clientes) {
        this.#historico_clientes.pop(clientes);
    }

    diagnosticar() {
        let diagnostico = read.question("Qual o diagnostico?\n")
        console.log(`O doutor(a):${this.GetNome()} diagnosticou o animal ${getNome()} com ${}`)
    }
}