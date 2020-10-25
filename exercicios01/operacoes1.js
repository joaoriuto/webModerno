const soma = (numero1, numero2) => {    
    console.log(`Soma entre ${numero1} e ${numero2} =`, numero1 + numero2)   
}
soma(3, 4)

const subtracao = function(valor1, valor2){
    console.log(`Subtração entre ${valor1} e ${valor2} =`, valor1 - valor2)
}
subtracao(88, 81)

const multiplicacao = (queIsso1, queIsso2) => {
    console.log('Multiplicação entre ' + queIsso1 + ' e '.concat(queIsso2).concat(' = ') + queIsso1 * queIsso2)
}
multiplicacao(7, 7)

const divisao = function(valor1, valor2){
    console.log(`Divisão entre ${valor1} e ${valor2} =`, (valor1 / valor2).toFixed(2))
}
divisao(88, 81)

