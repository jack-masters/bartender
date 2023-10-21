const socket = io();

const toggleBtn = document.getElementById('toggleBtn1');

let buttonState = false;

toggleBtn.addEventListener('click', () => {
    buttonState = !buttonState;
    updateUI();
    socket.emit('buttonState1', buttonState);
});

const updateUI = () => {
    buttonState
        ? toggleBtn.classList.add('on')
        : toggleBtn.classList.remove('on');
    toggleBtn.innerText = buttonState ? 'Turn off' : 'Turn on';
};

socket.on('buttonState1', state => {
    console.log('updated state', state);
    buttonState = state;
    updateUI();
});

const input = document.getElementById('input');
const setBTN = document.getElementById('set');

let inputText = "";

setBTN.addEventListener('click', () => {
    inputText = input.value;
    updateUIText();
    socket.emit('inputText', inputText);
});

const updateUIText = () => {
    setBTN.innerHTML = 'Set Success';
    
    setTimeout(set, 1000)

    function set() {
        setBTN.innerHTML = 'Set';
    }
};

socket.on('inputText', state => {
    console.log('updated text', state);
    inputText = state;
    updateUIText();
});