const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?

/**********************************************************************/
//Minha Resposta:

// const bolsa = alunos.map(function(b){
//     return b.bolsista
// })

// console.log(bolsa)

// const todos = bolsa.reduce(validaBolsa => validaBolsa == true)
// console.log(`Todos são bolsistas? ${todos}`)

// const algumBolsista = bolsa.reduce()
// console.log(algumBolsista)
/***********************************************************************/

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const verificarBolsa = alunos.map(a => a.bolsista).reduce(todosBolsistas)

console.log(verificarBolsa)

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))