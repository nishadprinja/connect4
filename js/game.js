window.onload = function() {

	var turn = 1;
	var name = $('#player1').val();
	$('#turntext').text(name);
	$('#startplay button').on('click', gameOn)
	function gamePlay(cellsInColumn, t) {
		for (i = 0; i < cellsInColumn.length; i++) {
		
			if (t == 1) { 
				if(cellsInColumn.eq(i).hasClass('blank')) {
					cellsInColumn.eq(i).attr('class', 'green')
					break;
				}
			}

			else if (t == 2) {
				if(cellsInColumn.eq(i).hasClass('blank')) {
					cellsInColumn.eq(i).attr('class', 'blue')
					break;
				}
			}
		}
		figureOutWinner();
	}

	function gameOn() {
		$('#startplay').attr('id', 'go');
		$('#menuheader').attr('id', 'headerback');
		$('#menuoptions').attr('id', 'optionsback');
		$('#namebox').attr('id', 'nameback');
		$('#menu-background').attr('id', 'inactive-menu');
		$('#menu-active').attr('id', 'menu');
		$('#notyet').attr('id', 'currentturn');
	}

	function executeTurn() {
		if (turn == 1) {
			//drop green coin
			gamePlay($(this).children(), turn)

			//this happens last
			name = $('#player2').val();
			turn = 2
			$('#turntext').text(name);
		}

		else if (turn == 2) {
			//drop blue coin
			gamePlay($(this).children(), turn)

			name = $('#player1').val();
			turn = 1
			$('#turntext').text(name);
		}
	}

	$("#col-a, #col-b, #col-c, #col-d, #col-e, #col-f, #col-g").on('click', executeTurn);
	
}




