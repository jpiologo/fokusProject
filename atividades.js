//Atividade 01;

const htmlConst = document.querySelector('html');
const tempo = document.querySelector('#timer');
const img = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

//Buttons
const startBtn = document.getElementById('start-pause');
const focoBtn = document.getElementsByClassName('app__card-button--foco');
const curtoBtn = document.getElementsByClassName('app__card-button--curto');
const longoBtn = document.getElementsByClassName('app__card-button--longo');

//Timer
const timeFoco = 1500;
const timeCurto = 300;
const timeLongo =  900;