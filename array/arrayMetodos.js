const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um item ao final do array
console.log(pilotos)

pilotos.shift() //Remove o primeiro item
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa quebrou o carrinho
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //cria um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)