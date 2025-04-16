alert("Dolar para real")

let valorDolar = parseFloat(prompt("Digite o valor que você possui em dolares: "))
let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dolar: "))

let valorReal = valorDolar * cotacaoDolar

alert(`Você possui R$${valorReal} em real`)