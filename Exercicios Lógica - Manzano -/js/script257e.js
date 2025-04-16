alert("Calculo de prestação")

let valor = parseFloat(prompt("Digite o valor da prestação: "))
let tempo = parseFloat(prompt("Digite o tempo de atraso: "))
let taxa = parseFloat(prompt("Digite a taxa de atraso: "))

let prestacao = valor + (valor * taxa / 100) * tempo

alert(`O valor a qual precisa ser pago é de: R$${prestacao}`)
