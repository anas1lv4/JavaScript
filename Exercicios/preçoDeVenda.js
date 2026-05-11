/**
 * @author Ana silva
 * Calculo do preço de Vendas de um produto
 */
 
 // importar pacote 
 const prompt = require('prompt-sync')()

 // variaveis
 let PreçoCusto, custo, PreçoVenda 

 console.clear

 // entrada
PreçoCusto = Number(prompt("Digite o preço de custo:"));
lucro = Number(prompt("Digite a margem de lucro (%):"));

// Processamento 
PreçoVenda = PreçoCusto + ((lucro * PreçoCusto) / 100);

// saida

console.log(`Preço de venda:  ${PreçoVenda.toFixed(2)}`)