class Estudiante{
    constructor(nombre, lista){
        this.nombre = nombre;
        this.lista = lista;
        lista =["Javascript", "HTML", "CSS"]
    }
    obtenDatos(){
    return `${this.nombre +" " + this.lista}`;
    }
    toString(){
        return this.obtenDatos();
    }

}

let estudiante1 = new Estudiante("Adrian", "HTML");
console.log(estudiante1.toString())
