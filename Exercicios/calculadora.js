/**
 * Calculadora JS - Exemplo de uuso de funções
 * @author Ana silva 
 */

// importação de pacote
const prompt = require('prompt-sync')()

// variaveis globais
let num1, num2, opcao, resultado

// Funções das operaõs ( com parametros) recoemntado antes da função principal

function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    // validação
    if (num2 === 0) {
        console.log("Erro! Imporssivel dividir por 0")
    } else {
        return num1 / num2

    }
}
function raizQuadrada(num1) {
    return Math.sqrt(num1)
}

function porcentagem(num1, num2) {
    return (num1 / 100) * num2
}

// ========================================================================================
// Função principal (main)
function iniciarCalculadora() {
    //gerando um loop infinito (UX)
    do {
        mostrarMenu()
        //Escolha da opção
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return //encerra o loop infinito
                
            case 1:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite osegundo numero: "))
                resultado = somar(num1, num2)
                break
            case 2:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o sugundo numero: "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o sugundo numero: "))
                resultado = multiplicar(num1, num2)
                break
            case 4:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = dividir(num1, num2)
                break
            case 5:
                num1 = Number(prompt("Digite o valor: "))
                resultado = raizQuadrada(num1)
                break

            case 6:
                
               num1 = Number(prompt("Digite a porcentagem (%): "))
               num2 = Number(prompt("Digite o valor base: "))
               resultado = porcentagem(num1, num2)
              break
            default:
                console.log("opção invalida")
                prompt("Pressione [Enter] para continuar")
                continue //continua dentro do switch case
        }
        //Exibir o resultado
        console.log(`Resultado: ${resultado.toFixed(2)}`)
        prompt("Pressione [Enter] para continuar")

    } while (true)
}

// Função menu
function mostrarMenu() {
    console.clear()
    console.log("=== Calculadora JS ===")
    console.log("1. somar")
    console.log("2. subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. raizQuadrada")
    console.log("6. Porcentagem")
    console.log("0. sair")
}





//Executar a função principal 
iniciarCalculadora() 