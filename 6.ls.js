const fs = require('node:fs')
//lee directorio
fs.readdir ('.',(err,files) => {
    if(err) {
        console.log('error al leer el directorio: ', err)
        return;
    }

    files.forEach(file => { //listado de ficheros
        console.log(file)
    })
})