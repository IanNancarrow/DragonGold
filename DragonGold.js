


$(document).ready(function(){
   //Tools******************

var sleep = function(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
    break;
    }
  }
};


	//Variables******************

	var goldValue = document.getElementById('Gold');
	var playerGoldClick = document.getElementById('Dragon');
	var eWeapon = document.getElementById('Equip');
	var playerDefend = document.getElementById('Knight');
	var playerItem1Click = document.getElementById('s1');
	var soldout1 = false;
	var playerItem2Click = document.getElementById('s2');
	var soldout2 = false;
	var playerItem3Click = document.getElementById('s3');
	var soldout3 = false;
	var goldGain = 1;
	var winGame = false;
	var gold = 0;
	var hp = 100;
	var health = document.getElementById('Health');
	var defending = false;
	var playerDied = false;
	var clickCount = 0;
	var clickSlash = document.getElementById('Slash');

	//Functions******************

	function clickCounter() {
		clickCount += 1;
		if (clickCount == 1) {
			clickSlash.src ="images/slash1.png";
			$('#Slash').show();
			$('#Slash').fadeOut();
		} else if (clickCount == 2) {
			clickSlash.src ="images/slash2.png";
			$('#Slash').show();
			$('#Slash').fadeOut();
		} else if (clickCount == 3) {
			clickSlash.src ="images/slash3.png";
			$('#Slash').show();
			$('#Slash').fadeOut();
			clickCount = 0;
		}

	}



	playerDefend.addEventListener('mouseover', function(event) {
		if (playerDied == false) {
			playerDefend.src = "images/knightd.png";
			eWeapon.style.visibility = "hidden";
			defending = true;
			// sleep(2000);
			// playerDefend.src = "images/knight.png"
			// defending = false;
		}
	})

	playerDefend.addEventListener('mouseout', function(event) {
		if (playerDied == false) {
			playerDefend.src = "images/knight.png";
			eWeapon.style.visibility = "visible";
			defending = false;
			// sleep(2000);
			// playerDefend.src = "images/knight.png"
			// defending = false;
		}
	})



	playerGoldClick.addEventListener('click', function(event) {
		if (playerDied == false) {
			if (winGame == false) {
				playerDefend.src = "images/knight.png";
				eWeapon.style.visibility = "visible";
				clickCounter();
				gold += goldGain;
				//innerHTML is the content of an element - this is basically taking the number of gold and displaying it in html.
				goldValue.innerHTML = gold;
			} else if (winGame == true) {
				gold = 1000000;
				goldValue.innerHTML = gold;
				playerGoldClick.src = "images/boom.png";
			}
		} else if (playerDied == true) {
			goldGain = 0;
		}
	})

	playerItem1Click.addEventListener('click', function(event) {
		if (playerDied == false) {
			if (gold >= 20 && soldout1 == false) {
				gold -= 20;
				goldGain = 2;
				playerItem1Click.src = "images/soldout.png";
				goldValue.innerHTML = gold;
				soldout1 = true;
				eWeapon.src = "images/esword1.png";
			}
		}
	})

	playerItem2Click.addEventListener('click', function(event) {
		if (playerDied == false) {
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
		}
	})

	playerItem3Click.addEventListener('click', function(event) {
		if (playerDied == false) {
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
		}
	})

	function delayer() {
		$('#Flavor').hide();
		setTimeout(function(){ randomAttack(); }, 3000);
	}

	function randomAttack() {
		playerGoldClick.src = "images/dragon.png";
		// playerDefend.src = "images/knight.png";
		// eWeapon.style.visibility = "visible";
		var ranNum = Math.floor((Math.random() * 5000) + 1000);
	    setTimeout(function(){ attacking(); }, ranNum);
	}

	function attacking() {
		if (winGame == true) {
			
		} else if (winGame == false) {
			playerGoldClick.src = "images/dragona.png";
			setTimeout(function(){ attackKnight(); }, 1000);
		}

	}

	function attackKnight() {
		//playerGoldClick.src = "images/dattack.png";
		
		if (defending == true) {
			$('#Flavor').show();
			$('#Flavor').fadeOut();
			playerDefend.src = "images/knightdd.png"
			randomAttack();
		} else if (defending == false) {
			var ranDam = Math.floor((Math.random() * 50) + 5);
			hp -= ranDam;
			health.innerHTML = hp;
			if (hp <= 0) {
				hp = 0;
				health.innerHTML = hp;
				playerDied = true;
				playerDefend.src = "images/RIP.png";
				eWeapon.style.visibility = "hidden";
			} else {
				playerGoldClick.src = "images/dragon.png";
				knightHit();
			}

		}
	}

	function knightHit() {
		playerGoldClick.src = "images/dragon.png"
		playerDefend.src = "images/knighthit.png"
		eWeapon.style.visibility = "hidden";
		setTimeout(function(){ randomAttack(); }, 1000);
	}



	delayer();



	//Functions******************



	//Pseudo*******************



	//Runners******************

	 


})






