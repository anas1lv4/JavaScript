/**
 * Estudos das funçoes
 * @author Ana silva
 */

//Função literal (simples)

function hello() {
  console.clear()
  console.log("hello function") 
  console.log("Tipo: " + typeof (hello)) //apoio ao entendimento da lógica 
}

// para executar uma função basta "chamar" o nome da função, não esquecendo dos parênteses
hello()

// Função anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello2 = function() {
    console.log("hello function assigned")
    console.log("Tipo: " + typeof (hello2)) //apoio ao entendimento da lógica 
}

hello2()

// Função anônima simplificada >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello3 = () => {
    console.log("hello arrow function assigned")
    console.log("Tipo: " + typeof (hello3)) //apoio ao entendimento da lógica 
}

hello3()
// Funçoes simples com parâmetros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2) {
    console.log("Tipo: " + typeof (somar)) //apoio ao entendimento da lógica 
    return (console.log(num1 + num2))
    
}

//neste caso dentro de parênteses, fornecemos os numeros que serão somados na função
somar(2, 3)

// Função anônima com parametro >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarA = function(num1, num2) {
    console.log("Tipo: " + typeof (somarA)) //apoio ao entendimento da lógica 
    return (console.log(num1 + num2))
}
somar(6, 7)

// Função anônima simplificada com parametro >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarAF = (num1, num2) => {
    console.log("Tipo: " + typeof (somarAF)) //apoio ao entendimento da lógica 
    return (console.log(num1 + num2))
}

somarAF(6, 7)

// Funçoes anônima super simplificada com paramêtros >>>>>>>>>>>>>>>>>>>
// CUIDADO! Neste caso o retorno é implicito
const somarAFS = (num1,num2) => (console.log(num1 + num2))

somarAFS(2, 7)
