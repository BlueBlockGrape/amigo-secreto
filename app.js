// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//Función llamada a partir del botón de añadir para agregar elemento a lista de amigos
function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo");
    if(nuevoAmigo.value === "" || nuevoAmigo.value === null){
        alert("Por favor, inserte un nombre.");
    }else{
        listaAmigos.push(nuevoAmigo.value);
        nuevoAmigo.value = "";
        actualizarListaAmigos();
    }
}

//funcion para llenar lista de amigos cada que se agregue uno nuevo
function actualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');

    ul.innerHTML = '';

    for(let amigo = 0; amigo<listaAmigos.length; amigo++){
        ul.innerHTML += `<li>${listaAmigos[amigo]}</li>`;
    }  
}

function sortearAmigo(){
    if(listaAmigos.length < 2){
        alert('Se necesita registrar al menos 2 amigos para sortear');
        return
    }

    let amigoSecreto = Math.floor(Math.random() * listaAmigos.length);

    console.log('seleccionado', amigoSecreto);
    const ulResultado = document.getElementById('resultado');

    ulResultado.innerHTML = `<li>${listaAmigos[amigoSecreto]}</li>`;
}