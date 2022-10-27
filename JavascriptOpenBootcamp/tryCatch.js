//Ejercicio Winston

winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.info("Hola esto es un mensaje del curso JavaScript")

//Ejercicio try/catch

const miFuncion = valor => {
    if(typeof valor === "number"){
    return 5 * valor
    }
    throw new error("El valor debe ser de tipo number")
}
const numero = 6;
try{
    console.log("Esta ejecutandose correctamente")
    const cinco = miFuncion(numero)
    console.log(cinco)
} catch {
    console.log("Es un Error")
}
