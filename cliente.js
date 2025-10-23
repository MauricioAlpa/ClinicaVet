import Agendamento from './Agendamento.js'
import read from "readline-sync";

export default class Cliente {
    #cpf
    #nome
    #raça
    #especie
    #pSaude
    constructor(cpf,nome,especie, raça, pSaude) {
        this.#cpf = cpf
        this.#nome = nome
        this.#raça = raça
        this.#especie = especie
        this.#pSaude = pSaude
    }

    getCpf() {
        return this.#cpf;
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
    getPsaude() {
        return this.#pSaude
    }

    setCpf(cpf){
        this.#cpf = cpf;
    }

    setN_consultas(pSaude) {
        this.#pSaude = pSaude
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

    setPsaude(pSaude) {
        this.#pSaude = pSaude
    }

    realizarAgendamento(adm) {
        let dataValida = false;
        let dataConsulta;
        let medicoPrefer;
        let admC = adm;

        while(!dataValida){

            //pede a data em formato brasileiro
            let data = read.question("Informe a data e hora da consulta (dd/mm/yyyy hh:mm): ");
            medicoPrefer = read.question("Qual o médico de preferência?").toLowerCase();
            

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

            //so faz o agendamento nos horarios em que a clinica esta aberta
            if(dataConsulta.getDay() == 0 || dataConsulta.getDay() == 6 || horas < 8 || horas >= 18) {
                console.log("A clínica funciona apenas de segunda a sexta, das 8:00 da manhã ás 18:00 da tarde.")
                continue;
            }

            let agendamento = new Agendamento(this.getNome(), dataConsulta);

            let listaM = admC.getListaDeMedicos();
            //consulta se o medico escolhido tem horario disponivel
            for(let i = 0; i < listaM.length; i++){
                if(listaM[i].getNomeMedico() == medicoPrefer) {
                    for(let k = 0; k < listaM[i].getAgendamentos().length; k++) {

                        let ag = listaM[i].getAgendamentos()[k];
                        if(ag.getData().getTime() === dataConsulta.getTime()){
                            console.log("Horário ocupado, escolha outro por gentileza");
                            return;
                        }
                    }

                    listaM[i].setAgendamentos(agendamento);
                    console.log(`Consulta agendada com o Dr(a). ${medicoPrefer} para ${dataConsulta}`);
                    dataValida = true;
                    return;
                }
            }

        }
    }

    comprar() {
        let n = Number(read.question("Quantidade de itens:"));
        console.log(`Compra de ${n} itens realizada com sucesso!`)
    }

}