// $(function(){
// 	console.log('We\'re loaded');
// })

window.onload = function() {
	console.log('We\'re loaded');
}

var a1 = document.getElementById('a1');
var turn = 0

function gamePlay() {
a1.setAttribute('class', 'green');

	// if (turn == 0) {

	// 	turn = 1
	// }

	// else if (turn == 1) {

	// 	turn = 0
	// }
}

a1.addEventListener('click', gamePlay);