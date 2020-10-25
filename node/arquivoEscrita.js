const fileSistem = require('fs')

const produto = {
    nome: 'Celular',
    preco: 400,
    desconto: 0.15
}

fileSistem.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro|| 'Arquivo salvo com sucesso!')
   
})