'use strict';

const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameBot = () => {

    const maxCount = 10;

    let number = randomInteger(1, 100),
        count = 0;

    const isWin = () => {

        let userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber === null) {
            alert('Игра окончена');
        } else if (!isNumber(userNumber)) {
            alert('Введи число!');
            isWin();
        } else if (parseInt(userNumber) === number) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                gameBot();
            }
        } else if (count < maxCount - 1) {
            if (parseInt(userNumber) > number) {
                count++;
                alert('Загаданное число меньше, осталось попыток ' + (maxCount - count));
                isWin();
            } else {
                count++;
                alert('Загаданное число больше, осталось попыток ' + (maxCount - count));
                isWin();
            }
        } else {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                gameBot();
            }
        }
    };

    isWin();
};

gameBot();