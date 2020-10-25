function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("CéLoooko Cachorrera, passou com ".concat(nota))
    }
}
soBoaNoticia(9.9)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("é verdade eu era o ".concat(valor))
    }
}

//true
seForVerdadeEuFalo("Avião")
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo(['olha o', ' array ', 'passando', ' minha gente!'])
seForVerdadeEuFalo({})
seForVerdadeEuFalo({
    nome: 'sera que funfa?',
    cpf: 44654654
})


//false
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)