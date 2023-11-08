const resultDisplay = document.getElementById('result');
let isResultDisplayed = false;

function clickk(nn){
    const actualCalc = resultDisplay.innerHTML;
    if(Number(nn) && isResultDisplayed){
        document.getElementById('result').innerHTML = nn;
    }else{
        resultDisplay.innerHTML = actualCalc + nn;
    }

    isResultDisplayed = false;
}

function clean(){
    resultDisplay.innerHTML = "";
}


function backn(){
    const result = resultDisplay.innerHTML;
    result = result.substring(0, result.length - 1);
}

function calcf(){
    const resultcalc = String(resultDisplay.innerHTML);
    if(resultcalc){
        const converted = resultcalc.split('').map((symbol)=>{
            if(symbol === "÷") return symbol = "/";
            if(symbol === "x") return symbol = "*";
            return symbol
        }).join("");

        let result = String(eval(converted))

        const [int, decimal] = result.split(".");

        if(String(eval(converted)).length > 10){
            result = `${int}.${decimal.slice(0, 4)}`
        }

        resultDisplay.innerHTML = result;
        isResultDisplayed = true;
    }else{
        resultDisplay.innerHTML = "nothing..."
    }
}