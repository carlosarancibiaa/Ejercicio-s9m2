// Al pasar el mouse por el primer <div> “text1” se mostrará el segundo y al salir de él se
// ocultará nuevamente.
// • Al hacer clic en el <div> id “caja2” la imagen deberá agrandarse un 100% y al salir de ella,
// volver a su tamaño inicial.
// • Con el tercer <div> la letra se agrandará al hacer doble clic en él.
// • La imagen seleccionada para el trabajo es irrelevante.

function mostrarDiv2(){
    document.getElementById("text2").style.display = "block";
}
function ocultarDiv2(){
    document.getElementById("text2").style.display = "none";
}
function agrandar(){
    document.getElementById("img").style.width = "100%";
}
function encoger(){
    document.getElementById("img").style.width = "20%";
}
function agrandarLetra(){
    document.getElementById("caja3").style.fontSize = "30px"
}