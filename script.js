function clickk(nn){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + nn;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}


function backn(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}

function calcf(){
    var resultcalc = String(document.getElementById('result').innerHTML);
    if(resultcalc){
        var converted = resultcalc.split('').map((symbol)=>{
            if(symbol === "÷") return symbol = "/";
            if(symbol === "x") return symbol = "*";
            return symbol
        }).join("");

        document.getElementById('result').innerHTML = eval(converted);
    }else{
        document.getElementById('result').innerHTML = "nothing..."
    }
}