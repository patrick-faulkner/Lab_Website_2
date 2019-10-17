/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/

function displayDate(id) {
	document.getElementById(id).innerHTML = Date();
	alert("Warning!")
}

var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];



//Registration Page:
function viewStudentStats(id, toggle){
	if(toggle == 1){
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	} 
	else{
		document.getElementById(id).style.visibility = "hidden";	
		document.getElementById(id).style.height = "0px";
	} 
}

				

// Home Page: 
function changeColor(color){
	document.body.style.background = color;
}




// Football Season Stats Page:
function loadStatsPage(){
	var table = document.getElementById("stats_table");
	var rowCounter;
	var oppScore;
	var cuScore;
	var oppName;
	var wins = 0;
	var losses = 0;
	for(row_counter = 2; row_counter < table.rows.length; row_counter++){ // loops through row
		oppScore = table.rows[row_counter].cells[3].innerHTML;
		cuScore = table.rows[row_counter].cells[2].innerHTML;
		oppName = table.rows[row_counter].cells[1].innerHTML;
		if(Number(oppScore) > Number(cuScore)){
			console.log("Opp win");
			table.rows[row_counter].cells[4].innerHTML = oppName;
			losses++;
		} else{
			console.log("CU win");
			table.rows[row_counter].cells[4].innerHTML = "CU Boulder";
			wins++;
		}   
	}
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
}

// Football Player Information Page
function loadPlayersPage(){
	var x = document.getElementById("player_selector");
	for(var i = 0;i < players.length;i++){
		var option = (document.createElement("option"));
		option.innerHTML = players[i].name;
		option.setAttribute('href', '#');
		console.log(i);
		if(i == 0) option.onclick = function(){switchPlayers(0);};
		else if (i == 1) option.onclick = function(){switchPlayers(1);};
		else if (i == 2) option.onclick = function(){switchPlayers(2);};
		else if (i == 3) option.onclick = function(){switchPlayers(3);};
		x.appendChild(option);
	}

}

function switchPlayers(playerNum){
	var x = document.getElementById("player_img");
	x.setAttribute('src', players[playerNum].img);
	document.getElementById("p_year").innerHTML = players[playerNum].year;
	document.getElementById("p_major").innerHTML = players[playerNum].major;
	document.getElementById("g_played").innerHTML = players[playerNum].games_played;
	document.getElementById("p_yards").innerHTML = players[playerNum].pass_yards;
	document.getElementById("avg_p_yards").innerHTML = Math.round(players[playerNum].pass_yards/players[playerNum].games_played);
	document.getElementById("r_yards").innerHTML = players[playerNum].rushing_yards;
	document.getElementById("avg_r_yards").innerHTML = Math.round(players[playerNum].rushing_yards/players[playerNum].games_played);
	document.getElementById("rec_yards").innerHTML = players[playerNum].receiving_yards;
	document.getElementById("avg_rec_yards").innerHTML = Math.round(players[playerNum].receiving_yards/players[playerNum].games_played);
}
				

