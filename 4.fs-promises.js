const fs = require(`node:fs/promises`)

console.log('leyendo 1r archivo ...')
fs.readFile ('./archivo.txt','utf-8')
 .then(text => {
    console.log('primer texto: ', text)
 })
console.log('-->hacer cosas mientras lee archivo ...')

console.log('leyendo 2do archivo ...')
fs.readFile('./archivo2.txt','utf-8') 
 .then(text => {
    console.log('segundo texto: ', text)
 })
 
