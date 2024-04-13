export class Contacto{
    #nombreCont
    #numeroTelefonico

    constructor(name, number){
        this.#nombreCont=name
        this.#numeroTelefonico=number
    }

    setName(name){
        this.#nombreCont=name
    }
    getNameCont(){
        return this.#nombreCont
    }
    setPhoneNumber(number){
        this.#numeroTelefonico=number
    }
    getPhoneNumber(){
        return this.#numeroTelefonico
    }
}