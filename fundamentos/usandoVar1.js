{
    {
        {
            {
                { var sera = 'Será que está visível globalmente???'}
            }
        }
    }
}
console.log(sera) //Não importa em quantas camadas a variável se encontre;

function teste(){
    var local = "Não irá aparecer, haha! ;("
    console.log(local)
}
//console.log(local) //Erro de undefined ;]

teste()