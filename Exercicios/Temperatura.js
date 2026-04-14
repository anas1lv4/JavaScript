/**
 * Execicio - conersão de temperatura
 * @author Ana silva
 */

const prompt = require('prompt-sync')()


// variaveis
let c,f

console.clear()
console.log("conversão de temperatura fahrenheit -> celsius")
//entrada
f = Number(prompt("digite a temperatura em fahrenheit:  "))

//processamento
c = (f - 32 ) * 5/9

//saida
console.log(`${f} °F equivalem a ${c.toFixed(1)} °C`)
