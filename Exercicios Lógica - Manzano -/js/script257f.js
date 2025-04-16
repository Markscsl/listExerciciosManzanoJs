alert("Troca de valores")

let valorA = parseInt(prompt("Digite o valor A: "))
let valorB = parseInt(prompt("Digite o valor B: "))

let valorC = valorA
valorA = valorB
valorB = valorC

alert(`Os valores foram trocados, o valor A agora vale: ${valorA} e o valor B agora vale ${valorB}.`)