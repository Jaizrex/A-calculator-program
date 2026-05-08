const display = document.getElementById("display");

function appendToDisplay(input){

    const operators = ['+', '-', '*', '/'];

    const lastChar = display.value.slice(-1);

    
    if(operators.includes(lastChar) && operators.includes(input)){
        return;
    }

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{

        
        const lastChar = display.value.slice(-1);

        if(['+', '-', '*', '/'].includes(lastChar)){
            return;
        }

        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {

    const key = event.key;

    
    if(!isNaN(key)){
        appendToDisplay(key);
    }

    
    else if(['+', '-', '*', '/', '.'].includes(key)){
        appendToDisplay(key);
    }

    
    else if(key === "Enter"){
        calculate();
    }

    
    else if(key === "Backspace"){
        display.value = display.value.slice(0, -1);
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});