console.log(Math.ceil(95.6))

const obj1 = {}
obj1.nome = 'Bola'
//obj1["nome"] = "Bola2" <- Não é uma boa prática.
console.log(obj1.nome) // <- Acessando o elemento por notação ponto.

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Executou o .exec publicamente")
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()