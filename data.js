const data = {
    title: 'Тест на знание основ JavaScript',
    questions: [
        {
            question: 'Какие функции выполняет JS?',
            answers: [
                'Выполняет работу с сервером',
                'Создает разметку на странице сайта',
                'Отвечает за работу с базами данных',
                'Отвечает за функции на стороне клиента',
            ],
            validAnswer: 4
        },
        {
            question: 'Какие циклы есть в языке JavaScript?',
            answers: [
                'for, forMap, foreach, while',
                'for, while, do while',
                'for, while, do while, foreach',
            ],
            validAnswer: 2
        },
        {
            question: 'Где верно указано имя переменной?',
            answers: [
                'var 2num;',
                'ver num;',
                'var num-1;',
                'var num',
                'var num_1;',
            ],
            validAnswer: 5
        },
        {
            question: 'К какому типу относится значение NaN?',
            answers: [
                'К числовому',
                'К строковому',
                'К логическому ',
            ],
            validAnswer: 1
        },
        {
            question: 'Что означает значение undefined?',
            answers: [
                'Ошибочный результат вычислений',
                'Что значение не было присвоено',
                'Ссылкой на несуществующий объект ',
            ],
            validAnswer: 2
        },
        {
            question: 'Можно ли в JavaScript в переменную, в которой ранее хранилось целое число, записать объект?',
            answers: [
                'Можно',
                'Нельзя ',
            ],
            validAnswer: 1
        },
        {
            question: 'Каким будет консольный вывод кода: </br> <span class="code">console.log (NaN === NaN, NaN == NaN);</span>',
            answers: [
                'false, false',
                'Error ',
                'false, true',
                'There isn`t such thing like NaN',
                'true',
            ],
            validAnswer: 1
        },
    ]
}
