let scoreHome = document.getElementById("home-count")

let scoreGuest = document.getElementById("guest-count")

let scoreH = 0

let scoreG = 0

function addOneHome() {
    scoreH += 1
    scoreHome.textContent = scoreH
}
    
function addTwoHome() {
    scoreH += 2
    scoreHome.textContent = scoreH
}

function addThreeHome() {
    scoreH += 3
    scoreHome.textContent = scoreH
}

function addOneGuest() {
    scoreG += 1
    scoreGuest.textContent = scoreG
}

function addTwoGuest() {
    scoreG += 2
    scoreGuest.textContent = scoreG
}

function addThreeGuest() {
    scoreG +=3
    scoreGuest.textContent = scoreG
}

function newGame() {
    scoreH = 0
    scoreHome.textContent = scoreH
    scoreG = 0
    scoreGuest.textContent = scoreG
}