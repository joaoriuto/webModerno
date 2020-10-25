function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let contador = 0
let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 20)
    console.log(`Opção foi: ${opcao}.`)
    contador ++
}

console.log('Até a próxima!' + '\nNúmero de tentativas: '.concat(contador))