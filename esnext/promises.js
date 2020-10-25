function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!!!')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

    /**
     * Em promisse temos duas vias: Sucesso ou regeição, quando o processo é abortado
     * Essas situações são compostas por callbacks. *É uma operação assíncrona.
     * 
     * A função resolve aceita apenas um parâmetro e caso seja necessário passar mais de
     * um item, então devemos criar um objeto com esses parâmetros.
     * O parâmetro de resolve é capturado pela função then e quando está encadiada vai sendo
     * concatenada.
     * 
     * Quando definimos um reject, a mensagem é capturada pela função catch.
     */