// Creación lista de amigos
let amigos = [];

//Funcion para crear amigos
function agregarAmigo() {
    //capturar el campo de entrada
    let nombreAmigos = document.getElementById("amigo").value;
    //console.log (nombreAmigos);
    
    //Validar que el espacio no está vacío
    if (nombreAmigos === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    // Evitar nombres repetidos
    let nombreMinuscula = nombreAmigos.toLowerCase();

        for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nombreMinuscula) {
            alert("Este nombre ya fue agregado");
            return;
        }
    }
        // Incluir los nombres en la lista de amigos
        amigos.push (nombreAmigos);
        console.log(amigos);
        // Limpiar el campo de entrada
       document.getElementById("amigo").value = "";
       mostrarAmigos();
 }

 // Función para actualizar lista de amigos
 // Obtener el elemento de la lista
function mostrarAmigos (){
    let lista = document.getElementById ("listaAmigos");

    //limpiar lista
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i  = 0; i < amigos.length; i++){
      lista.innerHTML += `<li>${amigos[i]}</li>`;  
    }
}

// Función para sortear amigos
function sortearAmigo(){
    // Lista vacía
    if (amigos.length===0){
        alert ("Lista de amigos vacía");
        return;
    } 

    // Indice aleatorio 
    let aleatorio = Math.floor(Math.random () * amigos.length);

    // Obtener nombre sorteado
    let nombreAmigo = amigos[aleatorio];

    // Mostrar amigo secreto
    document.getElementById("resultado").innerHTML = `El amigo secreto es ${nombreAmigo}`;
}
