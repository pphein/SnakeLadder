
/*
 * At least Numbers of Users = 2
 * Maximum Numbers of Users = 5
 * Choose User No.
 * And Every User has been given a color
 * User 1 is the first turn and rolling die
 * And then the other consequently
 * The die shows the score and get its score and plus to Users' Scores
 * When the Users' score is equal to the bottom of a ladder, bonus to the head of the ladder
 * When the Users' score id equal to the head of a snake, punish to the tail of the snake
 * The first one has 100 scores, He is a winner.
 * And the Restart the Game.
 * Be enjoyful with my Game
 *
*/

var activePlayer, userOne, userTwo, scoreOne, scoreTwo, dieScoreOne, dieScoreTwo, dieScore;


var players = [];
var numbersOfPlayers = 2;

activePlayer = 0;
	dieScore = 0;
	scoreOne = 0;
	scoreTwo = 0;


userOne = document.getElementById('user1').value;
userTwo = document.getElementById('user2').value;

document.querySelector('#score-0').textContent = scoreOne;
document.querySelector('#score-1').textContent = scoreTwo;

if (userOne) {
	document.querySelector('#name-0').textContent = userOne;
}else{
 userOne = 'User 1';
 document.querySelector('#name-0').textContent = userOne;
}
if (userTwo) {
	document.querySelector('#name-1').textContent = userTwo;
}else{
	userTwo = 'User 2';
	document.querySelector('#name-1').textContent = userTwo;
}


document.querySelector('.status-' + activePlayer).textContent = '*';
document.querySelector('.status-' + activePlayer).style.backgroundColor = 'blue';

document.querySelector('#cell-1').style.backgroundColor = 'purple';



