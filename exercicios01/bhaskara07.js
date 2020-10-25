const bhaskara = (a, b, c) => {
    let delta = Math.pow(b, 2) - 4 * a * c
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - Math.sqrt(delta)) / 2 * a

    if (delta < 0){
        console.log("Delta negativo")
    }else{
        console.log(`Delta: ${delta}\nX1: ${x1}\nX2: ${x2} `)
    }
}

bhaskara(1, 12, -13)