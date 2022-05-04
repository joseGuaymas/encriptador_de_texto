var box_out = document.querySelector(".box-out");
var btn_copy = document.querySelector(".btn-copy");

btn_copy.addEventListener("click",function(){
    box_out.select();
    document.execCommand("copy");
    alert("Texto copiado");   
});