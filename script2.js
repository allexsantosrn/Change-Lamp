/* Mapeando os objetos da página. */
const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

/* Adicionando listener no clique do botão ligar. */
turnOnOff.addEventListener('click', lampOnOff);

/* Adicionando listener ao passar mouse na lâmpada - Ligar lâmpada. */
lamp.addEventListener('mouseover', lampOn);

/* Adicionando listener no duplo clique na lâmpada - Quebrar lâmpada. */
lamp.addEventListener('dblclick', lampBroken);

/* Criando função que liga a lâmpada. */
function lampOn() {

    /* Verifica se a lâmpada não está quebrada. */
   if (!islampBroken()) {
       lamp.src = './img/ligada.jpg';
       turnOnOff.textContent = 'Desligar';
   }       
}

/* Criando função que desliga a lâmpada. */
function lampOff() {

   /* Verifica se a lâmpada não está quebrada. */
   if (!islampBroken()) {
       lamp.src = './img/desligada.jpg';
   }

}

/* Criando função que quebra a lâmpada. */
function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

/* Criando função que verifica se a lâmpada está quebrada. */
function islampBroken() {
    //return lamp.src.indexOf('quebrada') > -1;

    /* Forma mais elegante - Verifica se a lâmpada está quebrada. */
    return lamp.getAttribute('src') == "./img/quebrada.jpg";
}


/* Criando função que liga/desliga a lâmpada. */
function lampOnOff() {

    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }

    else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}  
