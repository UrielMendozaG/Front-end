window.onload = () => {
    text = document.getElementById("parrafo");
    botonMain();
}

function botonMain(){
    let click = 0;
    boton = document.getElementById("boton");
    boton.onclick = () => {
        if(click == 0){
            text.style.visibility = "hidden";
            boton.value = "aparecer";
            click = 1;
        }else{
            click = 0;
            text.style.visibility = "inherit";
            boton.value = "desaparecer";
        }
    }
}