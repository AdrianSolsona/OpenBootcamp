const datos = {
    nombre: "Adrian", apellido: "Solsona", edad: "25", altura: "185", eresDesarrollador: true
}
var miEdad = "edad";
console.log(datos[miEdad]);

const datos2 = {
    nombre: "Gonzalo", apellido: "Renau", edad: "27", altura: "180", eresDesarrollador: false
}

const totalDatos = {datos,...datos2}
console.log(totalDatos)

const edades = [
    
    {nombre: "Adrian", apellido: "Solsona", edad: 25, altura: 185, eresDesarrollador: true},
    {nombre: "Gonzalo", apellido: "Renau", edad: 27, altura: 180, eresDesarrollador: false}
    
]
edades.sort((a, b) => b.edad - a.edad)

console.log(edades)
