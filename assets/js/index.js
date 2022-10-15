
let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');
let homeScore = 0;
let guestScore = 0;
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;
function plusOne(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function plusTwo(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;

}

function plusThree(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function plus1(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function plus2(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function plus3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

let rounds = document.getElementById('round-map');

function reset(){
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}