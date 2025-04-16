alert("Real para dólar")

let valorReal = parseFloat(prompt("Digite o valor que você possui em dolares: "))
let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dolar: "))

let valorDolar = valorReal * cotacaoDolar

alert(`Você possui R$${valorDolar} em reais`)