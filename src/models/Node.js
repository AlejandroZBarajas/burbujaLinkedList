export class Node {
    #data
    #previous
    #next


    constructor(data){
        this.#data = data
        this.#previous = undefined
        this.#previous = undefined
    }
    getData () {
        return this.#data
    }
    
    getPrevious(){
        return this.#previous
    }

    setPrevious(previous){
        this.#previous = previous
    }
    setNext(next){
        this.#next=next
    }
    getNext(){
        return this.#next
    }
} 