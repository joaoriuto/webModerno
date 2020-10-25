function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //metodo publlico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }


    //Metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()
console.log('Velocidade do uninho: ' + uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)

//Aplicando o modo automático
while(ferrari.getVelocidadeAtual() != 350){
    ferrari.acelerar()
}
console.log('Ferrari: '.concat(ferrari.getVelocidadeAtual()))

console.log(typeof Carro)   //Function ou Classe
console.log(typeof ferrari) //Objeto de Carro
