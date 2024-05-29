// //Atividade 01;

// const htmlConst = document.querySelector('html');
// const tempo = document.querySelector('#timer');
// const img = document.querySelector('.app__image');
// const title = document.querySelector('.app__title');

// //Buttons
// const startBtn = document.getElementById('start-pause');
// const focoBtn = document.getElementsByClassName('app__card-button--foco');
// const curtoBtn = document.getElementsByClassName('app__card-button--curto');
// const longoBtn = document.getElementsByClassName('app__card-button--longo');

// //Timer
// const timeFoco = 1500;
// const timeCurto = 300;
// const timeLongo =  900;

// function alteraCnt (contexto){
//     img.setAttribute('src', `/imagens/${contexto}.png`);
// }

//Atividades Modulo 03
// const botoes = document.querySelectorAll('.botao');
// const focoBt = document.querySelector('.foco');
// const curtoBt = document.querySelector('.descanso-curto');
// const longoBt = document.querySelector('.descanso-longo');
// const musicaCheck = document.querySelector('#alternar-musica');
// const musica = new Audio('/audios/luna-rise-part-one.mp3');
// musica.loop = true;

// musicaCheck.addEventListener('change', () => {
//     if(musica.paused){
//         musica.play()
//     }
//     else {
//         musica.pause()
//     }
// })

// function alteraContexto (contexto){
//     botoes.forEach(function(contexto){
//         contexto.classList.remove('active')
//     })
// }


// focoBt.addEventListener('click', () => {
//     alteraContexto('foco');
//     focoBt.classList.add('active');
// })

// curtoBt.addEventListener('click', () => {
//     alteraContexto('descanso-curto');
//     curtoBt.classList.add('active');
// })

// longoBt.addEventListener('click', () => {
//     alteraContexto('descanso-longo');
//     longoBt.classList.add('active');
// })