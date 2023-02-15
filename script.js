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

console.log(dom)

let questionCount = data.questions.length;
let step = 0;
let result = 0;


dom.button.onclick =() =>{
    step = step < questionCount ? step +1 : step;
    renderProgress(questionCount, step);
    renderQuestion(step);
}

function renderProgress (total, step){
    const progressPercent = 100/total * step;
    dom.progress.questionNumber.innerHTML = step;
    dom.progress.totaQuestions.innerHTML = total;
    dom.progress.progressFill.style.width = `${progressPercent}%`;
}

function renderQuestion (step){
    //data.questions.answers.forEach (element)
    dom.question.innerHTML = data.questions[step].question
    dom.title.innerHTML = data.title
}
renderQuestion(step);

console.log(data)
renderProgress(questionCount, step)