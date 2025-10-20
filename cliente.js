const read = require('readline-sync');

class Cliente {

    #nome
    #raça
    #especie
    #p_saude
    constructor(nome,especie, raça, p_saude) {
        this.#nome = nome
        this.#raça = raça
        this.#especie = especie
        this.#p_saude = p_saude
    }
    listadeconsultas = []

    getNome() { return this.#nome }
    getEspecie() { return this.#especie }
    getRaça() { return this.#raça }
    getP_saude() { return this.#p_saude }
}

class Adm {

    listadeclientes = []
    listademedicos = []
    lista_p_completo = []
    lista_p_basico = []
  
    registrarCliente() {

        console.log("\n--- Registro de Novo Cliente ---");
        const nome = read.question("Qual o nome do cliente? ");
        const especie = read.question("Qual a especie do cliente? ");
        const raça = read.question("Qual a raca do cliente? ");
        const p_saude = read.question("Qual plano de saúde o cliente possui? (básico/completo) ").toLowerCase();


        for (const clienteExistente of this.listadeclientes) {
            if (clienteExistente.getNome() === nome && clienteExistente.getEspecie() === especie && clienteExistente.getRaça() === raça) {
                  
                console.log(`Cliente '${nome}' já existe.`);
                return; 
            }
        }
        

        const novoCliente = new Cliente(nome, especie, raça, p_saude);
        this.listadeclientes.push(novoCliente);
        
        if (p_saude === 'completo') {
            this.lista_p_completo.push(novoCliente);
        } else if (p_saude === 'basico') {
            this.lista_p_basico.push(novoCliente);
        }

        console.log(`Cliente '${nome}' registrado com sucesso. Plano de saúde: ${p_saude}.`);
    }

    listarClientes() {
        console.log("\n--- Lista de Clientes ---");
        if (this.listadeclientes.length === 0) {
            console.log("Nenhum cliente registrado.");
            return;
        }
        this.listadeclientes.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.getNome()}, Plano: ${cliente.getP_saude()}`);
        });
    }
}


console.log("Sistema da Clínica Iniciado!");

const minhaClinica = new Adm();
minhaClinica.registrarCliente();
minhaClinica.registrarCliente();
minhaClinica.listarClientes();
minhaClinica.registrarCliente();
minhaClinica.listarClientes();