/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice, roundScore = 0, activePlayer = 0, scores = [0, 0], playerWin = false;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	dice = Math.floor(Math.random() * 6 + 1);
	document.querySelector('.dice').setAttribute('src', 'dice-'+dice+'.png');
	document.querySelector('.dice').style.display = 'block';
	
	if(dice === 1){
		nextPlayer();
	}else if(!playerWin){
		roundScore += dice;
		document.getElementById('current-'+activePlayer).textContent = roundScore;
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	scores[activePlayer] += roundScore;
	if(scores[activePlayer] >= 20){
		playerWin = true;
		document.getElementById('name-'+activePlayer).innerHTML = 'You Win';
		document.getElementById('current-'+activePlayer).textContent = 0;
		document.querySelector('.dice').style.display = 'none';
	}else{
		document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
	 	nextPlayer();
	}
});

document.querySelector('.btn-new').addEventListener('click', function(){
	init();

});


function nextPlayer(){
	if(!playerWin){
		document.getElementById('current-'+activePlayer).textContent = 0;
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
		activePlayer = activePlayer === 0 ? 1 : 0;
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('active')
		roundScore = 0;		
	}

}

function init(){
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.querySelector('.dice').style.display = 'none';
}