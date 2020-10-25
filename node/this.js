
//-> Dentro do escopo global deste módulo o This não apronta para o objeto global e nem para module

console.log(this === global)
console.log(this === module)


//-> O this aponta para o module.exports e para exports, já que eles se apontam  
 
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()