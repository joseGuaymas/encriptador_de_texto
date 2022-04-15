var box_in = document.querySelector(".box-in")
var box_out = document.querySelector(".box-out")

var btn_back = document.querySelector(".btn-back")

btn_back.addEventListener('click', function(event){
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
     
        texto_desencriptado = textoIngresado.replace(/(enter)/gi, "e").replace(/(imes)/gi, "i").replace(/(ai)/gi, "a").replace(/(ober)/gi, "o").replace(/(ufal)/gi, "u"); 
        box_out.value = texto_desencriptado;
        box_in.value = " "
    
        console.log(texto_desencriptado) 
    });