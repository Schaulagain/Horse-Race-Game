var interval ;
var speed = 1;

function styleHorse() {
	runHorse();
	var horses = document.getElementsByClassName( 'horse' );
	for ( var i = 0; i < horses.length; i++ ) {/*adding loop*/
		var placeTop = horses[i].offsetTop;
		var placeLeft = horses[i].offsetLeft;
		
		

	if ( placeLeft >= window.innerWidth * 0.05 - 50 - ( i * window.innerWidth * 0.02 ) && placeLeft <=  window.innerWidth - 350 + ( i * window.innerWidth * 0.02 )){
	horses[i].style.left = placeLeft + ( Math.random() *  5) + 'px';/*moving the horses to left direction*/
	horses[i].className = 'horse runRight';
	}

	else if (  placeLeft >=  window.innerWidth - 350 + ( i * window.innerWidth * 0.02 ) && placeTop >=  window.innerHeight - 670 + ( i * window.innerWidth * 0.02 ) ) {	
		horses[i].style.top = placeTop - ( Math.random() * 5 ) + 'px';/*moving the horses to upward direction*/
		horses[i].className = 'horse runUp';
	}
	else if ( placeLeft >=  window.innerWidth * 0.05 - 50) {	
		 
		horses[ i ].style.left = placeLeft - ( Math.random() * 5 ) + 'px';/*moving the horses to left direction*/
		horses[ i ].className = 'horse runLeft';
	}

}	


	}
function runHorse(){
		 clearInterval(interval);
		interval = setInterval( styleHorse,speed);
		var horses = document.getElementsByClassName( 'horse' );
		//stopButton();/*calling disableStartButton method*/
	
}


function startButton() {
	var startRace = document.getElementById( 'start' );
	startRace.addEventListener( 'click', styleHorse);
}

function myLoadFunction() {
	startButton();
}

document.addEventListener( 'DOMContentLoaded', myLoadFunction );