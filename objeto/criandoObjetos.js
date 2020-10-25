//usando a notação literal

const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 = new Object()
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
       return preco * (1 - desc) 
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())