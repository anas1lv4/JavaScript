/**
 * Jogo do dado
 * Exemplo de uso da estrutura do white 
 * @author Ana silva
 */

const prompt = require('prompt-sync')
let novojogo = "n"

do { 
  console.clear()
  console.log("jogo do dado")
  prompt('Pressione[enter] para lançar o dado...')
  console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)
} while (novojogo === "s")