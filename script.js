const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Onde a IA pode crescer muito no futuro?",
    alternativas: ["a) Pintura", "b) Agricultura"],
    correta: "b) Agricultura"
  },
  {
    enunciado: "Como garantir o uso seguro da IA?",
    alternativas: ["a) Sem regras", "b) Ética e leis"],
    correta: "b) Ética e leis"
  },
  {
    enunciado: "O que a IA fará com os empregos?",
    alternativas: ["a) Acabar com todos", "b) Automatizar e criar novos"],
    correta: "b) Automatizar e criar novos"
  },
  {
    enunciado: "Qual o maior risco da IA?",
    alternativas: ["a) Dominação total", "b) Mau uso humano"],
    correta: "b) Mau uso humano"
  },
  {
    enunciado: "Como a IA ajuda na saúde?",
    alternativas: ["a) Substituir médicos", "b) Diagnóstico precoce"],
    correta: "b) Diagnóstico precoce"
  },
];

let atual = 0;
let acertos = 0;
let erros = 0;

function mostraPergunta() {
  const perguntaAtual = perguntas[atual];
  caixaPergunta.textContent = perguntaAtual.enunciado;
  caixaAlternativa.textContent = "";
  mostraAlternativa(perguntaAtual);
}

function mostraAlternativa(pergunta) {
  for (const alternativa of pergunta.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => respostaSelecionada(alternativa, pergunta.correta));
    caixaAlternativa.appendChild(botao);
  }
}

function respostaSelecionada(opcaoSelecionada, respostaCorreta) {
  if (opcaoSelecionada === respostaCorreta) {
    acertos++;
  } else {
    erros++;
  }

  atual++;
  if (atual < perguntas.length) {
    mostraPergunta();
  } else {
    mostraResultado();
  }
}

function mostraResultado() {
  caixaPergunta.textContent = "Resultado Final:";
  caixaAlternativa.textContent = "";

  const resultadoTexto = `
    Você acertou <strong>${acertos}</strong> e errou <strong>${erros}</strong> perguntas.
  `;

  textoResultado.innerHTML = resultadoTexto;

  const historia = document.createElement("p");
  historia.classList.add("resultado-final");
  historia.textContent =
    "Um dia, uma médica usou a IA para diagnosticar uma doença rara. Ela percebeu que a tecnologia não substitui o olhar humano — apenas o amplia. Juntas, pessoa e máquina salvaram uma vida.";

  caixaResultado.appendChild(historia);

  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.textContent = "Reiniciar Quiz";
  botaoReiniciar.classList.add("botao-reiniciar");
  botaoReiniciar.addEventListener("click", reiniciarQuiz);

  caixaResultado.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
  atual = 0;
  acertos = 0;
  erros = 0;
  textoResultado.textContent = "";
  caixaResultado.innerHTML = "";
  mostraPergunta();
}

mostraPergunta();