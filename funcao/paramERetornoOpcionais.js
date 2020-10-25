function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2,2)) //Passando parametros normalmente
console.log(area(2)) //omitindo o segundo parametro e retornando NaN (2 . undefined = NaN)
console.log(area()) // Nan
console.log(area(2, 3, 7, 22, 44)) //os primeiros são capturados e o restante é ignorado
console.log(area(5, 5)) //area maior do que o permitido, caindo no if.

