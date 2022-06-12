//const nameP = prompt();

// const nameNovia = document.getElementById('quieresSerN');
//     nameNovia.innerHTML='hola '+nameP+' quieres ser mi novia';


function cuandoDigaSi(){
    var nameG = document.getElementById('textG');
    nameG.innerHTML= 'que bueno que dijiste si vamos por tacos UwU';
}

function cuandoDigaNo(){

    var height = window.innerHeight - 250;
    var width = window.innerWidth - 250;

    var newHeight = (Math.random() * height);
    var newWidht = (Math.random() * width);

    document.getElementById('btnNo').style.position = 'absolute';
    document.getElementById('btnNo').style.left = newWidht + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";

}   