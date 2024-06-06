const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPause = new Audio('/sons/pause.mp3');
const audioBeep = new Audio('/sons/beep.mp3');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const buttonImage = document.querySelector('.app__card-primary-butto-icon');
const playImg = new Image('/imagens/play_arrow.png');
const pauseImg = new Image('/imagens/pause.png');
const tempoNaTela = document.querySelector('#timer');

let tempoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    }
    else {
        musica.pause()
    }
})

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,
            <strong class="app__title-strong">mergulhe no que importa</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

focoBt.addEventListener('click', () => {
    tempoEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})


const contagemRegressiva = () => {
    if(tempoEmSegundos <= 0){
        audioBeep.play();
        alert('Tempo finalizado');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const evento = new CustomEvent('focoFinalizado')
            document.dispatchEvent(evento)
        }
        zerar();
        return;
    }
    tempoEmSegundos -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloId){
        iniciarOuPausarBt.textContent = "Começar";
        buttonImage.setAttribute('src', 'imagens/play_arrow.png');
        audioPause.play();
        zerar();
        return;
    }
    buttonImage.setAttribute('src', '/imagens/pause.png');
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = "Pausar";
}

function zerar(){
    clearInterval(intervaloId);
    intervaloId = null;
}

function mostrarTempo (){
    const tempo = new Date(tempoEmSegundos*1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo();

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = '✎';
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edite a tarefa:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.firstChild.textContent = newTaskText;
            }
        });

        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = prompt('Digite a nova tarefa:');
        if (taskText !== null && taskText.trim() !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
        }
    });
});
