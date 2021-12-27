/* Mapeando os objetos da página. */
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

/* Adicionando listener no clique do botão. */
turnOn.addEventListener('click', lampOn);

/* Criando função que liga a lâmpada. */
function lampOn() {
    lamp.src = './img/ligada.jpg';
}


