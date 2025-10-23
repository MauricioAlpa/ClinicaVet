export default class Agendamento {
    #nCliente
    #data 

    constructor(cliente, data) {
        this.#nCliente = cliente;
        this.#data = data; 
    }

    getData() {
        return this.#data;
    }

    setData(data) {
        this.#data = data;
    }

    getNcliente() {
        return this.#nCliente;
    }

    setNcliente(cliente) {
        this.#nCliente = cliente;
    }
}