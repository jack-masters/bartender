const socket = io();

const drink1 = document.getElementById('drink1');

let buttonState1 = "";

drink1.addEventListener('click', () => {
    buttonState1 = "pressed";
    updateUI1();
    socket.emit('drink1', buttonState1);
});

const updateUI1 = () => {
    drink1.innerHTML = 'Making Drink!';
    drink1.classList.add('on')
    
    setTimeout(set, 1000)
    
    function set() {
        drink1.innerHTML = 'Make Drink One';
        drink1.classList.remove('on');
    }
};

socket.on('drink1', state => {
    console.log('updated state', state);
    buttonState1 = state;
    updateUI1();
});

//////////////////////////////DRINK2////////////////////////////////

const drink2 = document.getElementById('drink2');

let buttonState2 = "";

drink2.addEventListener('click', () => {
    buttonState2 = "pressed";
    updateUI2();
    socket.emit('drink2', buttonState2);
});

const updateUI2 = () => {
    drink2.innerHTML = 'Making Drink!';
    drink2.classList.add('on')
    
    setTimeout(set, 1000)
    
    function set() {
        drink2.innerHTML = 'Make Drink Two';
        drink2.classList.remove('on');
    }
};

socket.on('drink2', state => {
    console.log('updated state', state);
    buttonState2 = state;
    updateUI2();
});