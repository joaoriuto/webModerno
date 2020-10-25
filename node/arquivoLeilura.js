const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//modo sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Lendo o arquivo json de forma simples

const config = require('./arquivo.json')
console.log(config.db)

//lendo o conteúdo de uma pasta

fs.readdir(__dirname, (error, arquivos) => {
    console.log('conteúdo da pasta:::')
    console.log(arquivos)
})

