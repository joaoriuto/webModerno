function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

/**
 * A função real recebe dois parâmetros e a constante resultado
 * junsta os dados em um array.
 * Valores sofre em forEach de valor e indice que terão ação de
 * um operador ternário verificando se valor é um número. Caso 
 * não seja, retorna nada e caso seja um número retorna uma template
 * string com o sina R$ + o valor com duas casas decimais.
 * resultado.push adiciona as partes pelo o valor do indice do array
 * O retorno é o resultado.join que une tudo. 
 * 
 */