
const elementoChute = document.querySelector('#chute');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'; 
const mic = document.querySelector('.buttonMic');

let isRecognitionStarted = false;

mic.addEventListener('mousedown', startRecognition);
mic.addEventListener('touchstart', startRecognition);
mic.addEventListener('focusin', startRecognition);

mic.addEventListener('mouseup', stopRecognition);
mic.addEventListener('touchend', stopRecognition);
mic.addEventListener('focusout', stopRecognition);

function startRecognition(e) {
    e.preventDefault(); // Evita a seleção padrão

    if (!isRecognitionStarted) {
        recognition.start();
        isRecognitionStarted = true;

        // Adicione um ouvinte para o evento touchend na janela para garantir que o reconhecimento não seja interrompido ao tocar na tela
        window.addEventListener('touchend', windowTouchEndHandler, { once: true });
    }
}

function stopRecognition() {
    if (isRecognitionStarted) {
        recognition.stop();
        isRecognitionStarted = false;
    }
}

function windowTouchEndHandler() {
    // Este manipulador é chamado quando ocorre um evento touchend na janela
    // Aqui você pode reiniciar o reconhecimento, se necessário
    startRecognition(new TouchEvent('touchstart'));
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
