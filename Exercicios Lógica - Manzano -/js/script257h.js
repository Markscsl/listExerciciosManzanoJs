alert("Descobrir volume de uma caixa")

let comprimentoCaixa = parseFloat(prompt("Digite o valor do comprimento da caixa: "))
let larguraCaixa = parseFloat(prompt("Digite o valor da largura da caixa: "))
let alturaCaixa = parseFloat(prompt("Digite o valor da altura da caixa: "))

let volumeCaixa = comprimentoCaixa * larguraCaixa * alturaCaixa

alert(`O volume total da caixa é de: ${volumeCaixa}`)