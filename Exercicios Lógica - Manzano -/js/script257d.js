alert("Tempo de viagem e combustivel gasto")

let tempoGasto = parseFloat(prompt("Digite quanto tempo demorou a viagem: "))
let velocidadeMedia = parseFloat(prompt("Qual foi a velocidade média?: "))

let distanciaPercorrida = tempoGasto * velocidadeMedia
let litrosUtilizados = distanciaPercorrida / 12

alert(`A velocidade foi de ${velocidadeMedia}km/h, o tempo gasto na viagem foi de ${tempoGasto} horas, a distancia percorrida foi de ${distanciaPercorrida}km e os litros usados foram de ${litrosUtilizados.toFixed(2)} litros.`)