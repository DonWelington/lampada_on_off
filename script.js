const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lampada');

const lampOn = () => lampada.src = './imagem/acesa.jpg';
const lampOff = () => lampada.src = './imagem/apagada.jpg';
const broken = () => lampada.src = './imagem/quebrada.jpg';

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lampada.addEventListener('mouseover', broken);


