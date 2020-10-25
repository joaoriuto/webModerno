const notas = [7.7, 5.5, 7.6, 2.7, 14.4, 3.2, 5.5]

//sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

// Com arrow functions

const notasMenorQueSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQueSete)
console.log(notasBaixas3)