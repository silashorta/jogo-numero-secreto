const elementoChute = document.querySelector('#chute')


// CONFIGURANDO E INICIANDO O SPEECHRECOGNITION

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'



const mic = document.querySelector('.buttonMic')
mic.addEventListener('click', (e) => {
        recognition.start(e); 
})

// CAPTURAR A FALA

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    VerificaValor(chute)
}

function exibeChuteNaTela(chute) {
    console.log(chute)
    elementoChute.innerHTML = 
    `<div>Você disse:</div>
    <div class="box">${chute}</div>`
}

// REATIVANDO O MICROFONE

//recognition.addEventListener('end', () => recognition.start())