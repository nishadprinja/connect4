var a1 = $('#a1');
var a2 = $('#a2');
var a3 = $('#a3');
var a4 = $('#a4');
var a5 = $('#a5');
var a6 = $('#a6');
var b1 = $('#b1');
var b2 = $('#b2');
var b3 = $('#b3');
var b4 = $('#b4');
var b5 = $('#b5');
var b6 = $('#b6');
var c1 = $('#c1');
var c2 = $('#c2');
var c3 = $('#c3');
var c4 = $('#c4');
var c5 = $('#c5');
var c6 = $('#c6');
var d1 = $('#d1');
var d2 = $('#d2');
var d3 = $('#d3');
var d4 = $('#d4');
var d5 = $('#d5');
var d6 = $('#d6');
var e1 = $('#e1');
var e2 = $('#e2');
var e3 = $('#e3');
var e4 = $('#e4');
var e5 = $('#e5');
var e6 = $('#e6');
var f1 = $('#f1');
var f2 = $('#f2');
var f3 = $('#f3');
var f4 = $('#f4');
var f5 = $('#f5');
var f6 = $('#f6');
var g1 = $('#g1');
var g2 = $('#g2');
var g3 = $('#g3');
var g4 = $('#g4');
var g5 = $('#g5');
var g6 = $('#g6');

var winningCombinations = [
[a1, b1, c1, d1],
[b1, c1, d1, e1],
[c1, d1, e1, f1],
[d1, e1, f1, g1],
[a2, b2, c2, d2],
[b2, c2, d2, e2],
[c2, d2, e2, f2],
[d2, e2, f2, g2],
[a3, b3, c3, d3],
[b3, c3, d3, e3],
[c3, d3, e3, f3],
[d3, e3, f3, g3],
[a4, b4, c4, d4],
[b4, c4, d4, e4],
[c4, d4, e4, f4],
[d4, e4, f4, g4],
[a5, b5, c5, d5],
[b5, c5, d5, e5],
[c5, d5, e5, f5],
[d5, e5, f5, g5],
[a6, b6, c6, d6],
[b6, c6, d6, e6],
[c6, d6, e6, f6],
[d6, e6, f6, g6],
[a1, a2, a3, a4],
[a2, a3, a4, a5],
[a3, a4, a5, a6],
[b1, b2, b3, b4],
[b2, b3, b4, b5],
[b3, b4, b5, b6],
[c1, c2, c3, c4],
[c2, c3, c4, c5],
[c3, c4, c5, c6],
[d1, d2, d3, d4],
[d2, d3, d4, d5],
[d3, d4, d5, d6],
[e1, e2, e3, e4],
[e2, e3, e4, e5],
[e3, e4, e5, e6],
[f1, f2, f3, f4],
[f2, f3, f4, f5],
[f3, f4, f5, f6],
[g1, g2, g3, g4],
[g2, g3, g4, g5],
[g3, g4, g5, g6],
[a1, b2, c3, d4],
[b1, c2, d3, e4],
[c1, d2, e3, f4],
[d1, e2, f3, g4],
[g1, f2, e3, d4],
[f1, e2, d3, c4],
[e1, d2, c3, b4],
[d1, c2, b3, a4],
[a2, b3, c4, d5],
[b2, c3, d4, e5],
[c2, d3, e4, f5],
[d2, e3, f4, g5],
[g2, f3, e4, d5],
[f2, e3, d4, c5],
[e2, d3, c4, b5],
[d2, c3, b4, a5],
[a3, b4, c5, d6],
[b3, c4, d5, e6],
[c3, d4, e5, f6],
[d3, e4, f5, g6],
[g3, f4, e5, d6],
[f3, e4, d5, c6],
[e3, d4, c5, b6],
[d3, c4, b5, a6]
];

function figureOutWinner () {
	//return true or false if game is won


		winningCombinations.forEach(function(currentCombo){
			comboCount1 = 0;
			comboCount2 = 0;
			currentCombo.forEach(function(currentSpace){	
					if (currentSpace.hasClass('green')) {
						comboCount1++;
					}
					else if(currentSpace.hasClass('blue')) {
						comboCount2++;
					}
		if (comboCount1 == 4){
			$('.gameover').attr('class', 'gameover-background');
			$('.player-1-wins').attr('class', 'winner1');
			}

		else if (comboCount2 == 4){
			$('.gameover').attr('class', 'gameover-background');
			$('.player-2-wins').attr('class', 'winner2');
			}
				})
			})
		}