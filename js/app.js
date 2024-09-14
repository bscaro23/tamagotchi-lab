// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.



/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer;

let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatElm = document.querySelector('#boredom-stat');
const hungerStatElm = document.querySelector('#hunger-stat');
const sleepinessStatElm = document.querySelector('#sleepiness-stat');

const playBtnElm = document.querySelector('#play');
const feedBtnElm = document.querySelector('#feed');
const sleepBtnElm = document.querySelector('#sleep');

const gameMessageElm = document.querySelector('#message');

const resetBtnElm = document.querySelector('#restart');


/*-------------------------------- Functions --------------------------------*/
const checkGameOver = ()=>{
    if (Math.max(state.boredom, state.hunger, state.sleepiness) > 10) gameOver = true;
}

const getRandomInt = (max) =>{
    return Math.floor(Math.random() * max);
}

const init = () =>{
    resetBtnElm.classList.add('hidden');
    gameMessageElm.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 2000);
    render();
}

const render = () =>{
    boredomStatElm.textContent = state.boredom;
    hungerStatElm.textContent = state.hunger;
    sleepinessStatElm.textContent = state.sleepiness;
    if (gameOver){
        clearInterval(timer);
        resetBtnElm.classList.remove('hidden');
        gameMessageElm.classList.remove('hidden');
    }
}

const runGame = () =>{
    updateStates();
    checkGameOver();
    render();
}

const updateStates = () =>{
    state.boredom += getRandomInt(3);
    state.hunger += getRandomInt(3);
    state.sleepiness += getRandomInt(3);
}

const playBtnClick = () =>{
    state.boredom = 0;
    render();
}

const feedBtnClick = () =>{
    state.hunger = 0;
    render();
}

const sleepBtnClick = () =>{
    state.sleepiness = 0;
    render();
}

init();

/*----------------------------- Event Listeners -----------------------------*/

playBtnElm.addEventListener('click', playBtnClick);
feedBtnElm.addEventListener('click', feedBtnClick);
sleepBtnElm.addEventListener('click', sleepBtnClick);
resetBtnElm.addEventListener('click', init);