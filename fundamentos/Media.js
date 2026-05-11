/**
 * Estudo para estrutura de controle if else
 * cálculo da média
 * @author Ana silva
 */

// importação de pacotes
const color = require('colors')
const prompt = require('prompt-sync')()

// variaveis
let nota1, nota2, media 

console.clear()
console.log("calculo da media")

// entrada
nota1 = Number(prompt("Digite a nota 1:"))
nota2 = Number(prompt("Digite a nota2: "))

// processamento
media = (nota1 + nota2) / 2

// saida
console.log(`Media: ${media.toFixed(1)}`)

 // uso da estrutura if else para determinar se o aluno está aprovado ou reprovado
 if (media < 5) {
    console.log("REPROVADO".red)
 } else {
    console.log("APROVADO".cyan)
 }