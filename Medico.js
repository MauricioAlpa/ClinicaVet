export default Medico
import Consulta from "./Consulta.js"
import Cliente from "./cliente.js"

const read = require('readline-sync')

class Medico {
    #nome_medico
    #agendamentos
    #historico_clientes

    constructor(nome) {
        this.#nome_medico = nome;
        this.#agendamentos = [];
        this.#historico_clientes = [];
    }

    GetNomeMedico() {
        return this.#nome_medico;
    }

    setNomeMedico(nome) {
        this.#nome_medico = nome;
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
        return console.log(`O doutor(a):${this.GetNome()} diagnosticou o animal ${getNome()} com ${diagnostico}`);
    }
}

