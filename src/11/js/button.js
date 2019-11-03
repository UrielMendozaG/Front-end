window.onload = () => {
    butonMain();
}

function butonMain(){
 let boton = document.getElementById("btn");
 let cont = 0;
 boton.onclick = () => {
    cont++;
    boton.innerHTML = cont;
    }
}