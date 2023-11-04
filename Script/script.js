const headerElement = document.querySelector('.header');

// const d1Elements = document.querySelectorAll('.d1');

const p1d1Elements = document.querySelector('.p1d1');
const p1d2Elements = document.querySelector('.p1d2');
const p1d3Elements = document.querySelector('.p1d3');
const p1d4Elements = document.querySelector('.p1d4');
const p1d5Elements = document.querySelector('.p1d5');
const p1d6Elements = document.querySelector('.p1d6');
const p1d7Elements = document.querySelector('.p1d7');
const p1d8Elements = document.querySelector('.p1d8');
const p1d9Elements = document.querySelector('.p1d9');


// const d2Elements = document.querySelectorAll('.d2');

const p2d1Elements = document.querySelector('.p2d1');
const p2d2Elements = document.querySelector('.p2d2');
const p2d3Elements = document.querySelector('.p2d3');
const p2d4Elements = document.querySelector('.p2d4');
const p2d5Elements = document.querySelector('.p2d5');
const p2d6Elements = document.querySelector('.p2d6');
const p2d7Elements = document.querySelector('.p2d7');
const p2d8Elements = document.querySelector('.p2d8');
const p2d9Elements = document.querySelector('.p2d9');

let d1Rand;
let d2Rand;

function startGame() {
    d1Rand = Math.floor(Math.random() * 6) + 1;
    d2Rand = Math.floor(Math.random() * 6) + 1;

    if(d1Rand > d2Rand) {
        headerElement.innerHTML = "<i class='bx bxs-flag-alt bx-lg flag' style='color:#eb0303'></i> Player 1 Win!";
    }
    else if(d1Rand < d2Rand) {
        headerElement.innerHTML = "Player 2 Win! <i class='bx bxs-flag-alt bx-lg flag' style='color:#eb0303'></i>";
    }
    else {
        headerElement.innerHTML = "Draw!";
    }

 
    switch(d1Rand) {
        case 1: 
            p1d5Elements.style.visibility = 'visible';
            break;

        case 2:
            p1d1Elements.style.visibility = 'visible';
            p1d9Elements.style.visibility = 'visible';
            break;
        case 3:
            p1d1Elements.style.visibility = 'visible';
            p1d5Elements.style.visibility = 'visible';
            p1d9Elements.style.visibility = 'visible';
            break;
        case 4:
            p1d1Elements.style.visibility = 'visible';
            p1d3Elements.style.visibility = 'visible';
            p1d7Elements.style.visibility = 'visible';
            p1d9Elements.style.visibility = 'visible';
            break;
        case 5:
            p1d1Elements.style.visibility = 'visible';
            p1d3Elements.style.visibility = 'visible';
            p1d5Elements.style.visibility = 'visible';
            p1d7Elements.style.visibility = 'visible';
            p1d9Elements.style.visibility = 'visible';
            break;
        case 6:
            p1d1Elements.style.visibility = 'visible';
            p1d2Elements.style.visibility = 'visible';
            p1d3Elements.style.visibility = 'visible';
            p1d7Elements.style.visibility = 'visible';
            p1d8Elements.style.visibility = 'visible';
            p1d9Elements.style.visibility = 'visible';
            break;
        default:
            this.alert("Get to the Chopper!");
    }

    switch(d2Rand) {
        case 1: 
            p2d5Elements.style.visibility = 'visible';
            break;

        case 2:
            p2d1Elements.style.visibility = 'visible';
            p2d9Elements.style.visibility = 'visible';
            break;
        case 3:
            p2d1Elements.style.visibility = 'visible';
            p2d5Elements.style.visibility = 'visible';
            p2d9Elements.style.visibility = 'visible';
            break;
        case 4:
            p2d1Elements.style.visibility = 'visible';
            p2d3Elements.style.visibility = 'visible';
            p2d7Elements.style.visibility = 'visible';
            p2d9Elements.style.visibility = 'visible';
            break;
        case 5:
            p2d1Elements.style.visibility = 'visible';
            p2d3Elements.style.visibility = 'visible';
            p2d5Elements.style.visibility = 'visible';
            p2d7Elements.style.visibility = 'visible';
            p2d9Elements.style.visibility = 'visible';
            break;
        case 6:
            p2d1Elements.style.visibility = 'visible';
            p2d2Elements.style.visibility = 'visible';
            p2d3Elements.style.visibility = 'visible';
            p2d7Elements.style.visibility = 'visible';
            p2d8Elements.style.visibility = 'visible';
            p2d9Elements.style.visibility = 'visible';
            break;
        default:
            this.alert("Get to the Chopper!");
    }
}

window.addEventListener('load', startGame);