export default Cliente

const read = require('readline-sync')

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

    realizarAgendamento() {
        let dataValida = false;
        let dataConsulta;

        while(!dataValida){

            //pede a data em formato brasileiro
            let data = read.question("Informe a data e hora da consulta (dd/mm/yyyy hh:mm): ");

            //separa a data por date e horas
            let [parteData, parteHora] = data.split(" ")

            //verifica se existem as partes para data e para hora
            if(!parteData || !parteHora) {
                console.log("Formato inválido! Tente novamente.");
                continue;
            }

            //sepera as partes da data e horas e passa de String para numero
            let [dia, mes, ano] = parteData.split("/").map(Number);
            let [horas, minutos] = parteHora.split(":").map(Number);

            dataConsulta = new Date(ano, mes - 1, dia, horas, minutos);

            //verifica se a data e valida
            if(isNaN(dataConsulta)) {
                console.log("Data inválida! Tente novamente");
                continue;
            }

            if(dataConsulta.getDay() == 0 || dataConsulta.getDay() == 6 || horas >= 8 || horas <= 18) {
                console.log("A clínica funciona apenas de segunda a sexta, das 8:00 da manhã ás 18:00 da tarde.")
                continue;
            } 
        }
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