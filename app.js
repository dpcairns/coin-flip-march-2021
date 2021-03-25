// import functions and grab DOM elements
const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    // - randomly pick a computer throw ('heads' or 'tails')
    const randomNumber = Math.random();
    const actualHeadsOrTails = getActualHeadsOrTails(randomNumber);
    // - get the user's guess
    //     - it lives in the radio buttons sooommmmehow???
    // - compare user guess to computer throw
    // - display if the user won (show computer throw)
    // - increment the total
    // - increment the wins, if the user got it right
    // - display new values for total, wins, and losses
});