

// lógica: obter os pontuadores de home e guest e inicializar como 0-

// obter os pontuadores para somar um, dois e três de cada lado

// somar ao resultado e atualizar o placar

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





// //  <div class="container">
//         <div class="team">
//             <h3 class="team-name">HOME</h3>
//             <div class="score-display">
//                 <span class="digit">0</span>
//             </div>
//             <div class="buttons">
//                 <button id="home-plus1" class="score-btn">+1</button>
//                 <button id="home-plus2" class="score-btn">+2</button>
//                 <button id="home-plus3" class="score-btn">+3</button>
//             </div>
//         </div>

//         <div class="team">
//             <h3 class="team-name">GUEST</h3>
//             <div class="score-display">
//                 <span class="digit">0</span>
//             </div>
//             <div class="buttons">
//                 <button id="guest-plus1" class="score-btn">+1</button>
//                 <button id="guest-plus2" class="score-btn">+2</button>
//                 <button id="guest-plus3" class="score-btn">+3</button>
//             </div>
//         </div>
//     </div>