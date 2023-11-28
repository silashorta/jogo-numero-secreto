/* const elementoChute = document.querySelector('#chute')


// CONFIGURANDO E INICIANDO O SPEECHRECOGNITION

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'



const mic = document.querySelector('.buttonMic')
mic.addEventListener('mousedown', (e) => {
        recognition.start(e); 
})
mic.addEventListener('mouseup', (e) => {
    recognition.stop(e);
})
mic.addEventListener('touchstart', (e) => {
    e.preventDefault()
        recognition.start(e); 
})
mic.addEventListener('touchend', (e) => {
    recognition.stop(e);
})

// CAPTURAR A FALA

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    VerificaValor(chute)
}

function exibeChuteNaTela(chute) {
    //console.log(chute)
    elementoChute.innerHTML = 
    `<div class="mensagem">Você disse:</div>
    <div class="box">${chute}</div>`
    listaChute(chute)
}

const listaArray = []
function listaChute(chute) {
    listaArray.unshift(chute)
    
    const lista = document.querySelector('.listaChute')
    lista.innerHTML = `Suas tentativas: ${listaArray.join(", ")}`
    
    //console.log(listaArray)
}

// REATIVANDO O MICROFONE

//recognition.addEventListener('end', () => recognition.start()) */


const elementoChute = document.querySelector('#chute');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
/* recognition.lang = 'pt-BR'; */
const mic = document.querySelector('.buttonMic');

let isRecognitionStarted = false;

mic.addEventListener('mousedown', startRecognition);
mic.addEventListener('touchstart', startRecognition);

mic.addEventListener('mouseup', stopRecognition);
mic.addEventListener('touchend', stopRecognition);

function startRecognition(e) {
    e.preventDefault(); // Evita a seleção padrão
    
    if (!isRecognitionStarted) {
        recognition.start();
        isRecognitionStarted = true;
    }
}

function stopRecognition() {
    if (isRecognitionStarted) {
        recognition.stop();
        isRecognitionStarted = false;
    }
}

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    VerificaValor(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML =
        `<div class="mensagem">Você disse:</div>
        <div class="box">${chute}</div>`;
    listaChute(chute);
}

const listaArray = [];

function listaChute(chute) {
    listaArray.unshift(chute);
    const lista = document.querySelector('.listaChute');
    lista.innerHTML = `Suas tentativas: ${listaArray.join(", ")}`;
}
