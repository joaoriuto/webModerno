const jurosSimples = (capital, taxa, tempo) => {
    let juros = taxa / 100
    let calculo = capital * juros * tempo
    console.log(`Capital R$: ${capital},\nJuros: ${juros}%,\nTempo: ${tempo} ano(s),\nJuros final R$: ${calculo}`)
}
jurosSimples(100, 10, 4)

const jurosComposto = (inicial, taxa, tempo) => {
    let juros = (taxa / 100) 
    let capitalAtual = (inicial + juros) * tempo
    let calcular = capitalAtual * juros * tempo

    console.log(`Capital R$: ${inicial},\nJuros: ${juros}%,\nTempo: ${tempo} ano(s),\nJuros final R$: ${calcular}`)
}
jurosComposto(100, 10, 2)