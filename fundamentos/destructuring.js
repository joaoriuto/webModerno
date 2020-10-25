//Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco:{
        logradouro: 'Rua CDE',
        numero: 9999
    }
}

const {nome, idade} = pessoa //extráia de Pessoa os atriburos nome e idade;
console.log(nome, idade) //Está acessivel no contexto atual

const { nome: nomeSalvo, idade: idadeSalva} = pessoa //Salvando o resultado em outras variaveis
console.log(nomeSalvo, idadeSalva) //Tornou-se acessivel neste contexto

const { sobrenome, outraVariavel = true} = pessoa //Passsando um atributo inexistente e com valor default,
console.log(sobrenome, outraVariavel)             //caso não exista

const {endereco:{logradouro, numero, cep}} = pessoa //Accesando o subitem, extraindo de pessoa
console.log(logradouro, numero, cep) // cep não existe e é undefined

