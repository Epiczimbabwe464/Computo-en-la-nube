/* Imrpimir lista de nombres
crea un programa en javascript que cumpla
con lo siguiente:

1. Defineun objeto llamado grupo.
    Este objeto debe tener una lista de 10 nombres.
2.Crea una funcion llamada imprimirNombre.
    Esta funcion debe recorrer la lista de nombres
    y mostrarlos en la consola uno a uno.
3.Llama a la funcion imprimirNombres para mostrar
    todo los nombres.*/

const Salon =[

    {nombre : "Abel", apellido : "Portillo" },
    {nombre : "Luis", apellido : "Bueno"},
    {nombre : "Gustambo", apellido : "Tinoco"},
    {nombre : "Casimiro", apellido : "Buenavista"},
    {nombre : "Miguel", apellido : "Hidalgo"},
    {nombre : "Corvo", apellido : "Atano"},
    {nombre : "Francisco", apellido : "Madero"},
    {nombre : "Bruce", apellido : "Wane"},
    {nombre : "Balatro", apellido : "Balatrez"},
    {nombre : "Rosario", apellido : "Guadalupe"}
];

function imprimirNombre () {
    let lista = document.getElementById("lista");
    lista.innerHTML = " ";

    for(let i = 0; i < Salon.length; i++){
        let li = document.createElement("li");
        li.textContent = Salon[i].nombre + " " + Salon[i].apellido;
        lista.appendChild(li);

    }
}