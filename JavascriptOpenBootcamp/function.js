function mostrarTrue(){
    return true;
}
function asincro(){
    console.log("Hola soy una persona")
}
setTimeout(asincro, 5000);


function* pares(){
    let numero = "";
    while(true){
    numero++
    if(numero %2 === 0){
        return numero
    }
    yield numero
    }
}

const par = pares();
console.log(par.next());
console.log(par.next());
