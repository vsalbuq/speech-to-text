// Importa o objeto já pronto e configurado do arquivo Recognition.js
import recognition from "./classes/Recognition.js";

//Inicia o speech to text no clique do botão iniciar
document.querySelector('#start').addEventListener('click', () => {
  recognition.start();
});

// Quando a pessoa acabar de falar e a transcrição definitiva já tiver sido gerada,
// adiciona a transcrição em um parágrafo dentro da div com a classe words
recognition.addEventListener('end', (evento) => {
  let p = document.createElement('p');
  p.textContent = evento.target.transcript;
  const words = document.querySelector('.words');
  words.appendChild(p);
});