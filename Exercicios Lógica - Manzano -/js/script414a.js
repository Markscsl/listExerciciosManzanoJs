alert("Diferença maior e menor")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))

let total = 0

if (numero1 > numero2){
    total = numero1 - numero2
    alert(`A diferença do maior valor ${numero1} para o menor valor ${numero2} é de = ${total}`)
} else {
    total = numero2 - numero1
    alert(`A diferença do maior valor ${numero2} para o menor valor ${numero1} é de = ${total}`)
}