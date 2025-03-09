// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo) {
        alert ("Debes ingresar un nombre");
        return;
    } 
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }

}

function sortearAmigo(){
    if(amigo.length === 0) {
        alert("No hay amigos para sortear");
        return; 
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos")
    limpiarLista.innerHTML = "";
    
}
    */

//NUEVOS CAMBIOS Y ADICIONES AGREGADAS:


let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    if (amigos.includes(nombreAmigo.toLowerCase())) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
    renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceSorteado, 1)[0]; // Elimina el amigo sorteado
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    renderizarAmigos(); // Actualiza la lista

    let limpiarLista = document.getElementById("listaAmigos")
    limpiarLista.innerHTML = "";
}
