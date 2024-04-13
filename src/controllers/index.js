import {agenda} from "./dependecies.js"
import { Contacto } from "../models/Contacto.js"

const pushContacToList = document.getElementById("push")
pushContacToList.addEventListener("click",function(){

    let name = document.getElementById("nombre").value
    let number = document.getElementById("numero").value

    let contacto = new Contacto()
    contacto.setName(name)
    contacto.setPhoneNumber(number)
    agenda.push(contacto)
    agenda.consoleAll()
})

const enlist = document.getElementById("showList")
enlist.addEventListener("click", function(){
    console.log(agenda.consoleAll())
    

})
