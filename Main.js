export default Main
import read from "readline-sync";
import Adm from "./Adm.js";
import Agendamento from './Agendamento.js'
import Medico from './Medico.js'
import Cliente from "./cliente.js"
import Plano from "./planos.js";
import { Pbasico } from "./Pbasico.js";
import { Pcompleto } from "./Pcompleto.js";


var adm = new Adm();

function Main() {
    console.log("Entrar como:\n(1)Administrador\n(2)Cliente");
    let acess = Number(read.question(""));
    console.clear();
    while(true){
        if(acess == 1){
            let admUser = read.question("Qual o nome do usuário:");
            let admSenha = read.question("Qual a senha:");

            if(admUser == adm.getNomeAdm() && admSenha == adm.getSenha()){
                console.log("Login realizado com sucesso!")
                console.clear();
                menuAdm();
                break;
            } else {
                console.log("Senha ou user errados");
            }
        }else if(acess == 2) {
            let listaC = adm.getListaDeClientes();
            let cpfUser = read.question("CPF cliente:")
            for(let i = 0; i < listaC.length; i++){
                if(listaC[i].getCpf() == cpfUser){
                    console.clear();
                    menuCliente(listaC[i]);
                    break;
                }else {
                    console.log("User não cadastrado.")
                }
            }

        }
    }

}

function menuAdm() {
    let op = 0;
    
    while(op != 4){
        console.log("(1)Cadastrar cliente:\n(2)Cadastrar Medico\n(3)Voltar ao menu principal\n(4)Encerrar sessão")
        op = Number(read.question(""));
        console.clear();
        switch(op){
            case 1: 
                adm.registrarCliente();
                break;
            
            case 2:
                adm.registrarMedico();
                break;
            
            case 3:
                Main();
                break;
        }
    }
}

function menuCliente(cliente) {
    let op = 0;
    let clienteAtual = cliente;

    while(op != 4){
        console.log("(1)Agendar Consulta:\n(2)Comprar\n(3)Voltar ao menu principal\n(4)Encerrar sessão")
        op = Number(read.question(""));
        console.clear();
        switch(op){
            case 1: 
                clienteAtual.realizarAgendamento(adm);
                break;
            
            case 2:
                clienteAtual.comprar();
                break;
            
            case 3:
                Main();
                break;
        }
    }
}

Main();