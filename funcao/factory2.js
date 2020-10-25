function criarProduto(nome, preco){
    return{
        nomeProduto: nome,
        precoProduto: preco,        
        desconto: 0.1
    }
}

console.log(criarProduto('Disquete', 7.0))