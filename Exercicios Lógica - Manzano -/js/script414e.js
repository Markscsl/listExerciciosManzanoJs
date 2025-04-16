alert("Equação de segundo grau")

let valorA = parseInt(prompt("Digite o valor de A: "))
let valorB = parseInt(prompt("Digite o valor de B: "))
let valorC = parseInt(prompt("Digite o valor de C: "))

let delta = valorB ** 2 - 4 * valorA * valorC

if (delta == 0){
    let raiz1 = (- valorB + Math.sqrt(delta)) / (2 * valorA)
    alert(`A unica raíz obtida foi:${raiz1}`)
} else if (delta < 0){
    alert("A equação não possui raízes reais")
} else {
    let raiz2 = (- valorB + Math.sqrt(delta)) / (2 * valorA)
    let raiz3 = (- valorB - Math.sqrt(delta)) / (2 * valorA)
    alert(`As raízes desta equação são: ${raiz2} e ${raiz3}`)
}