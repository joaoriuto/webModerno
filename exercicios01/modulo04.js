const divisaoEResto = function(divisor, dividendo){
    let divisao = divisor / dividendo
    let resto = divisor % dividendo
    
    console.log(`Divisão entre ${divisor} e ${dividendo} = ${divisao} 
    com resto: ${resto}`)
}
divisaoEResto(2,5)