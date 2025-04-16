alert("Descobrir maior e menor valor")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))
let numero4 = parseInt(prompt("Digite o quarto número: "))
let numero5 = parseInt(prompt("Digite o quinto número: "))

if ((numero1 > numero2) && (numero1 > numero3) && (numero1 > numero4) && (numero1 > numero5)) {
    alert(`O maior valor é: ${numero1}`)
} 

if ((numero1 < numero2) && (numero1 < numero3) && (numero1 < numero4) && (numero1 < numero5)) {
    alert(`o menor valor é: ${numero1}`)
} 

if ((numero2 > numero1) && (numero2 > numero3) && (numero2 > numero4) && (numero2 > numero5)) {
    alert(`O maior valor é: ${numero2}`)
} 

if ((numero2 < numero1) && (numero2 < numero3) && (numero2 < numero4) && (numero2 < numero5)) {
    alert(`O menor valor é: ${numero2}`)
} 

if ((numero3 > numero1) && (numero3 > numero2) && (numero3 > numero4) && (numero3 > numero5)) {
    alert(`O maior valor é: ${numero3}`)
} 

if ((numero3 < numero1) && (numero3 < numero2) && (numero3 < numero4) && (numero3 < numero5)) {
    alert(`O menor valor é: ${numero3}`)
} 

if ((numero4 > numero1) && (numero4 > numero2) && (numero4 > numero3) && (numero4 > numero5)) {
    alert(`O maior valor é: ${numero4}`)
} 

if ((numero4 < numero1) && (numero4 < numero2) && (numero4 < numero3) && (numero4 < numero5)) {
    alert(`O menor valor é: ${numero4}`)
} 

if ((numero5 > numero1) && (numero5 > numero2) && (numero5 > numero3) && (numero5 > numero4)) {
    alert(`O maior valor é: ${numero5}`)
} 

if ((numero5 < numero1) && (numero5 < numero2) && (numero5 < numero3) && (numero5 < numero4)) {
    alert(`O menor valor é: ${numero5}`)
}