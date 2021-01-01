'use strict';

let score = 20;
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
let highscore = 0;
let secretNumber;

const calcSecretNumber = () => secretNumber = Math.floor((Math.random() * 20) + 1);
const showScore = score => document.querySelector('.score').textContent = score;
const message = message => document.querySelector('.message').textContent = message;
const body = color => document.querySelector('body').style.backgroundColor = color;

calcSecretNumber();
document.querySelector('.check').addEventListener('click', function () {
    let answer = Number(guess.value);
    //if the answer is empty
    if (!answer) {
        message('No Number, Please Input again !');
    }

    //if the answer is correct 
    else if (answer === secretNumber) {
        message('Correct Answer ! :)');
        number.textContent = secretNumber;
        number.style.width = '30rem';
        number.style.color = 'navy';
        body('navy');
        
        //save score
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        
        //if the answer is wrong
    } else if (answer !== secretNumber) {
        if (score > 1) {
            message(answer < secretNumber ? 'To Lower' : 'To High');
            score -= 1;
            showScore(score);
        } else { 
            showScore(0);
            message('Yout Lost the Game');
        }
    }

})
    document.querySelector('.again').addEventListener('click', function () {
        calcSecretNumber();
        guess.value = '';
        score = 20;
        showScore(score);
        message('Start guessing...');
        body('blue');
        number.textContent = '?';
        number.style.width = '15rem';
    })

