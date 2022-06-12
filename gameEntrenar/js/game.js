document.getElementById("abrirGame").style.display="none";
var lig = 0;



function startGame(){
    if( lig == 0 ){
        document.getElementById("abrirGame").style.display="block";
        document.getElementById("preesWatch").style.display="none";
        lig = 1;
        
    }else{
        lig = 0;
    }
    document.getElementById("loginDos").style.display="none";
    document.getElementById("textSkill").style.display="none";
}

function press(){


    var height = window.innerHeight - 250;
    var width = window.innerWidth - 250;

    var newHeight = (Math.random() * height);
    var newWidht = (Math.random() * width);

    document.getElementById('mover').style.position='absolute';
    document.getElementById('mover').style.left = newWidht + 'px';
    document.getElementById('mover').style.top = newHeight + 'px';
}

// pause

function seguir(){
    document.getElementById("loginM").style.display="none";
    document.getElementById("mover").style.display="inline-block";
    document.getElementById("pause").style.display="inline-block";
    document.getElementById("counterH").style.color="#fff";
    document.getElementById("tiempo").style.color="#fff";
}

function pause(){
    document.getElementById("loginM").style.display="block";
    document.getElementById("mover").style.display="none";
    document.getElementById("pause").style.display="none";
    document.getElementById("counterH").style.color="#000";
    document.getElementById("tiempo").style.color="#000";
    document.getElementById("counterH").style.position="relative";
    document.getElementById("tiempo").style.position="relative";
}

//contador
let counter = 0;
function counterClick(){
    
    var cont = document.getElementById("counterH");
    cont.innerHTML= "puntos " + ++counter;
}

function mennuExit(){
    document.getElementById("exitGame").style.display="block";
    document.getElementById("loginM").style.display="none";
    document.getElementById("game").style.display="none";
}

function followGame(){
    document.getElementById("exitGame").style.display="none";
    document.getElementById("loginM").style.display="block";
    document.getElementById("game").style.display="block";
}

