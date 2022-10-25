//Primera Parte

class numeros{
    constructor(a,b,c){
    this.a = 1;
    this.b = 3;
    this.c = 5;
    }
    FuncionSuma(){
        return `Suma: ${this.a + this.b + this.c}`
    }
}
let numero = new numeros(0);
console.log (numero.FuncionSuma());

//Segunda Parte

class coche{
    constructor(puertasCoche){
    this.puertasCoche = 1;
    }
    ObtenerResultado(){
       if( this.puertasCoche > 5){
        return ("El coche no puede tener mas de 5 puertas");
       }
       else{
        return this.puertasCoche++;
       }
    }
    
}
let miCoche = new coche();
console.log(miCoche.ObtenerResultado());
console.log(miCoche.ObtenerResultado());
console.log(miCoche.ObtenerResultado());
console.log(miCoche.ObtenerResultado());
console.log(miCoche.ObtenerResultado());
console.log(miCoche.ObtenerResultado());
