const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const wwwyButton = document.querySelector('#wwwy');
const wutButton = document.querySelector('#wut');
const facepalmButton = document.querySelector('#fp');
const krabbypattyButton = document.querySelector('#kp');

const buttonsPressed = {
    wwwy: false,
    wut: false,
    fp: false,
    kp: false
};

const buttonWasPressed = (key) => {
    if(h2.innerText !== '') return;
    buttonsPressed[key] = true;
    let allButtonsPressed = true;
    for(let key of Object.keys(buttonsPressed)){
        if(buttonsPressed[key] === false) allButtonsPressed = false;
    };
    if(allButtonsPressed) h2.innerText = 'Thanks for coming to my TED Talk.';
};

[wwwyButton, wutButton, facepalmButton, krabbypattyButton].forEach(button => {
    button.addEventListener('click', () => {
        faceStore.dispatch({type: button.id});
        const state = faceStore.getState();
        h1.innerText = state.face;
        buttonWasPressed(button.id);
    });
});