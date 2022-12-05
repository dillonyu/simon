let level = [];
let count = 0;
const red = document.getElementById("r-audio");
const blue = document.getElementById("b-audio");
const green = document.getElementById("g-audio");
const yellow = document.getElementById("y-audio");

let audios = document.querySelectorAll('audio');

const gameOver = document.getElementById("game-over");
const restart = document.getElementById("restart");

function stopAllAudio(){
	audios.forEach(function(audio) {
		audio.pause();
        audio.currentTime = 0;
	});
}

function disableButtons() {
    document.getElementById("r").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("y").disabled = true;
}

function enableButtons() {
    document.getElementById("r").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("g").disabled = false;
    document.getElementById("y").disabled = false;
}

function nextLevel() {
    disableButtons();
    level.push(Math.floor(Math.random() * 4) + 1);
    displaySequence();
    setTimeout(() => {
        enableButtons();
    }, 600 * level.length);
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

function toggleElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function handleGameOver() {
    disableButtons();
    toggleElement(gameOver);
    toggleElement(restart);
    score.style.marginBottom = "0";
}

const startButton = document.getElementById("start");
const score = document.getElementById("score");
startButton.addEventListener('click', function() {
    // Start the game
    toggleElement(startButton);
    toggleElement(score);
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
            console.clear();
            document.getElementById("score-text").textContent = "Score: " + level.length;
						disableButtons();
            setTimeout(() => {
                nextLevel();
            }, 1000);
        }
    } else if (count !== level.length) {
        handleGameOver();
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
            console.clear();
						disableButtons();
            document.getElementById("score-text").textContent = "Score: " + level.length;
            setTimeout(() => {
                nextLevel();
            }, 1000);
        }
    } else if (count !== level.length) {
        handleGameOver();
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
            console.clear();
						disableButtons();
            document.getElementById("score-text").textContent = "Score: " + level.length;
            setTimeout(() => {
                nextLevel();
            }, 1000);
        }
    } else if (count !== level.length) {
        handleGameOver();
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
            console.clear();
						disableButtons();
            document.getElementById("score-text").textContent = "Score: " + level.length;
            setTimeout(() => {
                nextLevel();
            }, 1000);
        }
    } else if (count !== level.length) {
        handleGameOver();
    }
});
restart.addEventListener('click', function() {
    // Restart the game
    toggleElement(gameOver);
    level = [];
    document.getElementById("score-text").textContent = "Score: 0";
    count = 0;
    toggleElement(restart);
    nextLevel();
});

disableButtons();
