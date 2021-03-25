// import functions and grab DOM elements
import { getActualHeadsOrTails } from './utils.js';

const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const resetButton = document.getElementById('reset');

// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    // - randomly pick a computer throw ('heads' or 'tails')
    const randomNumber = Math.random();
    const actualHeadsOrTails = getActualHeadsOrTails(randomNumber);
    
    // - get the user's guess
    // use querySelector to get the currently selected radio button
    const currentlySelectedRadioButton = document.querySelector('input:checked');

    const userGuess = currentlySelectedRadioButton.value;
    
    total++;

    if (userGuess === actualHeadsOrTails) {
        wins++;
        whoWonEl.textContent = 'You won the flip!';
    } else {
        whoWonEl.textContent = 'You lost the flip!';
    }

    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
});

function reset() {
    whoWonEl.textContent = '';
    wins = 0;
    total = 0;
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
}

resetButton.addEventListener('click', reset);