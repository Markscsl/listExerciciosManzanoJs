alert("Dispor três valores em ordem crescente.")

let numero1 = parseInt(prompt("Digite o primeiro valor: "))
let numero2 = parseInt(prompt("Digite o segundo valor: "))
let numero3 = parseInt(prompt("Digite o terceiro valor: "))

if ((numero1 < numero2) && (numero2 < numero3)) {
    alert(`Números em ordem crescente: ${numero1}, ${numero2}, ${numero3}.`)

} else if ((numero1 < numero3) && (numero3 < numero2)) {
    alert(`Números em ordem crescente: ${numero1}, ${numero3}, ${numero2}.`)

} else if ((numero2 < numero1) && (numero1 < numero3)) {
    alert(`Números em ordem crescente: ${numero2}, ${numero1}, ${numero3}.`)

} else if ((numero2 < numero3) && (numero3 < numero1)) {
    alert(`Números em ordem crescente: ${numero2}, ${numero3}, ${numero1}.`)

} else if ((numero3 < numero1) && (numero1 < numero2)) {
    alert(`Números em ordem crescente: ${numero3}, ${numero1}, ${numero2}.`)

} else { 
    alert(`Números em ordem crescente: ${numero3}, ${numero2}, ${numero1}.`)
}