document.querySelector('.roll-die').addEventListener('click', function () {
	dieScore = Math.floor(Math.random() * 6 + 1);
	
	document.querySelector('.die').src = 'dice-'+dieScore+'.png';
	
	//alert(dieScore);

	if (activePlayer === 0) {
		if(scoreOne){
			document.querySelector('#cell-'+scoreOne).style.backgroundColor = '';
		}
		scoreOne += dieScore;

		document.querySelector('#score-'+activePlayer).textContent = scoreOne;
		setTimeout(function(){
			document.querySelector('#cell-'+scoreOne).style.backgroundColor = 'blue';
		}, 3000);

		if (scoreOne == 2) {
			scoreOne = 23;
			document.getElementById('ladder').play(); 
		}

		if (scoreOne == 10) {
			scoreOne = 30; 
			document.getElementById('ladder').play();
		}

		if (scoreOne == 16) {
			scoreOne = 7;
			document.getElementById('snake').play();
		}

		if (scoreOne == 28) {
			scoreOne = 48;
			document.getElementById('ladder').play(); 
		}

		if (scoreOne == 43) {
			scoreOne = 38; 
			document.getElementById('snake').play();
		}

		if (scoreOne == 54) {
			scoreOne = 30;
			document.getElementById('snake').play();
		}

		if (scoreOne == 59) {
			scoreOne = 78;
			document.getElementById('ladder').play();
		}

		if (scoreOne == 73) {
			scoreOne = 70; 
			document.getElementById('snake').play();
		}

		if (scoreOne == 74) {
			scoreOne = 88; 
			document.getElementById('ladder').play();
		}

		if (scoreOne == 75) {
			scoreOne = 67; 
			document.getElementById('snake').play();
		}

		if (scoreOne == 83) {
			scoreOne = 46; 
			document.getElementById('snake').play();
		}

		if (scoreOne == 96) {
			scoreOne = 63;
			document.getElementById('snake').play();
		}

		if (scoreOne == 99) {
			scoreOne = 82;
			document.getElementById('snake').play(); 
		}

		if (scoreOne >= 100){
			scoreOne = 100;
			document.querySelector('#score-'+activePlayer).textContent = scoreOne;
			document.querySelector('#cell-'+scoreOne).style.backgroundColor = 'blue';
			document.getElementById('winner').play();
			alert('Game Over!! '+userOne+' is Winner');
			window.location.reload(true);
		}



		document.querySelector('#score-'+activePlayer).textContent = scoreOne;
		document.querySelector('#cell-'+scoreOne).style.backgroundColor = 'blue';
		
		document.querySelector('.status-' + activePlayer).textContent = '';
		document.querySelector('.status-' + activePlayer).style.backgroundColor = '';

		

		

		activePlayer = 1;
		document.querySelector('#score-'+activePlayer).textContent = scoreTwo;
		document.querySelector('.status-' + activePlayer).textContent = '*';
		document.querySelector('.status-' + activePlayer).style.backgroundColor = 'red';

	}else{
		if (scoreTwo) {
			document.querySelector('#cell-'+scoreTwo).style.backgroundColor = '';
		}
		scoreTwo += dieScore;
		document.querySelector('#score-'+activePlayer).textContent = scoreTwo;
		setTimeout(function(){
				document.querySelector('#cell-'+scoreTwo).style.backgroundColor = 'red';
		}, 3000);

		if (scoreTwo == 2) {
			scoreTwo = 23;
			document.getElementById('ladder').play(); 
		}

		if (scoreTwo == 10) {
			scoreTwo = 30; 
			document.getElementById('ladder').play();
		}

		if (scoreTwo == 16) {
			scoreTwo = 7;
			document.getElementById('snake').play();
		}

		if (scoreTwo == 28) {
			scoreTwo = 48;
			document.getElementById('ladder').play(); 
		}

		if (scoreTwo == 43) {
			scoreTwo = 38; 
			document.getElementById('snake').play();
		}

		if (scoreTwo == 54) {
			scoreTwo = 30;
			document.getElementById('snake').play();
		}

		if (scoreTwo == 59) {
			scoreTwo = 78;
			document.getElementById('ladder').play();
		}

		if (scoreTwo == 73) {
			scoreTwo = 70; 
			document.getElementById('snake').play();
		}

		if (scoreTwo == 74) {
			scoreTwo = 88; 
			document.getElementById('ladder').play();
		}

		if (scoreTwo == 75) {
			scoreTwo = 67; 
			document.getElementById('snake').play();
		}

		if (scoreTwo == 83) {
			scoreTwo = 46; 
			document.getElementById('snake').play();
		}

		if (scoreTwo == 96) {
			scoreTwo = 63;
			document.getElementById('snake').play();
		}

		if (scoreTwo == 99) {
			scoreTwo = 82;
			document.getElementById('snake').play(); 
		}

		if (scoreTwo >= 100){
			scoreTwo = 100;
			document.querySelector('#score-'+activePlayer).textContent = scoreTwo;
			document.querySelector('#cell-'+scoreTwo).style.backgroundColor = 'red';
			document.getElementById('winner').play();
			alert('Game Over!! '+userTwo+' is Winner');
			window.location.reload(true);
		}

		document.querySelector('#score-'+activePlayer).textContent = scoreTwo;
		document.querySelector('#cell-'+scoreTwo).style.backgroundColor = 'red';
		
		document.querySelector('.status-' + activePlayer).textContent = '';
		document.querySelector('.status-' + activePlayer).style.backgroundColor = '';

		

		activePlayer = 0;
		document.querySelector('#score-'+activePlayer).textContent = scoreOne;
		document.querySelector('.status-' + activePlayer).textContent = '*';
		document.querySelector('.status-' + activePlayer).style.backgroundColor = 'blue';
	}

	if( scoreOne === scoreTwo ){
		document.querySelector('#cell-'+scoreOne).style.backgroundColor = 'purple';
	}else{
		document.querySelector('#cell-'+scoreOne).style.backgroundColor = 'blue';
		document.querySelector('#cell-'+scoreTwo).style.backgroundColor = 'red';
	}

	
});

document.querySelector('.restart-btn').addEventListener('click', init);

function init() {
	window.location.reload(true);	

}





