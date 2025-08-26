const quizData = [
  {
    question: 'Qual dessas atividades mais te agrada?',
    options: [
      { text: 'Desenhar', result: 'Danielle' },
      { text: 'Fazer uma caminhada', result: 'Haerin' },
      { text: 'Ver filmes', result: 'Hanni' },
      { text: 'Tirar fotos', result: 'Hyein' },
      { text: 'Ler', result: 'Minji' }
    ]
  },
  {
    question: 'Você se considera uma pessoa extrovertida ou introvertida?',
    options: [
      { text: 'Introvertido', result: ['Haerin', 'Hanni', 'Hyein'] },
      { text: 'Extrovertido', result: ['Minji', 'Danielle'] }
    ]
  },
  {
    question: 'Qual dessas características você mais se identifica?',
    options: [
      { text: 'Organizado', result: 'Hanni' },
      { text: 'Calmo', result: 'Haerin' },
      { text: 'Sonhador', result: 'Hyein' },
      { text: 'Criativo', result: 'Danielle' },
      { text: 'Atlético', result: 'Minji' }
    ]
  },
  {
    question: 'Você se considera uma pessoa mais racional ou emocional?',
    options: [
      { text: 'Emocional', result: ['Hyein', 'Danielle', 'Hanni'] },
      { text: 'Racional', result: ['Minji', 'Haerin'] }
    ]
  },
  {
    question: 'Qual cor mais te agrada?',
    options: [
      { text: 'Rosa', result: 'Hanni' },
      { text: 'Azul', result: 'Minji' },
      { text: 'Verde', result: 'Haerin' },
      { text: 'Amarelo', result: 'Danielle' },
      { text: 'Roxo', result: 'Hyein' }
    ]
  }
];

let currentQuestion = 0;
let resultCount = {};

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;

  optionsContainer.innerHTML = '';
  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement('button');
    optionElement.innerText = option.text;
    optionElement.classList.add('option-btn');
    optionElement.addEventListener('click', () => selectOption(option.result));
    optionsContainer.appendChild(optionElement);
  });
}

function selectOption(result) {
  // Adiciona a classe 'active' à opção selecionada
  const selectedOption = document.querySelector('.option-btn.active');
  if (selectedOption) {
    selectedOption.classList.remove('active');
  }
  event.target.classList.add('active');

  // Atualiza a contagem de resultados
  if (Array.isArray(result)) {
    result.forEach((res) => {
      resultCount[res] = (resultCount[res] || 0) + 1;
    });
  } else {
    resultCount[result] = (resultCount[result] || 0) + 1;
  }

  // Avança para a próxima pergunta
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    // O teste acabou, determina o integrante com mais votos
    displayResult();
  }
}

function displayResult() {
  let maxVotes = 0;
  let result = '';

  for (const [key, value] of Object.entries(resultCount)) {
    if (value > maxVotes) {
      maxVotes = value;
      result = key;
    }
  }

  // Exibe a mensagem de resultado
  alert(`Você seria o integrante: ${result}`);
}

// Carrega a primeira pergunta ao carregar a página
loadQuestion();