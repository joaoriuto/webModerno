//Operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.599}
const clone = { ativo: true, ...funcionario }
console.log(clone)
/**
 * a constante clone recebe um objeto com o atributo ativo e em seguida
 * recebe o operador spread com as informações que estão na constante
 * funcionario. O clone não altera funcionário por ser outro objeto
 * na memória.
 * 
 */

 //Usar o spread com array
 const grupoA = ['João', 'Pedro', 'Gloria']
 const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
 console.log(grupoFinal)
 /**
  * Neste caso o operador spread espalhou os itens do array grupoA,
  * dentro do Array grupoFinal. Funciona em objetos, retornando outro
  * objeto e em Array, retornando outro Array.
  */