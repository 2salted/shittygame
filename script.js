const itemArray = ["Rock", "Paper", "Scissors"];
var foundItem = itemArray[(Math.floor(Math.random() * itemArray.length))]
var player1Pick = document.getElementById("yourPick");
var player2Pick = document.getElementById("robotPick");
var winLose = document.getElementById("winOrLose");
let playerPointCount = 0;
let robotPointeCount = 0;

updateScore();

function checkWinCondition() {
    if (playerPointCount >= 3) {
        winLose.innerHTML = "You Win!"
    } else if (robotPointeCount >= 3) {
        winLose.innerHTML = "AI wins!"
    }
}

function updateScore() {
    document.getElementById("counter1").innerHTML = "You have" + " " + playerPointCount + " points";
    document.getElementById("counter2").innerHTML = "AI has" + " " + robotPointeCount + " points";
}

function rock() {
    player1Pick.innerHTML = "Rock";
    if (foundItem == "Rock") {
        player2Pick.innerHTML = "Rock";
    } else if (foundItem == "Paper") {
        robotPointeCount++;
        player2Pick.innerHTML = "Paper";
    } else {
        playerPointCount++;
        player2Pick.innerHTML = "Scissors";
    }
    foundItem = itemArray[Math.floor(Math.random() * itemArray.length)];

    updateScore();
    checkWinCondition();
}

function paper() {
    player1Pick.innerHTML = "Paper";
    if (foundItem == "Paper") {
        player2Pick.innerHTML = "Paper";
    } else if (foundItem == "Rock") {
        playerPointCount++;
        player2Pick.innerHTML = "Rock";
    } else {
        robotPointeCount++;
        player2Pick.innerHTML = "Scissors";
    }
    foundItem = itemArray[Math.floor(Math.random() * itemArray.length)];

    updateScore();
    checkWinCondition();
}

function scissors() {
    player1Pick.innerHTML = "Scissors";
    if (foundItem == "Scissors") {
        player2Pick.innerHTML = "Scissors";
    } else if (foundItem == "Rock") {
        robotPointeCount++;
        player2Pick.innerHTML = "Rock";
    } else {
        playerPointCount++;
        player2Pick.innerHTML = "Paper"
    }
    foundItem = itemArray[Math.floor(Math.random() * itemArray.length)];

    updateScore();
    checkWinCondition();
}