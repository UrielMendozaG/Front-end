window.onload = () => {
    buttonMain();
    formsReset();
}

function buttonMain(){
    let boton = document.getElementById("boton");
    let botonReset = document.getElementById("reset");

    boton.onclick = () => toUpperCase();
    botonReset.onclick = () => formsReset();
}

function toUpperCase(){
    let misCajasTexto = document.getElementsByTagName("input");
    for(let i = 0; i<misCajasTexto.length; i++){
        if(misCajasTexto[i].type == "text" ){
            misCajasTexto[i].value = misCajasTexto[i].value.toUpperCase();
        }
    }
}

function formsReset(){
    let misCajasTexto = document.getElementsByTagName("input");
    for(let i = 0; i<misCajasTexto.length; i++){
        if(misCajasTexto[i].type == "text" ){
            misCajasTexto[i].value = "";
        }
    }
}