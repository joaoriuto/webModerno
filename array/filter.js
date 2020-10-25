const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

const produtoCaro = prod => prod.preco > 500
const fragil = prod => prod.fragil 

const result = produtos.filter(produtoCaro).filter(fragil)

console.log(result)


//console.log(produtos.filter(function(p){
 //   return p
//}))