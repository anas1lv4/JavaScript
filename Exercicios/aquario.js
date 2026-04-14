/**
 * Cálculo do volume de um aquário
 * @author Ana silva
 */

const prompt = require('prompt-sync')()

// variaveis
let Comprimento, largura, altura, volume


console.clear()
console.log("calcular o volume e exibir o resultado em litros") 

// entrada 
comprimento = Number(prompt(" Digite o Comprimento em centimetros: "))
largura = Number(prompt("Digite a largura: "))
altura = Number(prompt("Digite a Altura: "))

// processamento 
volume = (comprimento * largura * altura) / 100

// saida

console.log(`Volume: ${volume.toFixed(1)}`)