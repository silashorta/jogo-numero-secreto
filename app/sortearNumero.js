const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNuneroAleatorio()

function gerarNuneroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor

//console.log(numeroSecreto)