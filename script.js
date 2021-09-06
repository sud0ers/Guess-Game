'use strict';

let secretNumber = Math.trunc(Math.random() *20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if(!guess){
        document.querySelector('.message').textContent = 'No number';

        //when player wins

    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        score++;
        document.querySelector('.score').textContent = score;

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You are losing the game';
        }

    }else if(guess < secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You are losing the game';
        }

    }
});


document.querySelector('.again').addEventListener('click', function(){
    // console.log('reset');
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.guess').value = '' ;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    secretNumber = Math.trunc(Math.random() *20) + 1;
    document.querySelector('.number').textContent = secretNumber;
})

