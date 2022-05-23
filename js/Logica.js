function encriptar(cadena) {
    
    if (cadena.includes("e")){
        cadena = cadena.replaceAll("e", "enter");
    }

    if (cadena.includes("i")){
        cadena = cadena.replaceAll("i", "imes");
    }

    if (cadena.includes("a")){
        cadena = cadena.replaceAll("a", "ai");
    }

    if (cadena.includes("o")){
        cadena = cadena.replaceAll("o", "ober");
    }

    if (cadena.includes("u")){
        cadena = cadena.replaceAll("u", "ufat");
    }

    return cadena;
}

function desencriptar(cadena) {

    var cadena = document.getElementById("ingresaTexto").value;

    if (cadena.includes("enter")){
        cadena = cadena.replaceAll("enter", "e");
    }

    if (cadena.includes("imes")){
        cadena = cadena.replaceAll("imes", "i");
    }

    if (cadena.includes("ai")){
        cadena = cadena.replaceAll("ai", "a");
    }

    if (cadena.includes("ober")){
        cadena = cadena.replaceAll("ober", "o");
    }

    if (cadena.includes("ufat")){
        cadena = cadena.replaceAll("ufat", "u");
    }

    return cadena;
}   

function copiarAlPortapapeles(){
    var textoCopiado = document.querySelector(".contenedor_p"); //Obtengo el texto de la etiqueta p.
    const inputOculto = document.createElement("input");  //Creo un elemnto del tipo Input.

    inputOculto.setAttribute("value", textoCopiado.innerText);  //Agrego al elemnto creado el texto que obtuve de la etiqueta p.
    document.body.appendChild(inputOculto);   //Agrego el nuevo elemento al body con el texto ya agregado.

    inputOculto.select();  //Selecciono el texto del input nuevo que creé.
    document.execCommand("copy");  //Ejecuto el comando copiar.

    document.body.removeChild(inputOculto); //Eliminino del body el elemnto creado.
    alert("Copiado exitosamente");
}

function validarTextoIngresado(cadena){
    var validado;
    //Caracteres permitidos.
    var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q",
                 "r","s","t","u","v","w","x","y","z"," ","0","1","2","3","4","5","6","7","8","9"];
    
    for (i=0; i <= cadena.length-1; i++){
        if (array.includes(cadena[i])){
            if(i==cadena.length-1){
                validado = true;
            }
        } else {
            validado = false;
            break;
        }
    }
    return validado;
}


function validarYEncriptar(){
    var cadena = document.getElementById("ingresaTexto").value;

    if (cadena=="") {
        document.getElementById("rectangulo2").style.display = "none";
        document.getElementById("rectangulo1").style.display = "inline-block";
    } else if (validarTextoIngresado(cadena) == true){
        document.getElementById("rectangulo1").style.display = "none";
        document.getElementById("rectangulo2").style.display = "inline-block";
        cadena = encriptar(cadena);
        document.getElementById("parrafo").innerHTML=cadena;     
    } else {
        alert("No se permiten mayúsculas, acentos, ni caracteres especiales. Intente nuevamente.");
    }
}

function validarYDesencriptar(){
    var cadena = document.getElementById("ingresaTexto").value;

    if (cadena=="") {
        document.getElementById("rectangulo2").style.display = "none";
        document.getElementById("rectangulo1").style.display = "inline-block";
    } else if (validarTextoIngresado(cadena) == true){
        document.getElementById("rectangulo1").style.display = "none";
        document.getElementById("rectangulo2").style.display = "inline-block";
        cadena = desencriptar(cadena);
        document.getElementById("parrafo").innerHTML=cadena;     
    } else {
        alert("No se permiten mayúsculas, acentos, ni caracteres especiales. Intente nuevamente.");
    }
}