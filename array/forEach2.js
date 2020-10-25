Array.prototype.forEach2 = function(call){
    for (let i = 0;i < this.length; i++){
        call(this[i], i, this)
    }
}

const aprovados = ['Hermione', 'Alvo Dumbledore', 'Tonks', 'Sirius Black']

aprovados.forEach2(function (nome, indice){
    console.log(`${indice}) ${nome}`)
})