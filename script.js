let poems = []; // poems配列を空で初期化

const setupContainer = document.getElementById('setup-container');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const poemSelection = document.getElementById('poem-selection');
const startRandomButton = document.getElementById('start-random-button');
const startSelectedButton = document.getElementById('start-selected-button');
const questionNumber = document.getElementById('question-number');
const kamiNoKu = document.getElementById('kami-no-ku');
const answerOptions = document.getElementById('answer-options');
const resultMessage = document.getElementById('result-message');
const correctAnswerContainer = document.getElementById('correct-answer-container');
const correctKamiNoKu = document.getElementById('correct-kami-no-ku');
const correctShimoNoKu = document.getElementById('correct-shimo-no-ku');
const modernTranslation = document.getElementById('modern-translation');
const nextQuestion = document.getElementById('next-question');
const score = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const correctSound = document.getElementById('correct-sound');

let quizPoems = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

async function loadPoems() {
    try {
        const response = await fetch('poems.json');
        poems = await response.json();
        init(); // データが読み込まれてからinitを呼び出す
    } catch (error) {
        console.error('百人一首データの読み込みに失敗しました:', error);
        alert('百人一首データの読み込みに失敗しました。ページをリロードしてください。');
    }
}

function init() {
    poemSelection.innerHTML = ''; // Clear existing content
    const musumePoemIds = [18, 22, 57, 70, 77, 81, 87]; // むすめふさほせの歌番号

    poems.forEach(poem => {
        const container = document.createElement('div');

        if (musumePoemIds.includes(poem.id)) {
            container.classList.add('musume-poem');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `poem-${poem.id}`;
        checkbox.value = poem.id;
        checkbox.addEventListener('change', updateSelectedCount);

        const label = document.createElement('label');
        label.htmlFor = `poem-${poem.id}`;
        label.innerHTML = `<b>${poem.id}.</b> ${poem.kami_no_ku}<br>${poem.shimo_no_ku}`;

        container.appendChild(checkbox);
        container.appendChild(label);
        poemSelection.appendChild(container);
    });
    updateSelectedCount();
}

function updateSelectedCount() {
    const selectedCount = poemSelection.querySelectorAll('input:checked').length;
    startSelectedButton.textContent = `選んだ${selectedCount}首でクイズを始める`;
    startSelectedButton.disabled = selectedCount === 0;
}

function startQuiz(selectedPoems) {
    if (selectedPoems.length === 0) {
        alert('クイズを始めるには、少なくとも1首選んでください。');
        return;
    }
    quizPoems = selectedPoems.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    setupContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const currentPoem = quizPoems[currentQuestionIndex];
    questionNumber.textContent = `第${currentQuestionIndex + 1}問`;
    kamiNoKu.innerHTML = currentPoem.kami_no_ku;

    // Create answer options
    const options = createAnswerOptions(currentPoem);

    answerOptions.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(button, option, currentPoem.shimo_no_ku));
        answerOptions.appendChild(button);
    });

    resultMessage.textContent = '';
    correctAnswerContainer.classList.add('hidden');
    nextQuestion.classList.add('hidden');
}

function createAnswerOptions(correctPoem) {
    let options = [correctPoem.shimo_no_ku];
    const wrongPoems = poems.filter(p => p.id !== correctPoem.id);

    while (options.length < 4) {
        const randomPoem = wrongPoems[Math.floor(Math.random() * wrongPoems.length)];
        if (!options.includes(randomPoem.shimo_no_ku)) {
            options.push(randomPoem.shimo_no_ku);
        }
    }

    return options.sort(() => Math.random() - 0.5); // Shuffle options
}

function checkAnswer(button, selectedAnswer, correctAnswer) {
    // Disable all buttons
    const buttons = answerOptions.querySelectorAll('.answer-button');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        resultMessage.textContent = '正解！';
        button.classList.add('correct');
        correctSound.play();
        correctAnswers++;
    } else {
        resultMessage.textContent = '不正解…';
        button.classList.add('incorrect');
        // Highlight the correct answer
        buttons.forEach(btn => {
            if (btn.innerHTML === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    showCorrectAnswer();
}

function showCorrectAnswer() {
    const poem = quizPoems[currentQuestionIndex];
    correctKamiNoKu.innerHTML = poem.kami_no_ku;
    correctShimoNoKu.innerHTML = poem.shimo_no_ku;
    modernTranslation.textContent = `現代語訳：${poem.translation}`;
    correctAnswerContainer.classList.remove('hidden');
    nextQuestion.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizPoems.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    score.textContent = `${quizPoems.length}問中${correctAnswers}問正解です！`;
}

startRandomButton.addEventListener('click', () => {
    const randomPoems = poems.sort(() => Math.random() - 0.5).slice(0, 10);
    startQuiz(randomPoems);
});

startSelectedButton.addEventListener('click', () => {
    const selectedPoemIds = Array.from(poemSelection.querySelectorAll('input:checked')).map(input => parseInt(input.value));
    const selectedPoems = poems.filter(poem => selectedPoemIds.includes(poem.id));
    startQuiz(selectedPoems);
});

nextQuestion.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', () => {
    setupContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    // Re-initialize selection screen in case user wants to choose different poems
    init();
});

// Initial load
loadPoems(); // アプリ起動時にデータを読み込む