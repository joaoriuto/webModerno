const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//definição de propriedades do objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //permite visibilidade
    writable: false, //semelhante ao Freeze()
    value: '01/01/2020' //valor definido
})

pessoa.dataNascimento = '01/01/2121'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object assign (ECMAScript 2015)
const destino = { a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4} //sobreescreve o a:
const joint = Object.assign(destino, obj1, obj2) // joga os intens 1 e 2 no destino

Object.freeze(joint)
joint.c = 1234
console.log(joint)