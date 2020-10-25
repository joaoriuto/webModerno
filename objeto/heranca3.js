const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Anak'
console.log(filha1.corCabelo) //Herdou de pai

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' //Não faz efeito por ser um final
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let chave in filha2){
    filha2.hasOwnProperty(chave) ? console.log('Nativo: ' + chave) : console.log(`herança: ${chave}`)
}