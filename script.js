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
bntVerificar.addEventListener('click', ()=>{

    const inputValue = document.querySelector("input").value

    if(inputValue == ""){
        alert("Digite um valor!")
    }else{
        
    const numero = Number(inputValue)

    console.log(numero)

    const resultado = document.querySelector("h2")

    if (numero % 2 == 0)
        resultado.innerText = `O numero ${numero} é par`
    else
        resultado.innerText = `O numero ${numero} é ímpar`

        document.querySelector("input").value = ""

        handleClick()
    }
})

const bntVoltar = document.querySelector("#button-voltar")
bntVoltar.addEventListener('click', ()=>{
        handleClick()
})

function handleClick(){
    const saida = document.querySelector("#resultado")

    saida.classList.toggle("hiden")

    const main = document.querySelector("#main")

    main.classList.toggle("hiden")
}
