console.log(window)

window.onload = () => {
    console.log("hola"),
    document.getElementById("#h2").innerHTML = "Contador";
    boton = document.getElementById("button");
    botonReset = document.getElementById("button2");

    boton.onclick = () => boton.value++;
    botonReset.onclick = () => boton.value = 0;

}

