class Persona{

    constructor(nombre, telefono, edad){
        this._nombre = nombre;
        this._telefono = telefono;
        this._edad = edad;
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;

    }
    get telefono(){
        return this._telefono;
    }
    set apellido(apellido){
        this._apellido = apellido;

    }
    get edad(){
        return this._edad; 
    }
    set edad(edad){
        this._edad = edad;
    }
    nombreCompleto(){
        return this._nombre + " " +this._telefono + " " + this._edad;
    }
    toString(){
        return this.nombreCompleto()
    }
    
}
let persona1 = new Persona("Adrian", "678956432","18");
let persona2 = new Persona("Marcos", "699002293", "25")
console.log(persona1.toString());
console.log(persona2.toString());


class Cliente extends Persona{

    

    constructor(nombre,telefono, edad, credito){
        super(nombre,telefono, edad);
        this._credito = credito;
        
    }
    get(credito){
        return this._credito;

    }
    set credito(credito){
        this._credito = credito;

    }
    nombreCompleto(){
       return super.nombreCompleto() + " " + this._credito;
    }
}

let empleado1 = new Cliente("Marta", "659545857", "25", 1200);
let empleado2 = new Cliente("Antonio", "645825965", "40", 1600)
console.log(empleado1.toString());
console.log(empleado2.toString());

class Trabajador extends Persona{
    constructor(nombre, telefono, edad, salario){
        super(nombre, telefono, edad)
        this._salario = salario;
    }
    get (salario){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
    salarioCompleto(){
        return super.salarioCompleto() + " " + this_.salario;
    }

}

let trabajador1 = new Trabajador("Esteban", "675451565", "27",5000);
console.log(trabajador1.toString());
