const trianguloArea = (ladoA, ladoB, ladoC) => {
    if (ladoA === ladoB && ladoB === ladoC){
        console.log(`Equilátero`)
    }else if (ladoA != ladoB && ladoA != ladoC){
        console.log('Escaleno')
    }else if (ladoA != ladoB != ladoC){
        console.log("Isóceles")
    }else{
        console.log("valor inválido")
    }
}

trianguloArea(2, 2, 2)
trianguloArea(2, 2, 3)
trianguloArea(1, 2, 3)