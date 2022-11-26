function Tabuada(){
    let num = parseInt(document.getElementById("numero").value);
    let start = parseInt(document.getElementById("numInicial").value);
    let finish = parseInt(document.getElementById("numFinal").value);
    let result = [];
    let i;

    for(i = start; i <= finish; i++){
        result.push(num * i);
        console.log(result);       
    }

    let saida = document.getElementById("resultado");
    saida.innerHTML = result;
}

function PI(){
    let numFinal = parseInt(document.getElementById("numeroFinal").value);
    let result = [];

    for(let i = 1; i < numFinal; i++){
        result.push(i);
        if(i % 3 == 0){
            result.push("PI");
        }
    }

    let saida = document.getElementById("resultado");
    saida.innerHTML = result;
}

function Palindromo(){
    let numero = parseInt(document.getElementById("numero").value);
    numero = numero.toString();
    let numeroReverso = numero.split('').reverse().join(''); 
    let saida = document.getElementById("resultado");
    console.log(numero);
    console.log(numeroReverso);
    if(numero === numeroReverso){
        saida.innerHTML = 'É palindromo!!!!';
    } else {
        saida.innerHTML = 'Não é palindromo :<';
    }
}

function Reforma() {
    let larguraAzul = parseFloat(document.getElementById("larguraA").value);
    let alturaAzul = parseFloat(document.getElementById("alturaA").value);
    let larguraP = parseFloat(document.getElementById("larguraP").value);
    let alturaP = parseFloat(document.getElementById("alturaP").value);
    let quantAzulLargura;
    let quantAzulAltura;
    let total = document.getElementById("resultado");;

    larguraP = larguraP * 100;
    alturaP = alturaP * 100;

    quantAzulLargura = larguraP/larguraAzul;
    quantAzulAltura = alturaP/alturaAzul;

    total.innerHTML = quantAzulAltura * quantAzulLargura * 1.05;
    
}
