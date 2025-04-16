alert("Média do aluno")

let nota1 = parseFloat(prompt("Digite o valor da primeira nota do aluno: "))
let nota2 = parseFloat(prompt("Digite o valor da segunda nota do aluno: "))
let nota3 = parseFloat(prompt("Digite o valor da terceira nota do aluno: "))
let nota4 = parseFloat(prompt("Digite o valor da quarta nota do aluno: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 5){
    alert(`Parabéns! Você foi aprovado. \nSua média foi de: ${media}`)
} else {
    alert(`Você foi reprovado, sua média foi de: ${media}`)
}