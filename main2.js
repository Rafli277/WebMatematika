const quizData = [
  {
    question: 'Apa rumus menghitung luas bangun datar persegi panjang?',
    a: 'p x l',
    b: 's x s',
    c: '4 x s',
    d: '22 / 7',
    correct: 'a',
  },
  {
    question: 'Apa rumus menghitung keliling bangun datar persegi panjang?',
    a: 'p x l',
    b: '2 x (p+l)',
    c: '4 x s',
    d: '22 / 7',
    correct: 'b',
  },
  {
    question: 'Apa rumus menghitung luas segitiga?',
    a: '1/2 × a × t',
    b: 'pitagoras × 3',
    c: '4 x s',
    d: 's x s',
    correct: 'a',
  },
  {
    question: 'Apa rumus menghitung luas bangun datar persegi?',
    a: '4 x s',
    b: 's / s',
    c: 's m s',
    d: 's x s',
    correct: 'd',
  },
  {
    question: 'Apa rumus menghitung keliling bangun datar persegi?',
    a: '1/2 x (a+b) x t',
    b: '2 x (p + l)',
    c: '4 x s',
    d: 's x s',
    correct: 'c',
  },
  {
    question: 'Apa rumus menghitung keliling layang-layang?',
    a: 'semua sisi ditambahkan',
    b: 's x s',
    c: '1/2 x (a+b) x t',
    d: 'p x l',
    correct: 'a',
  },
  {
    question: 'Apa rumus menghitung luas layang-layang?',
    a: 'semua sisi ditambahkan',
    b: '1/2 x d1 x d2',
    c: 'pitagoras x 3',
    d: 's x s',
    correct: 'b',
  },
  {
    question: 'Apa rumus luas trapesium?',
    a: 'a x t',
    b: 's x s',
    c: '4 x s',
    d: '1/2 x (a+b) x t',
    correct: 'd',
  },
  {
    question: 'Apa rumus luas jajar genjang?',
    a: '1/2 × (a+b) × t',
    b: '2×(p+l)',
    c: '1/2 × a × t',
    d: 'a × t',
    correct: 'd',
  },
  {
    question: 'Apa rumus luas belah ketupat?',
    a: '4 x s',
    b: 's x s',
    c: 'a x t',
    d: '1/2 x (a+b) x t',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
