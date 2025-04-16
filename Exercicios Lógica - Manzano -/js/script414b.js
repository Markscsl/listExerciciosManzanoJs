alert("Apresentar número positivo.")

let numero = parseInt(prompt("Digite um número qualquer: "))

if (numero < 0) {
    let soma = numero * -1
    alert(`O número ${numero} foi transformado em positivo: ${soma}`)
} else {
    alert(`O número ${numero} ja é positivo.`)
} 