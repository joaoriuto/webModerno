//Usando promisse:
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
       http.get(url, res => {
           let resultado = ''

           res.on('data', dados => {
               resultado += dados
           })

           res.on('end', () => {
               try{
                resolve(JSON.parse(resultado))
               } catch(e) {
                   reject(e)
               }
           })
       })
   })
     
}

/**
 * let nomes = []
 * getTurma('A', alunos => {
 *    console.log(alunos[0].nome)   <- Seleciona o valor salvo no primeiro indice do array
 *                                      Com o parâmetro A da lista que foi convertida.
 * })
 */

//  let nomes = []
//  getTurma('A').then (alunos => {
//  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then (alunos => {
//         nomes = nomes.concat(alunos.map( a => `B: ${a.nome}`))
//         getTurma('C').then (alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
//  }) //Aninhamento de callbacks é conhecido como callback hell.

 //Refatorando:

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))