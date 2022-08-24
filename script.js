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
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = "nothing..."
    }
}