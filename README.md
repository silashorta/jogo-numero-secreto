**Título: Jogo Número Secreto**

**Introdução:**
No âmbito do meu portfólio, destaco um projeto empolgante que explorei recentemente: um jogo de adivinhação por voz desenvolvido em JavaScript. Esta iniciativa visa proporcionar aos usuários uma experiência única e interativa, desafiando-os a descobrir um número secreto por meio de comandos de voz.

**Descrição do Projeto:**
O projeto consistiu na criação de um jogo envolvente onde os jogadores utilizam comandos de voz para tentar adivinhar o número secreto. O JavaScript foi a principal linguagem de programação empregada para garantir a interatividade e dinamismo necessários para essa experiência de jogo.

**Funcionalidades Principais:**
1. **Ativação por Voz:** Os jogadores podem ativar o jogo simplesmente utilizando comandos de voz, tornando a experiência mais imersiva e divertida.

2. **Adivinhação do Número Secreto:** Após a ativação por voz, os participantes fazem suas suposições sobre o número secreto, e o jogo fornece feedback por meio de mensagens de voz.


O jogo é um desafio de adivinhação por voz, onde o usuário tenta descobrir um número secreto falando em um microfone. Aqui está um resumo da lógica do jogo:

Inicialização do Jogo:

Um número secreto é gerado aleatoriamente entre 1 e 1000.
Os limites do intervalo (menor e maior valor) são exibidos na tela.
Reconhecimento de Voz:

O jogador ativa o microfone e faz um chute falando um número em voz alta.
Verificação do Chute:

O programa verifica se o chute é um número válido.
Se o chute for "GAME OVER", encerra o jogo e exibe uma mensagem de Game Over.
Se o número estiver fora do intervalo permitido, informa ao jogador que o valor é inválido.
Se o número for igual ao número secreto, encerra o jogo e exibe uma mensagem de vitória.
Se o número for menor que o número secreto, informa ao jogador que o número secreto é maior.
Se o número for maior que o número secreto, informa ao jogador que o número secreto é menor.
Feedback ao Jogador:

Após cada chute, o programa fornece feedback ao jogador, indicando se o número secreto é maior, menor ou igual ao chute feito.
Finalização do Jogo:

Quando o jogador acerta o número secreto, o jogo é encerrado, exibindo uma mensagem de vitória, o número de tentativas e o número secreto.
O jogador tem a opção de reiniciar o jogo.


**Tecnologias Utilizadas:**
- **Linguagem de Programação:** JavaScript
- **Bibliotecas ou Frameworks:** 
O SpeechRecognition (Reconhecimento de Fala, em português) é uma biblioteca ou módulo utilizado em várias linguagens de programação para integrar a funcionalidade de reconhecimento de fala em aplicações de software. Essa tecnologia permite que programas entendam e interpretem a fala humana, transformando-a em texto.

**Resultados Obtidos:**
O projeto do jogo de adivinhação por voz em JavaScript proporcionou uma experiência envolvente e interativa. Os jogadores podem desfrutar de uma forma única de interagir com a aplicação, desafiando suas habilidades de adivinhação de maneira inovadora.

**Aprendizados e Desafios:**
Durante o desenvolvimento, enfrentei desafios estimulantes, desde a integração da biblioteca de reconhecimento de fala até a implementação de feedbacks por voz. Este projeto ampliou minha compreensão sobre a interação humano-computador e a utilização de tecnologias de voz para criar experiências de usuário memoráveis.

**Conclusão:**
O jogo de adivinhação por voz em JavaScript representa não apenas um exercício técnico, mas também uma incursão criativa na integração de tecnologias emergentes. Este projeto destaca a capacidade de desenvolver soluções inovadoras e divertidas por meio da programação em JavaScript, consolidando meu compromisso em criar experiências interativas e envolventes.
