const pessoa = function(nome){
    return{
        nome: nome,
        falar: function(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}

let p1 = new pessoa('João')
p1.falar()

const criarPessoa = (nome) => {
    return{
        nome,
        falar(){
            console.log(`Meu name é ${nome}`)
        }
    }
}

let p2 = criarPessoa('Yosh')
p2.falar()