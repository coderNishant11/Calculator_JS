function updateDisplay(x) {
    
    document.querySelector('#display').value += x;

    
}


function evalDisplay() {
    
    document.querySelector('#display').value=eval(document.querySelector('#display').value)
}



function removeLastDigit() {
    let popLastDigit =document.querySelector('#display')
    popLastDigit.value = popLastDigit.value.substr(0, popLastDigit.value.length - 1)
    
}