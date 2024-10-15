// argumentos de entrada
console.log(process.argv)

//controlar el proceso y su salida.
//process.exit(1)  

//controlar eventos del proceso.
process.on('exit', () =>{
    //limpiar los recursos
})

//Current working directory
process.cwd() //nos dice desde que carpeta estamos ejecutando el proceso

//platform
console.log(process.env.TOMAS)
//tomas es una variable de entorno, es un ejemplo