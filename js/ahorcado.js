document.addEventListener('DOMContentLoaded', function () {

    // palabra aleatoria
    const listaPalabras = ['caballo', 'oveja', 'cerdo','camello','auto','pinocho','peñanieto','burro','emprender','volumen','trabajo','jesus','raul','corto','largo','raiz'];
    // exit
    let palabraAdivinar = [];
    let palabraMostrar = [];
    let historialLetrasUsuario = [];
    let numIntentos = 6;
    let nodoLetra = document.querySelector('#letra');
    let nodoBoton = document.querySelector('#boton');
    let nodoResultado = document.querySelector('#resultado');
    let nodoIntentos = document.querySelector('#intentos');
    let nodoHistorial = document.querySelector('#historial');


    function prepararJuego () {
        //hacer '_'
        let posAleatoriaListaPalabras = _.random(listaPalabras.length - 1);
        let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];
        palabraAdivinar = palabraAleatoria.split('');
        for (let letra of palabraAdivinar) {
            palabraMostrar.push('_');
        }
        dibujarJuego();
    }

    function dibujarJuego () {
        nodoResultado.textContent = palabraMostrar.join(' ');
        nodoIntentos.textContent = numIntentos;
        nodoHistorial.textContent = historialLetrasUsuario.join(' ');
    }

    function comprobarLetraUsuario (){
        let letraUsuario = nodoLetra.value;
        nodoLetra.value = '';
        nodoLetra.focus();
        for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {

            if (letraUsuario == letraAdivinar) {
                palabraMostrar[posicion] = letraAdivinar;
            }
        }

        if (!palabraAdivinar.includes(letraUsuario)) {
            numIntentos -= 1;
            historialLetrasUsuario.push(letraUsuario);
            dibujarPoint();
        }




        acabarJuego();
        dibujarJuego();
    }

    function dibujarPoint(){
        if(numIntentos == 5){
            document.getElementById('hea').innerHTML='O';
        }
        if(numIntentos == 4){
            bodl = document.getElementById('bodl').innerHTML="/";
        }
        if(numIntentos == 3){
            bodc = document.getElementById('bodc').innerHTML="|"
        }
        if(numIntentos == 2){
            bodr = document.getElementById('bodr').innerHTML=" \\";
        }
        if(numIntentos == 1){
            foot = document.getElementById('foot').innerHTML="/\\";
        }
        
             

    }

    
    function comprobarPulsadoEnter (evento) {
        if (evento.code == 'Enter') {
            comprobarLetraUsuario();
        }
    }
    function acabarJuego () {
        if (!palabraMostrar.includes('_')) {
            alert('Has ganado!!!');
            location.reload(true);
        }
        if (numIntentos == 0) {
            alert('Has Perdido!!! Era: ' + palabraAdivinar.join(''));
            
            location.reload(true);
        }
    }

    
    nodoBoton.addEventListener('click', comprobarLetraUsuario);

    nodoLetra.addEventListener('keyup', comprobarPulsadoEnter);


    prepararJuego(); 
});