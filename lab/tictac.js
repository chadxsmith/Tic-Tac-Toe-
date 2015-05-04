$(document).ready(function() {

	var x = ["http://upload.wikimedia.org/wikipedia/commons/7/7e/Red_x.png"]
	var o = ["http://biosector01.com/wiki/images/thumb/b/bc/LetterO.png/30px-LetterO.png"]
	var turn = 1
	var checkX = []
	var checkO = []
	console.log(checkO)

	$('.container').click(function(){
		if (turn % 2 ===0) {

			$(".container").prepend("<p>Player1</p>")
			p = $( "p" ).detach();

			
    		}
    	else {
    		// $(".container").prepend("<p>Player2</p>")
    		$(".container").prepend("<p>Player2</p>")
    		
    	}	// $( this ).remove();
    	});
    
	// 	function playerOne() {
	// 		$('.container').prepend("<p>Player1</p>")
	// 		// $('.container').hide()
	// }

	// 	function playerTwo() {
	// 		$('.container').prepend("<p>Player2</p>")
	// 		$('.container').prepend("<p>Player1</p>").hide();

	// }

	// });
		
		// $('.container').prepend("<p>Player1</p>")
		// $('.container').prepend("<p>Player2</p>")
	

	// Adding X's
	function addX(current) {
		addXLocation = $(current).css({"background-image" : "url('" + x + "')"})
		checkX.push(addOLocation)
		

		// $( ".container" ).append( "<p>fadsfadssfdsa</p>" )
	}

	//Adding O's
	function addO(current) {
		addOLocation = $(current).css({"background-image" : "url('" + o + "')"})
		checkO.push(addOLocation)
	}

	// Checking X's
	function checkerX() {
		if (checkX.length >= 5) {
			console.log(checkX)
			alert("You're in a draw");
		} 
	}

	// Checking O's
	function checkerO() {
		if (checkO.length >= 5) {
			console.log(checkO)
			alert("You're in a draw");
		} 
	}





	//Winner's
	function winner() {
		turn++
	}

	//Reset Match 
	function reset() {
	$('.box').css('background-image', 'none');
		checkO = [] 
		checkX = [] 
	}





	//Game Logic 
	$( ".box" ).click(function() {
			if (turn % 2 ===0) {
				addX(this)
				// alert("Player Two, it's your turn ");
			
			}
			else {
				addO(this)
				// alert("Player One, it's your turn ");
			 
			}
			checkerO()	
			checkerX()	
			winner() 

	});// end of ".box" click function 


	$( "#reset-button" ).click(function() {
			reset()
	});// end of ".reset-button" click function 

});





