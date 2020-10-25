console.log(soma(3, 4))

//fuction declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}

console.log(sub(3, 4)) //Deve ser declarado depois da construção

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4)) //Deve ser declarado depois da construção