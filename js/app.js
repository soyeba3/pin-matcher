const displayPin = document.getElementById('display-pin');
const displayUser = document.getElementById('user-display');
const match = document.getElementById('match');
const notMatch = document.getElementById('not-match');
// let submittedPin = displayUser.value;
// let submittedPin = 0;
// let pin = 0;
// let attempt = 3;
let warningLeft = 3;

function getPin(){
    let pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const generateNumber = getPin();
    displayPin.value = generateNumber;
   
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            displayUser.value = '';
        }
            if (number=='<') {
                let stringValue = displayUser.value.toString();

                if(stringValue.length <=1 ){
                    displayUser.value = '';
                }
                else{
                    displayUser.value = parseInt(stringValue.slice(0, -1));
                }
        }
    
    }
    else{
        const previousNumber = displayUser.value;
        const newNumber = previousNumber+number;
        displayUser.value =newNumber;
    }
})

function verifyPin(){

    if (displayPin.value == '' || displayUser.value == '') {
        match.style.display = 'none';
        notMatch.style.display = 'none'
    }
    
    
    else if (displayPin.value == displayUser.value) {
        match.style.display = 'block';
        notMatch.style.display = 'none'
        displayPin.value = '';
        displayUser.value = '';
        timeRestore();
        
    }
    else{
        notMatch.style.display = 'block';
        match.style.display = 'none';
        displayUser.value = '';
        timeLeft();

    }
}



function timeRestore(){
    let warningLeft = 3;
    let warning = document.getElementById('warning');
    warning.innerText = warningLeft + ' try left';
}

function timeLeft(){
    warningLeft--;
    
    let warning = document.getElementById('warning');
    warning.innerText = warningLeft + ' try left';
}