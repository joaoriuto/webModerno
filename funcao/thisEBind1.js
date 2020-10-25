const pessoa = {
    saudacao: 'bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() // okay

const falar = pessoa.falar
falar() //undefined (conflito entre paradigmas: funcional e oo)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //Bind amarra o this no objeto pessoa