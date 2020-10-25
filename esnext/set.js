//A estrutura set não aceita repetição e não é indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians') //Pode ser adicionado 
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) //Retorna a quantidade
console.log(times.has('vasco')) //Nome em minúsculo é false
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
