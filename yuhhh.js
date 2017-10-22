var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//window height and length

var moveCounter = 0;
var winChecker;
var win = false;	

var picOne = document.getElementById("tileOnePic");
var picTwo = document.getElementById("tileTwoPic");
var picThree = document.getElementById("tileThreePic");
var picFour = document.getElementById("tileFourPic");
var picFive = document.getElementById("tileFivePic");
var picSix = document.getElementById("tileSixPic");
var picSeven = document.getElementById("tileSevenPic");
var picEight = document.getElementById("tileEightPic");
var picNine = document.getElementById("tileNinePic");
var picTen = document.getElementById("tileTenPic");
var picEleven = document.getElementById("tileElevenPic");
var picTwelve = document.getElementById("tileTwelvePic");
var picThirteen = document.getElementById("tileThirteenPic");
var picFourteen = document.getElementById("tileFourteenPic");
var picFifteen = document.getElementById("tileFifteenPic");
var backgroundSound = document.getElementById("backgroundMusic");
var bingBing = document.getElementById("bingbing");
var goodJob = document.getElementById("trumpGoodJob");
var applause = document.getElementById("clapping");
var counterDisplay = document.getElementById("moveCounter");
//these allow me to put pictures and sound into my program,
//as well as declare a few variables that i use later

var randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 , 15, 14];
function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
	  
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//randomNumbers = shuffle(randomNumbers); 
//this function randomizes an array, allowing me to randomize
//where the tiles are placed on the grid

counterDisplay.innerHTML = "Moves: " + moveCounter;

backgroundSound.play();
//this begins playing the background music

 var squares = [];
 const squareLength = 128;
 var numberOfSquares = 16;
for (i=0; i < 16; i++){
	 
	 var makingSpaces = {
		 x:27+ ((i%4)*130),
		 y:152+ (Math.floor(i/4)*130),
		 empty: false,
		 tile: i
	 };
	  squares.push(makingSpaces);
	  squares[i].tile = randomNumbers[i];
	  if (squares[i].tile == 15){
		  squares[i].empty = true;
	  }
	  }
//this creates my squares
 
function incrementCounter(){
	 moveCounter++;
	 counterDisplay.innerHTML = "Moves: " + moveCounter;
 }
 //this function makes the counter go up after a tile shifts
 
 function move(a,b){
	 if (squares[b].empty == true){
	[squares[a].tile, squares[b].tile] = [squares[b].tile, squares[a].tile];
	squares[a].empty = true;
	squares[b].empty = false;
	incrementCounter();
	console.log(moveCounter);
	bingbing.play();
}
}
//this is the function that moves the tiles around

 var mouse_pos_x;
 var mouse_pos_y;
 canvas.addEventListener('mousedown', mouse_down);
 //this Event Listener checks whenever you click down
 
 backgroundSound.addEventListener('ended',restartMusic);
 //this Event Listener checks when the background music ends,
 //and calls a function to restart the music
 
 function restartMusic(){
	 backgroundSound.currentTime = 0;
	 backgroundSound.play();
 }
 //this function restarts the music
 
function mouse_down(event){
	 mouse_pos_x = event.clientX;
	 mouse_pos_y = event.clientY;
	 
	 for (i = 0; i < 16; i++){
		if ((mouse_pos_x > squares[i].x) && ((squares[i].x + squareLength) > mouse_pos_x) && (mouse_pos_y > squares[i].y) && ((squares[i].y + squareLength) > mouse_pos_y) && (win == false)) {
			
			if (((i%4)== 1)||((i%4) == 2)){
				if ((Math.floor(i/4) == 1) || (Math.floor(i/4) == 2)){
					move(i,i-1);
					move(i,i+1);
					move(i,i-4);	
					move(i,i+4);
				}
			}			
			
			if ((i%4)== 0){
				if ((Math.floor(i/4) == 1) || (Math.floor(i/4) == 2)){
					move(i,i+4);
					move(i,i+1);
					move(i,i-4);	
				}
			}
			
			if ((i%4)== 3){
				if ((Math.floor(i/4) == 1) || (Math.floor(i/4) == 2)){
					move(i,i-4);
					move(i,i+4);
					move(i,i-1);
				}
			}
					
			if (((i%4)== 1)||((i%4) == 2)){
				if (Math.floor(i/4) == 0){			
					move(i,i+4);
					move(i,i-1);
					move(i,i+1);				
				}
			}
	 
			if (((i%4)== 1)||((i%4) == 2)){
				if (Math.floor(i/4) == 3){
					move(i,i-4);
					move(i,i-1);
					move(i,i+1);
					
				}
			}
			
			if ((i%4)== 0){
				if (Math.floor(i/4) == 0){
					move(i,i+4);
					move(i,i+1);
				}
			}
			
			if ((i%4)==0){ 	
				if (Math.floor(i/4) == 3){
					move(i,i-4);
					move(i,i+1);
				}
			}
			
			if ((i%4)== 3){
				if (Math.floor(i/4) == 0){
					move(i,i+4);
					move(i,i-1);
				}
			}
			
			if ((i%4)== 3){
				if (Math.floor(i/4) == 3){
					move(i,i-4);
					move(i,i-1);
				}
			}	
		}
	}
}
//this checks which tile you click on, shifting it

function draw(){
ctx.fillStyle=("rgb(244,234,190)");
ctx.fillRect(0,0,canvas.height,canvas.width);
ctx.fillStyle=("rgb(48,129,238)");
ctx.fillStyle=("rgb(255,255,255)");
ctx.fillRect(25,150,522,522);
ctx.fillStyle=("rgb(0,0,0)");
ctx.fillRect(25,150,2,522);
ctx.fillRect(25,150,522,2);
ctx.fillRect(155,150,2,522);
ctx.fillRect(285,150,2,522);
ctx.fillRect(415,150,2,522);
ctx.fillRect(545,150,2,522);
ctx.fillRect(25,280,522,2);
ctx.fillRect(25,410,522,2);
ctx.fillRect(25,540,522,2);
ctx.fillRect(25,670,522,2);
for(i=0;i<16;i++){
if(squares[i].tile == 0){
ctx.drawImage(picOne,squares[i].x,squares[i].y, 128, 128);
} else if(squares[i].tile == 1){
ctx.drawImage(picTwo,squares[i].x,squares[i].y,128,128);
} else if(squares[i].tile == 2){
ctx.drawImage(picThree,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 3){
ctx.drawImage(picFour,squares[i].x, squares[i].y, 128, 128);	
} else if(squares[i].tile == 4){
ctx.drawImage(picFive,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 5){
ctx.drawImage(picSix,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 6){
ctx.drawImage(picSeven,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 7){
ctx.drawImage(picEight,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 8){
ctx.drawImage(picNine,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 9){
ctx.drawImage(picTen,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 10){
ctx.drawImage(picEleven,squares[i].x,squares[i].y, 128, 128);
} else if(squares[i].tile == 11){
ctx.drawImage(picTwelve,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 12){
ctx.drawImage(picThirteen,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 13){
ctx.drawImage(picFourteen,squares[i].x,squares[i].y, 128, 128);	
} else if(squares[i].tile == 14){
ctx.drawImage(picFifteen,squares[i].x,squares[i].y, 128, 128);	
}
}
winChecker = 0;

for(i=0;i<16;i++){
	if (i == squares[i].tile){
		winChecker++;
	}
	if (winChecker == 16){
		win = true;
		goodJob.play();
		applause.play();
		backgroundMusic.pause();
		counterDisplay.innerHTML = "You Win!";
	}
}	
window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);	
//this function draws up the grid, as well as the tiles on it