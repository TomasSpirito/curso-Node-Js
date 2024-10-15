const path = require('node:path')

//barra separadora de carpeta segun SO.
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content', 'subfolder','test.txt')
console.log(filePath)
//muestra nombre del fichero
const base = path.basename('/toto/files-secret/password.txt')
console.log(base)
//muestra nombre del fichero sin .txt
const filename = path.basename('toto/files-secret/password.txt','.txt')
console.log(filename)
//te da la extension
const extension = path.extname('image.jpg')
console.log(extension)

