import { SearchFG } from "./main.js"
const form = document.getElementById('physics-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let miuInput = parseFloat(document.getElementById('input').value)
    let Ninput = parseFloat(document.getElementById('inputN').value)

    let result = SearchFG(miuInput, Ninput)

    const para = document.createElement('p')

    para.innerText = result 

    document.body.appendChild(para)
})


