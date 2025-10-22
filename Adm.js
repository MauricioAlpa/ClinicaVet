import read from "readline-sync";
import Cliente from "./cliente.js"
import Medico from "./Medico.js"
import Consulta from "./Consulta.js"


export default class Adm {
    #listaDeClientes 
    #listaDeMedicos 
    #nome
    #senha

    constructor(){
        this.#nome = "Mauricio";
        this.#senha = 1234;
        this.#listaDeClientes = []
        this.#listaDeMedicos = []
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
    
    registrarCliente() {
        
        let cpfC = read.question("Qual o CPF do cliente:");
        let nomeC = read.question("Qual o nome do cachorro:");
        let especie = read.question("Qual a especie do cachorro:");
        let raca = read.question("Qual a raça do cachorro:");
        let pSaude = read.question("Qual o plano de saúde do animal(Básico/Completo):")

        for (const clienteExistente of this.#listaDeClientes) {
            if (
                clienteExistente.getCpf() === cpfC){
                return console.log("Cliente já cadastrado");
            
            }
        }

        const novoCliente = new Cliente(cpfC,nomeC, especie, raca, pSaude);


        this.#listaDeClientes.push(novoCliente);

        console.log(
            `Cliente '${nomeC}' registrado com sucesso. Plano de saúde: ${pSaude}.`
        )
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