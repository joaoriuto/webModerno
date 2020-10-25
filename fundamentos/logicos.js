function compras(job1, job2){
    const comprarSorvete = job1 || job2
    const comprarTv50 = job1 && job2
    //const comprarTv32 = !!(job1 ^ job2) //bitwise xor
    const comprarTv32 = job1 != job2
    const manterSaude = !comprarSorvete //Operador unário

    return {comprarSorvete,comprarTv50,comprarTv32,manterSaude}
}

console.log(compras(true, true))
console.log("\n")
console.log(compras(true, false))
console.log("\n")
console.log(compras(false, true))
console.log("\n")
console.log(compras(false, false))