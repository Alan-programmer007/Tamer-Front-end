/*
const ul = document.querySelector("ul")
console.log(ul)
console.log(ul.innerHTML)
console.log(ul.innerText)

const li = document.createElement("li")
li.innerText = "Item teste"
console.log(li)
console.log(li.innerHTML)
console.log(li.innerText)
ul.appendChild(li)
*/

const bntVerificar = document.querySelector("#button-verificar")

const bntVoltar = document.querySelector("#button-voltar")

bntVerificar.addEventListener('click', ()=>{

    const inputValue = document.querySelector("input").value

    if(inputValue == ""){
        alert("Digite um valor!")
    }else{
        
    const numero = Number(3)

    console.log(numero)

    const resultado = document.querySelector("h2")

    if (numero % 2 == 0)
        resultado.innerText = `O numero ${numero} é par`
    else
        resultado.innerText = `O numero ${numero} é ímpar`

        document.querySelector("input").value = ""
    }
    
})