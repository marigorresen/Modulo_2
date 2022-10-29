function temperatura()
{
    let num = parseInt(document.getElementById("num").value);
    let resul = document.getElementById("conversao");
 
    if(document.getElementById("CtoF").checked==true)
        resul.innerHTML = 1.8*num + 32;
    if(document.getElementById("FtoC").checked==true)
        resul.innerHTML = (num-32)*5/9 ;
}


function consumo()
{
    let quant = parseInt(document.getElementById("quantidade").value);
    let valor_unit = parseInt(document.getElementById("unitario").value);
    let resultado = document.getElementById("calcular");
    let x;

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
    let a = parseInt(document.getElementById("valor_a").value);
    let b = parseInt(document.getElementById("valor_b").value);
    let c = parseInt(document.getElementById("valor_c").value);
    let xV = document.getElementById("calcular_X");
    let yV = document.getElementById("calcular_Y");
    let delta;

    delta = b*b - 4*a*c;
    xV.innerHTML = -b / (2 * a);
    yV.innerHTML = -delta / (4*a);
}

function alturaMax()
{
    let v0 = parseInt(document.getElementById("veloc_inicial").value);
    let gravidade = 10;
    let hMax = document.getElementById("calcular_hMax");
    let tempo = document.getElementById("calcular_tempo");

    tempo.innerHTML = v0 / gravidade;
    hMax.innerHTML = v0 * v0 / (2 * gravidade);
}