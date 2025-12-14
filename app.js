const titulocancion=document.querySelector('.reproductormusica h1');
const nombreartista=document.querySelector('.reproductormusica p');

const progreso=document.getElementById('progreso');
const cancion=document.getElementById('cancion');

const iconocontrol=document.getElementById('iconocontrol');
const botonreproducir=document.querySelector('.controles button.reproducir');

const botonatras=document.querySelector('.controles button.atras');
const botonadelante=document.querySelector('.controles button.adelante');


const canciones =[
    {
        titulo:'Aléjate De Mi',
        nombre:'Camila', 
        fuente:'music/Camila - Aléjate De Mi(M4A_128K)_private.m4a'
    },
     {
        titulo:'Aléjate De Mi',
        nombre:'Camila', 
        fuente:'music/Camila - Aléjate De Mi(M4A_128K)_private.m4a'
    }
    

];
let indicecancionactual=0;
