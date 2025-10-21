import Consulta from "./Consulta.js"
import Cliente from "./cliente.js"
import read from "readline-sync";


export default class Medico {
    #nome_medico
    #agendamentos = []
    #historico_clientes = []

    constructor(nome) {
        this.#nome_medico = nome;
    }

    getNomeMedico() {
        return this.#nome_medico;
    }

    setNomeMedico(nome) {
        this.#nome_medico = nome;
    }

    GetAgendamentos() {
        return this.#agendamentos
    }

    setAgendamentos(agendamentos) {
        this.#agendamentos.push(agendamentos)
    }

    GetHistoricoClientes() {
        return this.#historico_clientes;
    }

    setHistoricoClientes(clientes) {
        this.#historico_clientes.push(clientes);
    }

    diagnosticar() {
        let diagnostico = read.question("Qual o diagnostico?\n")
        return console.log(`O doutor(a):${this.GetNome()} diagnosticou o animal ${getNome()} com ${diagnostico}`);
    }
}

