import {agenda, newContact} from "./dependecies.js"

const pushContacToList = document.getElementById("push")
pushContacToList.addEventListener("click",function(){

    let name = document.getElementById("nombre").value
    let number = document.getElementById("numero").value
    let contact = new newContact()
    contact.setName(name)
    contact.setPhoneNumber(number)
    agenda.push(contact)
})

const enlist = document.getElementById("showList")
enlist.addEventListener("click", function(){
    console.log(agenda.consoleAll())
    

})
