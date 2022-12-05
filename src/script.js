let level = [];
let userInput = [];
let count = 0;
const red = document.getElementById("r-audio");
const blue = document.getElementById("b-audio");
const green = document.getElementById("g-audio");
const yellow = document.getElementById("y-audio");

var allAudios = document.querySelectorAll('audio');

function stopAllAudio(){
	allAudios.forEach(function(audio){
		audio.pause();
        audio.currentTime = 0;
	});
}

function nextLevel() {
    level.push(Math.floor(Math.random() * 4) + 1);
    displaySequence();
}

function displaySequence() {
    for (let num = 0; num < level.length; num++) {
        setTimeout(function() {
            switch(level[num]) {
                case 1:
                    document.getElementById("r").classList.add("r-active");
                    stopAllAudio();
                    red.play();
                    setTimeout(() => {
                        document.getElementById("r").classList.remove("r-active");
                    }, 500);
                    break;
                case 2:
                    document.getElementById("b").classList.add("b-active");
                    stopAllAudio();
                    blue.play();
                    setTimeout(() => {
                        document.getElementById("b").classList.remove("b-active");
                    }, 500);
                    break;
                case 3:
                    document.getElementById("g").classList.add("g-active");
                    stopAllAudio();
                    green.play();
                    setTimeout(() => {
                        document.getElementById("g").classList.remove("g-active");
                    }, 500);
                    break;
                case 4:
                    document.getElementById("y").classList.add("y-active");
                    stopAllAudio();
                    yellow.play();
                    setTimeout(() => {
                        document.getElementById("y").classList.remove("y-active");
                    }, 500);
                    break;
                default:
                    console.log("Error");
                    break;
            }
        }, 600 * num);
    }
}

document.getElementById('start').addEventListener('click', function() {
    // Start the game
    nextLevel();
});
document.getElementById('r').addEventListener('click', function() {
    // Red
    stopAllAudio();
    red.play();
    if (level[count] === 1) {
        count++;
        if (count === level.length) {
            count = 0;
            userInput = [];
            console.clear();
            setTimeout(() => {
                nextLevel();
            }, 700);
        }
    } else if (count !== level.length) {
        console.log("Game Over! You entered 1 when it was " + level[count]);
    }
});
document.getElementById('b').addEventListener('click', function() {
    // Blue
    stopAllAudio();
    blue.play();
    if (level[count] === 2) {
        count++;
        if (count === level.length) {
            count = 0;
            userInput = [];
            console.clear();
            setTimeout(() => {
                nextLevel();
            }, 700);
        }
    } else if (count !== level.length) {
        console.log("Game Over! You entered 2 when it was " + level[count]);
    }
});
document.getElementById('g').addEventListener('click', function() {
    // Green
    stopAllAudio();
    green.play();
    if (level[count] === 3) {
        count++;
        if (count === level.length) {
            count = 0;
            userInput = [];
            console.clear();
            setTimeout(() => {
                nextLevel();
            }, 700);
        }
    } else if (count !== level.length) {
        console.log("Game Over! You entered 3 when it was " + level[count]);
    }
});
document.getElementById('y').addEventListener('click', function() {
    // Yellow
    stopAllAudio();
    yellow.play();
    if (level[count] === 4) {
        count++;
        if (count === level.length) {
            count = 0;
            userInput = [];
            console.clear();
            setTimeout(() => {
                nextLevel();
            }, 700);
        }
    } else if (count !== level.length) {
        console.log("Game Over! You entered 4 when it was " + level[count]);
    }
});
