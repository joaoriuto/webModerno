const notas = [10.5, 5.95, 7.8, 8.9]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana Mosquito',
    sobrenome: 'Zookvs',
    idade: 39,
    peso: 55
}

for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}