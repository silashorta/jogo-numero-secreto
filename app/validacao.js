function VerificaValor(chute){
    const numero = +chute
    
    if (verificaNumero(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <a href="index.html" class="botaoReiniciar">Reiniciar Jogo</a>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}.`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            <a href="index.html" class="botaoReiniciar">Reiniciar Jogo</a>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div class="mensagem">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div class="mensagem">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
}

function verificaNumero(numero) {
    return Number.isNaN(numero)    
}

/* function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor
} */