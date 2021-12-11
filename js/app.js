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






















// function getPin() {
//     const pin = Math.round(Math.random() * 10000);
//     const pinString = pin + '';
//     if (pinString.length == 4) {
//         return pin;
//     }
//     else {
//         // console.log('got 3 digit and calling again', pin);
//         return getPin();
//     }
// }
// function generatePin() {
//     const pin = getPin();
//     document.getElementById('display-pin').value = pin;
// }

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const number = event.target.innerText;
//     const calcInput = document.getElementById('typed-numbers')
//     if (isNaN(number)) {
//         if (number == 'C') {
//             calcInput.value = '';
//         }
//     }
//     else {
        
//         const previousNumber = calcInput.value;
//         const newNumber = previousNumber + number;
//         calcInput.value = newNumber;
//     }
// });

// function removeLastNum() {
//     let input = document.getElementById('typed-numbers')
//     if (input === '') return;
//     let newInput = input.slice(0,input.length-1);
//     input = newInput;
//     displayInput = Number(input).toString();
//     input.textContent = displayInput;
//   }

//   document.getElementById('ltBtn').addEventListener('click', () => removeLastNum());

// function verifyPin() {
//     const pin = document.getElementById('display-pin').value;
//     const typedNumbers = document.getElementById('typed-numbers').value;
//     const successMessage = document.getElementById('notify-success');
//     const failError = document.getElementById('notify-fail');
//     if (pin == typedNumbers) {
//         successMessage.style.display = 'block';
//         failError.style.display = 'none';
//     }
//     else {
//         successMessage.style.display = 'none';
//         failError.style.display = 'block';
//     }
// }