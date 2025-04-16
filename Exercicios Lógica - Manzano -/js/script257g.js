alert("Propriedade distributiva")

let numero1 = parseInt(prompt("Digite o primeiro número para o calculo: "))
let numero2 = parseInt(prompt("Digite o segundo número para o calculo: "))
let numero3 = parseInt(prompt("Digite o terceiro número para o calculo: "))
let numero4 = parseInt(prompt("Digite o quarto número para o calculo: "))

let somaNumero1b = 0
let somaNumero1c = 0
let somaNumero1d = 0

let multiplicacaoNumero1b = 0
let multiplicacaoNumero1c = 0
let multiplicacaoNumero1d = 0

somaNumero1b = numero1 + numero2
somaNumero1c = numero1 + numero3
somaNumero1d = numero1 + numero4

multiplicacaoNumero1b = numero1 * numero2
multiplicacaoNumero1c = numero1 * numero3
multiplicacaoNumero1d = numero1 * numero4

alert(`O resultado da soma de ${numero1} + ${numero2} é = ${somaNumero1b} \n O resultado da soma de ${numero1} + ${numero3} é = ${somaNumero1c} \n O resultado da soma de ${numero1} + ${numero4} é = ${somaNumero1d}`)

alert(`O resultado da multiplicação de ${numero1} * ${numero2} é = ${multiplicacaoNumero1b} \n O resultado da multiplicação de ${numero1} * ${numero3} é = ${multiplicacaoNumero1c} \n O resultado da multiplicação de ${numero1} * ${numero4} é = ${multiplicacaoNumero1d}`)

let somaNumero2b = 0
let somaNumero2c = 0

let multiplicacaoNumero2b = 0
let multiplicacaoNumero2c = 0

somaNumero2b = numero2 + numero3
somaNumero2c = numero2 + numero4

multiplicacaoNumero2b = numero2 * numero3
multiplicacaoNumero2c = numero2 * numero4

alert(`O resultado da soma de ${numero2} + ${numero3} é de = ${somaNumero2b} \n O resultado da soma de ${numero2} + ${numero4} é de = ${somaNumero2c}`)

alert(`O resultado da multiplicação de ${numero2} * ${numero3} é de = ${multiplicacaoNumero2b} \n O resultado da multiplicação de ${numero2} * ${numero4} é de = ${multiplicacaoNumero2c}`)

let somaNumero3 = 0
let multiplicacaoNumero3 = 0

somaNumero3 = numero3 + numero4
multiplicacaoNumero3 = numero3 * numero4

alert(`O resultado da soma de ${numero3} + ${numero4} é de = ${somaNumero3}`)

alert(`O resultado da multiplicação de ${numero3} * ${numero4} é de = ${multiplicacaoNumero3}`)