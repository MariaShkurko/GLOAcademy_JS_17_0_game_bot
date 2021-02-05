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

    let number = randomInteger(1, 100);

    const isWin = () => {

        let userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber === null) {
            alert('Игра окончена');
        } else if (!isNumber(userNumber)) {
            alert('Введи число!');
            isWin();
        } else if (parseInt(userNumber) === number) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (parseInt(userNumber) > number) {
            alert('Загаданное число меньше');
            isWin();
        } else {
            alert('Загаданное число больше');
            isWin();
        }
    };

    isWin();
};

gameBot();