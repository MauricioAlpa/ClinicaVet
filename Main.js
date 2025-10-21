export default Main
import read from "readline-sync";
import Adm from "./Adm.js";

let adm = new Adm();

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
        }
    }

}

function menuAdm() {
    let op = 0;
    
    while(op != 3){
        console.log("(1)Cadastrar cliente:\n(2)Cadastrar Medico\n(3)Encerrar sessão")
        op = Number(read.question(""));
        console.clear();
        switch(op){
            case 1: 
                adm.registrarCliente();
                break;
            
            case 2:
                adm.registrarMedico();
        }
    }
}

Main();