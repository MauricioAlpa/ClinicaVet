import read from "readline-sync";
import Cliente from "./cliente.js"
import Medico from "./Medico.js"
import Consulta from "./Consulta.js"


export default class Adm {
    #listaDeClientes = []
    #listaDeMedicos = []
    #nome
    #senha

    constructor(nome, senha){
        this.#nome = "Mauricio";
        this.#senha = 1234;
    } 

    getNomeAdm(){
        return this.#nome;
    }

    getSenha() {
        return this.#senha;
    }

    getListaDeClientes() {
        return this.#listaDeClientes;
    }

    getListaDeMedicos() {
        return this.#listaDeMedicos;
    }

    
    setListaDeClientes(novoCliente) {
        // remove o último e adiciona o novo
        this.#listaDeClientes.pop();
        this.#listaDeClientes.push(novoCliente);
    }

    setListaDeMedicos(novoMedico) {
        this.#listaDeMedicos.pop();
        this.#listaDeMedicos.push(novoMedico);
    }

    setNomeAdm(nome) {
        this.#nome = nome;
    }

    setSenha(senha) {
        this.#senha = senha;
    }
    
    registrarCliente(nome, especie, raça) {
        let p_saude = false;

        for (const clienteExistente of this.#listaDeClientes) {
            if (
                clienteExistente.getNome() === nome &&
                clienteExistente.getEspecie() === especie &&
                clienteExistente.getRaça() === raça
            ) {
                p_saude = true;
                break;
            }
        }

        const novoCliente = new Cliente(nome, especie, raça, p_saude);


        this.listaDeClientes = novoCliente;

        console.log(
            `Cliente '${nome}' registrado com sucesso. Plano de saúde: ${p_saude}.`
        );
    }

    registrarMedico() {
        let nMedico = read.question("Qual o nome do médico? ").trim();
        nMedico = nMedico.toLowerCase();

        const existe = this.#listaDeMedicos.some(
            m => m.getNomeMedico().trim().toLowerCase() === nMedico
        );

        if (existe) {
            console.log(`Médico ${nMedico} já registrado.`);
            return;
        }

        const m = new Medico(nMedico);
        this.#listaDeMedicos.push(m);
        console.log(`Médico ${nMedico} registrado com sucesso.`);
    }

    // Método para resetar as listas
    reset() {
        this.#listaDeClientes = [];
        this.#listaDeMedicos = [];
        console.log("Todas as listas foram esvaziadas.");
    }

}