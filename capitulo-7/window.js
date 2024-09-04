//el objeto windows hace referencia a la ventana, el dom depende del Windows
/*const botonAbrir = document.getElementById('boton-abrir-ventana');
const botonCerrar = document.getElementById('boton-cerrar-ventana');
let url = 'https://www.youtube.com/watch?v=qAIy8godTy4&list=PLepIE2DRF0lUSxdF2AG8JEZHRHDUrEgNX&index=2';
botonAbrir.addEventListener('click', window.open(url));
botonCerrar.addEventListener('click', window.close());

let screenLeft = window.screenLeft;
let screenTop = window.screenTop;
document.write(` screen left es: <b>${screenLeft}</b> - screenTop es: <b>${screenTop}</b>`);	
*/
//manejo de los scroll
const scrollX = window.scrollX;
const scrollY = window.scrollY;
document.write(` scrollX: ${scrollX} scrollY: ${scrollY}<br>`);

//manejo de location para poder identificar la ubicacion 
const ubicacion =  window.location.href;
document.write(`la ubicacion  es: <b>${ubicacion}</b> <br>`);

const pathName = window.location.pathname;
document.write(`Esta en el: ${pathName}`);