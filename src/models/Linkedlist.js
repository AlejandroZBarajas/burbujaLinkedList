import {Node} from "./Node.js"

export class LinkedList {
    #head
    #tail

    constructor(){
        this.#head = undefined
        this.#tail = undefined
    }

    push(item){

        let newNode = new Node (item)
        if(this.#head==undefined){
            this.#head = newNode
            console.log("head data: "+this.#head)
        }else{
            if(this.#tail == undefined){
                this.#tail = newNode
                this.#tail.setPrevious(this.#head)
                this.#head.setNext(this.#tail)
                console.log("head: "+this.#head.getData()+" tail: "+this.#tail.getData())
            }else{
                let current = this.#tail
                this.#tail.setNext(newNode)
                this.#tail=newNode
                this.#tail.setPrevious(current)      
                console.log("head: "+this.#head.getData()+" head.next: "+this.#head.getNext().getData()+" tail.previous: "+this.#tail.getPrevious().getData()+" tail: "+this.#tail.getData())          
            }
        }
    }

    isEmpty(){
        if(this.#head==undefined)
        return true
    }
    
    consoleAll(){
        console.log("entra a la funcion consoleALL")
        let auxiliar=this.#head
        let i=1
        do {
            console.log("vuelta "+i)            
            console.log(auxiliar)
            auxiliar = auxiliar.getNext()
            i++
        } while (auxiliar.getNext()!=undefined);
    }
}