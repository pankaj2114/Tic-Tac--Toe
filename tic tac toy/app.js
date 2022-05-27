console.log("lello")
let clickmusic = new Audio("click.mp3")
let congratesmusic = new Audio("congrates.mp3")
let turn = "X"
let isgameover = false
let resets = document.getElementById('reset')

//function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check winner
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [2, 4, 6],
        [0, 4, 8],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            congratesmusic.play()
        }

    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            clickmusic.play()
            checkwin()
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn
            }
        }
    })
})

//Reset on click event

resets.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn


})