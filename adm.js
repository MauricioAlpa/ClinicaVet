import Cliente from "./cliente.js"
class Adm {
    listadeclientes = []
    listaDeMedicos = []

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

    console.log(`Cliente '${nome}' registrado com sucesso. Plano de saúde: ${p_saude}.`)
    }

}
