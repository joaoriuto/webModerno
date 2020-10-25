
function tratarErroNumero(erro){
    throw new Error ('Não é um número válido!')
}

const imprimirResultado = function(nota){

    if(nota >= 7){
        try{
        console.log('Aprovadão!')
        }catch(e){
            tratarErroNumero(e)
        }
        
    }else{
        console.log('Tente ontra vez')
    }
}

imprimirResultado('a') 