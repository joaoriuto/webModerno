const exibirValor = valor => {
    
    let valorFinal = parseFloat(valor.toFixed(2))    
    console.log(`R$ ${valorFinal.toString().replace(".",",")}`)
}
exibirValor(0.350100)
exibirValor(10.9846511321)