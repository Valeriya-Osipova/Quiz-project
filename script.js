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
    renderProgress(questionCount, step);
    renderQuestion(questionCount, step);
}

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

    // let answersLabels = document.getElementsByClassName('quiz__answer')

    // for (let i = 0; i < data.questions[index].answers.length; i ++){
    //     answersLabels[i].innerHTML = data.questions[index].answers[i]

    //     console.log(data.questions[index].answers.length)
    // }
}

//Генерация ответов

function renderAnswers (answers){
    let answerHTML = []

    answers.forEach((answer, id) => {
        const element = 
        `<div class="quiz__answer" data-id="${id}">${answer}</div>`
        answerHTML.push(element)
    });

}




renderAnswers()
renderQuestion(questionCount, step);
renderProgress(questionCount, step)
