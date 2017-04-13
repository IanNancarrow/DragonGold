


$(document).ready(function(){
   //Tools******************



	//Variables******************

	var goldValue = document.getElementById('Gold');
	var playerGoldClick = document.getElementById('Dragon');
	var playerItem1Click = document.getElementById('s1');
	var soldout1 = false;
	var playerItem2Click = document.getElementById('s2');
	var soldout2 = false;
	var playerItem3Click = document.getElementById('s3');
	var soldout3 = false;
	var goldGain = 1;
	var winGame = false;
	var gold = 0;

	//Constructors******************

	playerGoldClick.addEventListener('click', function(event) {
		if (winGame == false) {
			gold += goldGain;
			//innerHTML is the content of an element - this is basically taking the number of gold and displaying it in html.
			goldValue.innerHTML = gold;
		} else if (winGame == true) {
			gold = 1000000;
			goldValue.innerHTML = gold;
			playerGoldClick.src = "images/soldout.png";
		}
	})

	playerItem1Click.addEventListener('click', function(event) {
		if (gold >= 100 && soldout1 == false) {
			gold -= 100;
			goldGain = 2;
			playerItem1Click.src = "images/soldout.png";
			goldValue.innerHTML = gold;
			soldout1 = true;
		}
	})

	playerItem2Click.addEventListener('click', function(event) {
		if (gold >= 500 && soldout2 == false) {
			gold -= 500;
			goldGain = 5;
			playerItem1Click.src = "images/soldout.png";
			playerItem2Click.src = "images/soldout.png";
			goldValue.innerHTML = gold;
			soldout1 = true;
			soldout2 = true;
		}
	})

	playerItem3Click.addEventListener('click', function(event) {
		if (gold >= 1000 && soldout3 == false) {
			gold -= 1000;
			playerItem1Click.src = "images/soldout.png";
			playerItem2Click.src = "images/soldout.png";
			playerItem3Click.src = "images/soldout.png";
			goldValue.innerHTML = gold;
			soldout1 = true;
			soldout2 = true;
			soldout3 = true;
			winGame = true;
		}
	})





	//Functions******************



	//Pseudo*******************



	//Runners******************

	 


})






