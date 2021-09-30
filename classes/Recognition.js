// Cria classe RecognitionPTBR como filha de webkitSpeechRecognition
class RecognitionPTBR extends webkitSpeechRecognition {
  constructor() {
    // Executa o construtor da classe pai
    super();
    // Configura o objeto:
    // 1 - Mostrar resultados mesmo que a fala ainda não tenha terminado;
    this.interimResults = true;
    // 2 - Define o idioma como português brasileiro;
    this.lang = 'pt-BR';
  }
}

// Cria o objeto a partir da classe recém declarada
const recognition = new RecognitionPTBR();

// Adiciona event listener: "Quando houverem resultados, faça isso"
recognition.addEventListener('result', evento => {
  //Se o resultado for a transcrição definitiva
  if (evento.results[0].isFinal) {
    //armazena a transcrição definitiva em uma variável
    let transcript = evento.results[0][0].transcript;

    // Se a transcrição tiver a palavra "urgente"
    if (transcript.toLowerCase().includes("urgente")) {
      // Faça um alerta na tela;
      alert("URGENTE!!!!!!!!!!!");
    }

    // Substitui a palavra "urgente" por "LARGA O QUE TÁ FAZENDO E VAI RESOLVER!!!!!"
    transcript = transcript.replace(/urgente/gi, "LARGA O QUE TÁ FAZENDO E VAI RESOLVER!!!!!")

    // Armazena a transcrição definitiva em uma propriedade o próprio objeto, 
    // a fim de que a transcrição seja acessível por quem tiver acesso ao objeto;
    evento.target.transcript = transcript;
  }
});


// Exporta o objeto (e não a classe)
export default recognition;