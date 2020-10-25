/**
 * Neste primeiro for of o retorno será o valor de cada
 * caractere e não o indice
 */
for (let letra of "Cod3r"){
    console.log(letra)
}

/**
 * Neste caso o for retornará o indice de cada elemento e
 * não os valores de string
 */
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

/**
 * Neste caso, o retorno é o valor do array e não a chave
 */
for (let assunto of assuntosEcma){
    console.log(assunto)
}

// Objeto do tipo Map com arrays chave string e valor tipo objeto
const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])
/**
 * A variável assunto recebe os valores da constante assuntosMap
 * o for of entrega o conjunto de chave valor ao assunto e abaixo
 * é impresso o resultado guardado.
 */
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//Para exibir as chaves, basta utilizar a função keys
for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//Exibindo os valores de cada chave com a função values
for (let  valor of assuntosMap.values()){
    console.log(valor)
}

//Exibindo o conjunto de chave e valor de cada item com entries (desestruturação)
for ( let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

//Funciona com Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    console.log(letra)
}

