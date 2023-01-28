const elementoChute = document.querySelector('#chute')


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

//recognition.addEventListener('end', () => recognition.start())