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
    getNome() {
        return this.#nome
    }
    getRaça() {
        return this.#raça
    }  
    getEspecie() {
        return this.#especie
    }
    getP_saude() {
        return this.#p_saude
    }
    setN_consultas(p_saude) {
        this.#p_saude = p_saude
    }
    setEspecie(especie) {
        this.#especie = especie
    } 
    setRaça(raça) {
        this.#raça = raça
    }
    setNome(nome) {
        this.#nome = nome
    }

    setP_saude(p_saude) {
        this.#p_saude = p_saude
    }
}

class Adm {
    listadeclientes = []
    listademedicos = []
    registrarCliente(nome, especie, raça) {
        let p_saude = false 
        for (const ClienteExisteente of this.listadeclientes) {
            if (ClienteExisteente.getNome() === nome && ClienteExisteente.getEspecie() === especie && ClienteExisteente.getRaça() === raça) {
                ClienteExisteente.setP_saude(true)
                console.log(`Cliente '${nome}' já existe. Plano de saúde atualizado para: true.`)
                return
            }
        }
        const novoCliente = new Cliente(nome, especie, raça, p_saude)

    this.listadeclientes.push(novoCliente)

    console.log(`Cliente '${nome}' registrado com sucesso. Plano de saúde: ${p_saude}.`)
    }
    listarclientes() {
        console.log("Lista de Clientes:")
        this.listadeclientes.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.getNome()}, Espécie: ${cliente.getEspecie()}, Raça: ${cliente.getRaça()}, Plano de Saúde: ${cliente.getP_saude()}`)
        })
    }
}

const minhaClinica = new Adm();


console.log("--- Registrando Clientes ---");
minhaClinica.registrarCliente("Bolinha", "Cachorro", "Poodle");
minhaClinica.registrarCliente("Frajola", "Gato", "Siamês");
minhaClinica.registrarCliente("Rex", "Cachorro", "Pastor Alemão");


minhaClinica.listarclientes();


console.log("\n--- Registrando um cliente repetido ---");
minhaClinica.registrarCliente("Bolinha", "Cachorro", "Poodle");

// 5. Vamos listar DE NOVO e ver a mágica do p_saude
minhaClinica.listarclientes();