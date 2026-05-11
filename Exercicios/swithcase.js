/**
 * Exemplo de uso da estrutura switch case
 * @author Ana silva
 */
 
const prompt = require('prompt-sync')()
 
let opcao
 
console.clear()
console.log('Menu de opções')
console.log('')
console.log('1 - Cadastrar cliente')
console.log('2 - Cadastro de produtos')
console.log('3 - Relatórios')
 
opcao = Number(prompt('Digite a opção desejada:'))
 
//Uso da estrutura switch case para tratamento do valor digitado
//Obs: essa estrutura aceita variaveis do tipo números inteiros e caracteres únicos, dentro da estrutura o default é opcional
 
//entrada de dados
let nome = prompt('Digite seu nome: ')
let idade = Number(prompt('Digite sua idade: '))
let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite a sua altura: '))
 
switch (opcao){
    case 1:
        console.clear()
        console.log('Oção 1 Tela de cadastro de cliente')
        console.log(`Olá, ${nome}!`)
        console.log(`Idade: ${idade}`)
        console.log(`Peso: ${peso}`)
        console.log(`Altura: ${altura}`)
        break
    case 2:
        console.clear()
        console.log('Oção 2 Tela de cadastro de produtos')
        break
    case 3:
        console.clear()
        console.log('Oção 3 Tela de relatórios')
        break
    default:
        console.clear()
        console.log('Opção inválida')
        break
}
 