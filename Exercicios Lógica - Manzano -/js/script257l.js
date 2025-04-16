alert("Soma dos quadrados")

let valorA = parseInt(prompt("Digite o primeiro valor: "))
let valorB = parseInt(prompt("Digite o segundo valor: "))
let valorC = parseInt(prompt("Digite o terceiro valor: "))

let somaValores = valorA + valorB + valorC

let quadradoValores = somaValores ** 2

alert(`A soma dos valores  ${valorA} + ${valorB} + ${valorC} é = ${somaValores}  \n E o quadrado da soma desses valores é = ${quadradoValores}`)