function hangman() {
	//select word
	var word;
	var noSpace;
	var num;
	var charCount;
	
	num = Math.floor(Math.random()*7+1);
	switch(num) {
		case 1:
		  word = "Development";
		  break;
		case 2:
		  word = "Portfolio";
		  break;
		case 3:
		  word = "Stylesheet";
		  break;
		case 4:
		  word = "Domain";
		  break;
		case 5:
		  word = "Extensible";
		  break;
		case 6:
		  word = "Scripting";
		  break;
		case 7:
		  word = "Closing Tag";
		  break;
	}
	console.log(word);
	
	//build game board
	charCount = word.length;
	var i;
	var character;
	for (i = 0; i < charCount; i++) {
		var character = word.charAt(i);
		var row = document.getElementById("spellgame");
		console.log(character);
		if (character == ' ') { 
		  newCell = row.insertCell(-1);
		  newCell.innerHTML = "<td> </td>";
		} else {
		  character = character.toUpperCase();
		  newCell = row.insertCell(-1);
		  newCell.innerHTML = "<td> </td>";
		  newCell.className = "empty";
		}
	}
	
	
	
	//get user's selection and compare to correct answer
	
}
