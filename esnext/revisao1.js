//let e const

{
    var a = 2
    let b = 3
    console.log(b) //Visivel apenas neste bloco
}

console.log(a) //Visivel em todo o contexto

//Template String
const produto = 'ipad'
console.log(`${produto} é caro`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 19}
console.log(i, nome)