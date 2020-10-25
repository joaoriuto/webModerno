const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react) //Não funciona este modo
console.log(tecnologias.get('React').framework) //Jeito correto de acesso

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])
/**
 * A chave de um map pode ser variada como no exemplo acima
 * sendo possível ser uma função, objeto, número e etc.
 */

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //Verifica se contém a chave passada
chavesVariadas.delete(123) //Retorna True ou False se a operação foi sucesso
console.log(chavesVariadas.has(123)) //Verificando novamente, não existe mais a chave
console.log(chavesVariadas.size) //Retorna a quantidade de itens no array

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //A chave não pode ser repetida
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)