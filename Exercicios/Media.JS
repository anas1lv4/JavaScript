/**
 * calculo da media de 2 notas
 * exemplos de uso da biblioteca prompt-sync
 * @author Ana silva
 */

// importa pacote
const prompt = require('prompt-sync')()

// vsriaveis
let disciplina , nota1, nota2, media 

console.clear()
console.log("calculo da media de 2 notas")

// entrada de dados
disciplina = prompt("digite seu nome da disciplina: ")
//console.log(disciplina)
//console.log(typerof(disciplina))
nota1 = Number(prompt("Digite a nota1:"))
//console.log(nota1)
//console.log(typeof(nota1))
nota2 = Number(prompt("Digite a nota2:"))
//console.log(nota2)
//console.log(typeof(nota2))

//processamento
media = (nota1 + nota2) / 2 

// saida
console.log(`media:  ${media.toFixed(1)}`)
