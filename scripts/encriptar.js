var box_in = document.querySelector(".box-in")
var box_out = document.querySelector(".box-out")

var btn_go = document.querySelector(".btn-go")

btn_go.addEventListener('click', function(event){
// boton_back.addEventListener(click, desencriptar)
    event.preventDefault();
    var textoIngresado = box_in.value

    var mayusculas = textoIngresado;
    var acentos = textoIngresado;
    
    if (mayusculas.toString().match(/[A-Z]/g)) {
    alert("tiene letra mayuscula, vuelve a ingresar el texto"); 
    return;
    } if(acentos.toString().match(/[áéíóú]/g)){// vocales á,é,í,ó,ú, recorre todo el grupo
    alert("tiene vocales con acento, vuelve a ingresar el texto ");
    return;//si cumple la condicion no continua con la encriptacion hasta que cambie la letra
    }
 
    texto_encriptado = textoIngresado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufal"); 
    box_out.value = texto_encriptado;
    box_in.value = " "

    console.log(texto_encriptado) 
});