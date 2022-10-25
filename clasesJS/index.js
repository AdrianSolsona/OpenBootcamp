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
