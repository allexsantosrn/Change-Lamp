/* Mapeando os objetos da página. */
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

/* Adicionando listener no clique do botão ligar. */
turnOn.addEventListener('click', lampOn);

/* Adicionando listener no clique do botão desligar. */
turnOff.addEventListener('click', lampOff);

/* Criando função que liga a lâmpada. */
function lampOn() {
    lamp.src = './img/ligada.jpg';
}

/* Criando função que desliga a lâmpada. */
function lampOff() {
    lamp.src = './img/desligada.jpg';
}

