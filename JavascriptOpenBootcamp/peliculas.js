var listaCompra = ["Cerdo", "Manteca", "Leche", "Queso", "Tomate"];

listaCompra.push("Aceite de girasol");
listaCompra.pop();

console.log(listaCompra)

var peliculas = [
{Nombre: "Avatar", director:"Steven Spielberg", fecha:2006},
{Nombre: "Origen", director: "Cristhoper Nolan", fecha:2008},
{Nombre: "Malditos Bastardos", director:"Quentin Tarantino", fecha:2011}
]

const peliculasAntes = peliculas.filter(pelicula =>pelicula.fecha <=2010);

console.log(peliculasAntes)

const Directores = peliculas.map((valor) =>{
    return`${valor.director}`;
})
console.log(Directores)

const Titulos = peliculas.map((valor) =>{
    return`${valor.Nombre}`;
})
console.log(Titulos)

const listaConcat = Directores.concat(Titulos);
console.log(listaConcat)

const listaPropagacion = {Titulos, ...Directores}
console.log(listaPropagacion)
