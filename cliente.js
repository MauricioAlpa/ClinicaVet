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
    lsitademedicos = []
    registrarCliente(nome, especie, raça) {
        let p_saude = false 
        for (const ClienteExisteente of this.listadeclientes) {
            if (ClienteExisteente.getNome() === nome && ClienteExisteente.getEspecie() === especie && ClienteExisteente.getRaça() === raça) {
                p_saude = true
                break
            }
        }
        const novoCliente = new Cliente(nome, especie, raça, p_saude)

    this.listadeclientes.push(novoCliente)

    console.log(`Cliente '${nome}' registrado com sucesso. Planod de saúde: ${p_saude}.`)
    }

}