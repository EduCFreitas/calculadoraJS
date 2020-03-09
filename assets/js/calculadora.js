var result = document.getElementById("result");
var n1=0, n2=0;
var operacao="";

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = "0";
    n1 = 0;
    n2 = 0;
}

function onEqualsClicked(){
    n2=parseInt(result.innerHTML)
    if(operacao=="/"){
        if(n2==0){
            alert("ERRO! Impossível dividir por 0! \nReiniciar a calculadora!");
        }
        else{
            result.innerHTML = n1/n2;
        }
    }
    if(operacao=="+"){
        result.innerHTML = n1+n2;
    }
    if(operacao=="-"){
        result.innerHTML = n1-n2;
    }
    if(operacao=="*"){
        result.innerHTML = n1*n2;
    }
}

function onDivideClicked(){
    n1 = parseInt(result.innerHTML);
    operacao = "/";
    result.innerHTML = "0";
}

function onAddClicked(){
    n1 = parseInt(result.innerHTML);
    operacao = "+";
    result.innerHTML = "0";
}

function onSubtractClicked(){
    n1 = parseInt(result.innerHTML);
    operacao = "-";
    result.innerHTML = "0";
}

function onMultiplyCliked(){
    n1 = parseInt(result.innerHTML);
    operacao = "*";
    result.innerHTML = "0";
}


