


$(document).ready(function(){
   //Tools******************



	//Variables******************

	var goldValue = document.getElementById('Gold');
	var playerGoldClick = document.getElementById('Dragon');
	var eWeapon = document.getElementById('Equip');
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
			playerGoldClick.src = "images/boom.png";
		}
	})

	playerItem1Click.addEventListener('click', function(event) {
		if (gold >= 20 && soldout1 == false) {
			gold -= 20;
			goldGain = 2;
			playerItem1Click.src = "images/soldout.png";
			goldValue.innerHTML = gold;
			soldout1 = true;
			eWeapon.src = "images/esword1.png";
		}
	})

	playerItem2Click.addEventListener('click', function(event) {
		if (gold >= 50 && soldout2 == false) {
			gold -= 50;
			goldGain = 5;
			playerItem1Click.src = "images/soldout.png";
			playerItem2Click.src = "images/soldout.png";
			goldValue.innerHTML = gold;
			soldout1 = true;
			soldout2 = true;
			eWeapon.src = "images/esword2.png";
		}
	})

	playerItem3Click.addEventListener('click', function(event) {
		if (gold >= 100 && soldout3 == false) {
			gold -= 100;
			playerItem1Click.src = "images/soldout.png";
			playerItem2Click.src = "images/soldout.png";
			playerItem3Click.src = "images/soldout.png";
			goldValue.innerHTML = gold;
			soldout1 = true;
			soldout2 = true;
			soldout3 = true;
			winGame = true;
			eWeapon.src = "images/esword3.png";
		}
	})





	//Functions******************



	//Pseudo*******************



	//Runners******************

	 


})






