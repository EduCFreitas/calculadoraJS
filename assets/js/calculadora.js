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
    n2=parseInt(result.innerHTML);
    var rad = n2*Math.PI/180;
    var fatorial = 0;
    var incr = 0;
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
    if(operacao=="sen"){
        result.innerHTML = Math.sin(rad);
    }
    if(operacao=="cos"){
        result.innerHTML = Math.cos(rad);
    }
    if(operacao=="tan"){
        result.innerHTML = Math.tan(rad);
    }
    if(operacao=="!"){
        fatorial = n2;
        for(var i=1; i<n2; i++){
            fatorial+=(fatorial*i)
            console.log(fatorial)
        }
        result.innerHTML = fatorial;
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

function seno(){
    operacao = "sen";
    onEqualsClicked()
}

function cosseno(){
    operacao = "cos";
    onEqualsClicked()
}

function tangente(){
    operacao = "tan";
    onEqualsClicked()
}

function fatorial(){
    operacao = "!";
    onEqualsClicked()
}


