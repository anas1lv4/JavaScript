/**
 * estudo da estrutura de controle if else
 * etanol e gasolina
 * @author Ana silva
 */

const color = require('colors')
const prompt = require('prompt-sync')()

// variaveis
let etanol, gasolina


etanol = Number(prompt("Digite o valor do etanol:"))
gasolina = Number(prompt("digite o valor da gasolina:"))

// Processamneto + saida

 if (etanol < 0.7* gasolina) {
    console.log("abasteca com etanol".red)
 } else {
    console.log("abasteça com gasolina".cyan)
 }

