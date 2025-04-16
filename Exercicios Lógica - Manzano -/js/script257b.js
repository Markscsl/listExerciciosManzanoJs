alert("Conversor de temperatura")

let grausF = parseFloat(prompt("Digite o valor dos graus em Fahrenheint: "))

let grausC = (grausF - 32) * 5 / 9

alert(`A temperatura de: ${grausF}ºF em graus Celsius é de: ${grausC}ºC`)