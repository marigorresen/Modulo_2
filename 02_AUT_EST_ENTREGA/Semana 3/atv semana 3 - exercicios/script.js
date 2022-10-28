function temperatura()
{
    var num = parseInt(document.getElementById("num").value);
    var resul = document.getElementById("conversao");
 
    if(document.getElementById("CtoF").checked==true)
        resul.innerHTML = 1.8*num + 32;
    if(document.getElementById("FtoC").checked==true)
        resul.innerHTML = (num-32)*5/9 ;
}


function consumo()
{
    var quant = parseInt(document.getElementById("quantidade").value);
    var valor_unit = parseInt(document.getElementById("unitario").value);
    var resultado = document.getElementById("calcular");
    var x;

    if(quant < 100){
        resultado.innerHTML = quant * valor_unit;
    }
    else if(quant > 100 && quant < 200){
        x = quant + (quant*0.25);
        resultado.innerHTML = x * valor_unit; 
    }
    else if(quant > 200){
        x = quant + (quant*0.50);
        resultado.innerHTML = x * valor_unit;
    }
}

function parabola()
{
    var a = parseInt(document.getElementById("valor_a").value);
    var b = parseInt(document.getElementById("valor_b").value);
    var c = parseInt(document.getElementById("valor_c").value);
    var xV = document.getElementById("calcular_X");
    var yV = document.getElementById("calcular_Y");
    var delta;

    delta = b*b - 4*a*c;
    xV.innerHTML = -b / (2 * a);
    yV.innerHTML = -delta / (4*a);
}

function alturaMax()
{
    var v0 = parseInt(document.getElementById("veloc_inicial").value);
    var gravidade = 10;
    var hMax = document.getElementById("calcular_hMax");
    var tempo = document.getElementById("calcular_tempo");

    tempo.innerHTML = v0 / gravidade;
    hMax.innerHTML = v0 * v0 / (2 * gravidade);
}