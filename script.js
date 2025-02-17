console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3.mp3");
let audioturn = new Audio("ting.mp3.mp3");
let gameover = new Audio("gameover.mp3.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 10, 0],
        [3, 4, 5, 0, 30, 0],
        [6, 7, 8, 0, 50, 0],
        [0, 3, 6, -20, 30, 90],
        [1, 4, 7, 0, 30, 90],
        [2, 5, 8, 20, 30, 90],
        [0, 4, 8, 0, 30, 45],
        [2, 4, 6, 0, 30, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px";
            setTimeout(() => {
                document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
            }, 1000); // Hide the image after 5 seconds
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.line').style.width = "0";
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
});

