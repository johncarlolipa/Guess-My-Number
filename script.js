'use strict';

// console.log(document.querySelector('.message').textContent);//start guessing...


// //SELECTING AND MANIPULATING ELEMENTS
// document.querySelector('.message').textContent = "Yes sir!";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


//CLICK EVENTS

let secretNumber = Math.trunc(Math.random() * 21);// generate ng number from 0-20
let score = 20;//auto number, dito rin makikita kung ilang attempt 
let highScore = 0; //score na nakuha, 

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);// kapag kilick mo yung check dapat may guess number kang ilalagy

    //whne there is no input
    if (!guess) {
        displayMessage("No number provided!");

    //when player wins
    } else if (guess === secretNumber){
        displayMessage("Correct Number!");//kung yung guess number na nilagay ay same sa secretNumber then success
        document.querySelector('.number').textContent = secretNumber;// we use this para ilagay sa number yung generated na number sa secretnumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //when guess is wrong
    } else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too High!" : "Too Low");//kapag yung guess ay mataas sa secret number, display too high; vice-versa
            score--;//babawasan nito yung score
            document.querySelector('.score').textContent = score;//babaguhin nito yung nakadisplay na score
            } else {
            document.querySelector('.score').textContent = 0;//kapag 0 ang score, you lost the game
            displayMessage("You lost the game!");
            document.querySelector('body').style.backgroundColor = '#DC143C';
        } 
    }    
});


//restarting the game
document.querySelector('.again').addEventListener('click', function(){//once again is click, eto mangyayari
    score = 20; //reset score sa 20
    secretNumber = Math.trunc(Math.random() * 21);//generate ulit ng secret number
    displayMessage("Start guessing...");//display message ay magiging start guessing
    document.querySelector('.score').textContent = score; // balik yung text content na score sa 20
    document.querySelector('.number').textContent = "?"; // balik sa ? yung secret number
    document.querySelector('.guess').value = '';// guess number ay balik sa blank
    document.querySelector('body').style.backgroundColor = '#222'; // balik sa black ang bg
    document.querySelector('.number').style.width = '15rem';
});
