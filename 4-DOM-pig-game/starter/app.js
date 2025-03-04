/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gamePlaying, dicePreviousc;
var previousDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Random number
        // var dice = Math.floor(Math.random() * 6) + 1;
        var dice = Math.floor(Math.random() * 2) + 5;


        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1

        if (previousDice === 6 && dice === 6) {
            console.log('ZERO');
            scores[activePlayer] === 0;
            roundScore === 0;
            previousDice === 0;
            console.log('previous IN', previousDice);
            nextPlayer();
        } else if (dice !== 1) {
            // Add score
            previousDice = dice;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            console.log('previousDice', previousDice);
        } else {
            // Next player
            console.log('Rolled a 1!!');
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add the CURRENT score to the GLOBAL score
        // if (previousDice === 6 && dice === 6) {

        //     scores[activePlayer] === 0;
        // } else {
        scores[activePlayer] += roundScore;
        // }


        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // console.log('Scores of active player: Player ' + activePlayer + ': ' + scores[activePlayer]);

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false; // State change, when a player wins
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Next player
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    console.log('Game started!');
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // 0: player 1 , 1: player 2
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('#score-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// document.querySelector('.dice').style.display = 'block';