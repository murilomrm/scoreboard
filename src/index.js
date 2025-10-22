const digit1 = document.getElementById("digit1")
digit1.innerText = 0

const add1Home = document.getElementById("home-plus1")
const add2Home = document.getElementById("home-plus2")
const add3Home = document.getElementById("home-plus3")

add1Home.addEventListener('click', funcAdd1Home)
add2Home.addEventListener('click', funcAdd2Home)
add3Home.addEventListener('click', funcAdd3Home)

function funcAdd1Home() { digit1.innerText = Number(digit1.innerText) + 1 }
function funcAdd2Home() { digit1.innerText = Number(digit1.innerText) + 2 }
function funcAdd3Home() { digit1.innerText = Number(digit1.innerText) + 3 }

const digit2 = document.getElementById("digit2")
digit2.innerText = 0

const add1Guest = document.getElementById("guest-plus1")
const add2Guest = document.getElementById("guest-plus2")
const add3Guest = document.getElementById("guest-plus3")

add1Guest.addEventListener('click', funcAdd1Guest)
add2Guest.addEventListener('click', funcAdd2Guest)
add3Guest.addEventListener('click', funcAdd3Guest)

function funcAdd1Guest() { digit2.innerText = Number(digit2.innerText) + 1 }
function funcAdd2Guest() { digit2.innerText = Number(digit2.innerText) + 2 }
function funcAdd3Guest() { digit2.innerText = Number(digit2.innerText) + 3 }