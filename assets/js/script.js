// Al pasar el mouse por el primer <div> “text1” se mostrará el segundo y al salir de él se
// ocultará nuevamente.
// • Al hacer clic en el <div> id “caja2” la imagen deberá agrandarse un 100% y al salir de ella,
// volver a su tamaño inicial.
// • Con el tercer <div> la letra se agrandará al hacer doble clic en él.
// • La imagen seleccionada para el trabajo es irrelevante.

function mostrarDiv2(){
    document.getElementById("text2").style.display = "block";
}
document.getElementById("text1").onmouseover = mostrarDiv2

function ocultarDiv2(){
    document.getElementById("text2").style.display = "none";
}
document.getElementById("text1").onmouseout = ocultarDiv2

function agrandar(){
    document.getElementById("img").style.width = "100%";
}
document.getElementById('caja2').onclick = agrandar

function encoger(){
    document.getElementById("img").style.width = "20%";
}
document.getElementById('caja2').onmouseout = encoger

function agrandarLetra(){
    document.getElementById("caja3").style.fontSize = "30px"
}
document.getElementById('caja3').ondblclick = agrandarLetra