let isAtivo = true

console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("\nOs casos em que são verdadeiros\n")

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = 22))

console.log("\nOs casos em que são falsos\n")

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))
