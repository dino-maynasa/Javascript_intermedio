//el objeto windows hace referencia a la ventana, el dom depende del Windows
/*const botonAbrir = document.getElementById('boton-abrir-ventana');
const botonCerrar = document.getElementById('boton-cerrar-ventana');
let url = 'https://www.youtube.com/watch?v=qAIy8godTy4&list=PLepIE2DRF0lUSxdF2AG8JEZHRHDUrEgNX&index=2';
botonAbrir.addEventListener('click', window.open(url));
botonCerrar.addEventListener('click', window.close());*/

let screenLeft = window.screenLeft;
let screenTop = window.screenTop;
document.write(` screen left es: ${screenLeft} - screenTop es;${screenTop}`);	
