



var lapgan = 1;		//Counting for Laps
var orderofresult =1;	//The order of winner  which is in ascending
var offsetLeft;
var offsetTop;
var duration;
var thelastride = false; //It is the turn before the end of lap
var threeoclock=false;
var endgame = false;
var sixoclock = false;
var circle= false;
var ganti=0; 	//Lap Count of the horse

//Main Function
function create(){
	var circle= false;
	clearInterval(duration);

	
	finalponyPosition = []; //Final result array creation
	var stopbeginButton = document.getElementById('start');
	stopbeginButton.disabled=true;
	var moneyAmount = document.getElementById('funds').innerHTML; //Total amount of Money, inherited from HTML
	var roundChoose = document.getElementById('numberOfLaps'); //Number of laps in single game.
	var gambleAmount = document.getElementById('amount'); //The gamble limit amount 
	
	if(gambleAmount.value != "" && roundChoose.value != "" && (gambleAmount.value <= parseInt(moneyAmount))){
		gambleAmount.disabled = true;
		roundChoose.disabled = true;
		duration = setInterval(horseRun, 10);
		stopbeginButton.innerHTML = 'Restart';
		var betPony = document.getElementById('bethorse').disabled = true;
		
	}
	else{
		if(gambleAmount.value == ""){ // The area for insertion , where there is restriction of no empty value
			alert("Enter Bet Amount Please");//Betting Amount placement alert request
		}
		else if(gambleAmount.value > parseInt(moneyAmount)){// Conversion of numerical amount to int
			alert("Your maximum amount: £" + moneyAmount + ".");//Maximum amount information alert
		}
		else if(gambleAmount.value <= 0){ //The area of insertion which checks if the inserted amount exceeded the balance
			alert("You don't have enough balance to continue this game. Please reload the game.");//Alert of insufficient balance
		}
		if(roundChoose.value =="1W"){// Area of insertion of number of laps
			alert("Enter number of laps.");//Alert of adding the number of laps
		}
	}
}
//Right Side Movement

function horseRun() {
	var pony = document.getElementsByClassName('horse');
	for (var digit = 0; digit < pony.length; digit++) { // for looping for the horse movement
			pony[digit].className= 'horse standRight runRight'; //movements of horse
			offsetLeft = pony[digit].offsetLeft;	//
			var lotterynumber = Math.ceil(Math.random()*5);	//A random number for the speed of horses
			pony[digit].style.left = offsetLeft + lotterynumber + 'px'; 
			var broad= window.innerWidth;
	
		if(offsetLeft > 0.67*(broad) && offsetLeft > 0.78*(broad)){
				clearInterval(duration);	
				threeoclock=false;				
				duration = setInterval(horseRunTwelve, 20);//Limit of the width
			}
			if(circle==true && offsetLeft >= broad * 0.30 && offsetLeft <= broad * 0.42 ){
				clearInterval(duration);
				for(var digit=0; digit<pony.length;digit++){
					pony[digit].className='horse standRight';
					ganti=ganti+1;
				}

				if(ganti>=4){
					circle=false;
				}
				var beginButton = document.getElementById('start');
				beginButton.addEventListener('click', clickEvent);// The Start Button is disabled
				beginButton.disabled=false;// Disabled

	
			}
		}
	}

		
//Up movement

function horseRunTwelve(){
	var methodFindNumberPony = document.getElementsByTagName('select')[0];
	var numberOfpony = methodFindNumberPony.length;
	for(var a=numberOfpony; a >= 1; a--){//Starting of loop
		var horseRun = document.getElementById('horse'+a);
		horseRun.className = 'horse standUp runUp';
		offsetTop = horseRun.offsetTop;		//Horse movement selected
		offsetLeft = horseRun.offsetLeft;
		var lotterynumber = Math.ceil(Math.random()*5);
		horseRun.style.top = offsetTop - lotterynumber + 'px'; 
		var high= window.innerHeight;
		
		if(offsetTop < 0.01*(high) && offsetTop < 0.01*(high)){
				clearInterval(duration);//Movement at the end of the width
					
				duration = setInterval(horseRunNine, 10);
			}
		}

}
//Left Side Movement
function horseRunNine(){
	var methodFindNumberPony = document.getElementsByTagName('select')[0];
	var numberOfpony = methodFindNumberPony.length; //Horse length
	for(var a=numberOfpony; a >= 1; a--){	//Loop starting
		var horseRunNine = document.getElementById('horse'+a);//This helps in animation  horse running movement
		horseRunNine.className = 'horse standLeft runLeft';
		offsetLeft = horseRunNine.offsetLeft;
		var lotterynumber = Math.ceil(Math.random()*5);
		horseRunNine.style.left = offsetLeft - lotterynumber + 'px'; 
		var broad= window.innerWidth;
		if(offsetLeft < 0.05*(broad) && offsetLeft < 0.05*(broad)){//The Horse turns at a point
			clearInterval(duration);
			leftMovement= false;
			duration = setInterval(horseSix, 20);
		}
	}
}
//Downward Movement
function horseSix(){
circle =true;
	var methodFindNumberPony = document.getElementsByTagName('select')[0];
	var numberOfpony = methodFindNumberPony.length;
	for(var a=1; a <= numberOfpony; a++){ //Starting of the loop
		var horseSix = document.getElementById('horse'+a);
		horseSix.className = 'horse standDown runDown';//This helps to animate horse running movement	
		offsetTop = horseSix.offsetTop;
		var lotterynumber = Math.ceil(Math.random()*5);
		horseSix.style.top = offsetTop + lotterynumber + 'px'; 
		var high= window.innerHeight;		//Height of the window
		var broad = window.innerWidth;     //Width of the window
		var lapnumberPony = document.getElementById('numberOfLaps').value;// Lap number during the run
		var finalponyPosition = [];		//Position of horse after using the single array.
		var startbeginButton = document.getElementById('start');
		if(offsetTop > 0.8*(high) && offsetTop > 0.81*(high)){
			
			clearInterval(duration)
			duration = setInterval(horseRun,25);//At the end horse moves right

			if (circle == true && offsetLeft >= broad * 0.8 && offsetLeft >= broad * 0.8) {
				numberOfHorseInRace[i].className = 'horse standRight';
				
				finalponyPosition.push('horse'+(a+1));
				var showResult = document.getElementById('results');

				positionResult = document.getElementsByTagName('td'); //Assisgning the value is empty array
				positionResult[1].className = finalponyPosition[0];
				positionResult[3].className = finalponyPosition[1];
				positionResult[5].className = finalponyPosition[2];
				var ponyOne = finalponyPosition.includes('horse1');// Results of each horses
				if(ponyOne == false){
					positionResult[7].className = 'horse1';
				}
				var ponyTwo = finalponyPosition.includes('horse2');
				if(ponyTwo == false){
					positionResult[7].className = 'horse2';
				}
				var ponyThree = finalponyPosition.includes('horse3');
				if(ponyThree == false){
					positionResult[7].className = 'horse3';
				}
				var ponyFour = finalponyPosition.includes('horse4');
				if(ponyFour == false){
					positionResult[7].className = 'horse4';
				}
			
			}
		}
	}
}




	
		function clickEvent(){// Function call
	
			create(); // 
		}
	function myLoadFunction() {
	var beginButton = document.getElementById('start');
	beginButton.addEventListener('click', clickEvent);
	
}

document.addEventListener('DOMContentLoaded', myLoadFunction);





