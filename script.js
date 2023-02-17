const dom = {
    title: document.getElementById('title'),

    progress: {
        progressFill: document.getElementById('progress-fill'),
        questionNumber: document.getElementById('question-number'),
        totaQuestions: document.getElementById('total-questions'),
    },

    question: document.getElementById('question'), 
    answers: document.getElementById('answers'),
    button: document.getElementById('next')
}

let questionCount = data.questions.length;
let step = 0;
let result = 0;


dom.button.onclick =() =>{
    step = step < questionCount ? step + 1 : step;
    renderQuiz(questionCount, step)
}

// Генерация всего квиза

function renderQuiz(total, step){
    renderProgress(total, step);
    renderQuestion(total, step);
    if (step + 1 == total){
        changeButtonText();
    }
    if (step < total){
        renderAnswers(data.questions[step].answers)
    } else if (step == total){
        renderResults()
    }
    isDesableButton(true);
}
renderQuiz(questionCount, step)


//Заполнение прогресс бара

function renderProgress (total, step){
    const progressPercent = 100/total * step;
    dom.progress.questionNumber.innerHTML = step;
    dom.progress.totaQuestions.innerHTML = total;
    dom.progress.progressFill.style.width = `${progressPercent}%`;
}

//Генерация вопросов + заголовок

function renderQuestion (total, step){
    dom.title.innerHTML = data.title
    let index = step
    if (step >= total){
        index = step - 1
    }
    dom.question.innerHTML = data.questions[index].question
}

//Генерация ответов

function renderAnswers (answers){
    let answerHTML = []

    answers.forEach((answer, id) => {
        const element = 
        `<div class="quiz__answer" data-id="${id + 1}">${answer}</div>`
        answerHTML.push(element)
    });
    dom.answers.innerHTML = ''
    for (let i = 0; i< answerHTML.length; i++){
        dom.answers.innerHTML += answerHTML[i]
    }
}

//Отслеживание клика

dom.answers.onclick =(event) =>{
    const target = event.target;
    if (target.classList.contains('quiz__answer')){
        const answerNumber = target.dataset.id 
        console.log(answerNumber)
        const isValid = checkAnswer(step, answerNumber)
        console.log(isValid)
        if (isValid){
            target.classList.add('quiz__answer_right')
        } else target.classList.add('quiz__answer_false')
        isDesableButton(false)
    }

}

//Проверка ответа

function checkAnswer (step, answerNumber){
    const validId = data.questions[step].validAnswer;
    return validId == answerNumber
}

//Неактивность кнопки

function isDesableButton (isDesable){
    if (isDesable) {
        dom.button.classList.add('button-desable');
    } else{
        dom.button.classList.remove('button-desable');
    }
}

//Кнопка результат

function changeButtonText(){
    dom.button.innerText = 'Посмотреть результат';
    dom.button.dataset.result = 'result';
}

//Генерация результатов

function renderResults(){

}
