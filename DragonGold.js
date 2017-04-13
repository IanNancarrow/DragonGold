


$(document).ready(function(){
   //Tools******************



	//Variables******************

	var goldValue = document.getElementById('Gold');
	var playerClick = document.getElementById('Dragon');
	var gold = 0;

	//Constructors******************

	playerClick.addEventListener('click', function(event) {
		gold += 1;
		//innerHTML is the content of an element - this is basically taking the number of gold and displaying it in html.
		goldValue.innerHTML = gold;
		
	})


	//Functions******************



	//Pseudo*******************



	//Runners******************

	 


})






