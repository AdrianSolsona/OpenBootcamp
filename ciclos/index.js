//Ejercicio if

class numero{
    constructor(numeroif){
    this.numeroif=numeroif;
    }
    mostrarResultado(){
        if(this.numeroif < 0){
        return `${this.numeroif} El numero es negativo`
        }
        else if(this.numeroif > 0){
        return `${this.numeroif} Este numero es positivo`
        }
        else if(this.numeroif == 0){
        return `${this.numeroif} El Numero es igual a 0`
        }
    }
}
let numero1 = new numero(1);
console.log(numero1.mostrarResultado())

Ejercicio while

class numeroWhile{
    constructor(numeroMenor){
        this.numeroMenor = numeroMenor;
    }
    mostrarCiclo(){
        while(this.numeroMenor <= 3){
            return this.numeroMenor++;
        }
    }
}
let numeroWhile1 = new numeroWhile(1);
console.log(numeroWhile1.mostrarCiclo())
console.log(numeroWhile1.mostrarCiclo())
console.log(numeroWhile1.mostrarCiclo())

console.log(numeroWhile1.mostrarCiclo())


//Ejercicio Do while

class numeroDowhile{
    constructor(numeroMenor1){
        this.numeroMenor1 = numeroMenor1;
    }
    mostrarCiclo1(){
        do{
            return this.numeroMenor1++;
        } while(this.numeroMenor1 <= 3);
    }
}
let numeroDowhile1 = new numeroDowhile(4);
console.log(numeroDowhile1.mostrarCiclo1())

//Ejercicio For

for(let numeroFor =0; numeroFor <=3; numeroFor++){
    console.log(numeroFor)
}

//Ejercicio switch

let estacion = 2;

let estacionTexto ="Valor desconocido"

switch(estacion){
    case 1:
        estacionTexto = "Primavera";
        break;
    case 2:
        estacionTexto = "Verano";
        break;
    case 3:
        estacionTexto = "Otoño";
        break;
    case 4:
        estacionTexto = "Invierno";
        break;
    default:
        numeroTexto = "";

}

console.log(estacionTexto)


