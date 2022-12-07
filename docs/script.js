function verificar(){
    let verificado = document.getElementById("verificado");
    let saida = '';

    if(document.getElementById("VP").checked == true && document.getElementById("VF").checked == false){
       saida += '<h2>Insira os valores para o cálculo do Valor Presente</h2>'
       saida += '<p>Valor futuro:<input id="Fut" type="number"></p><br><p>Taxa mensal(%):<input id="taxa" type="number" placeholder="2"></p><br><p>Periodo(meses):<input id="meses" type="number"></p><br><br/><button onclick="VP()">Calcular</button><br/>'
       document.getElementById("VP").checked = false;
    }else{
       saida += '<h2>Insira os valores para o cálculo do Valor Futuro</h2>'
       saida += '<p>Valor presente:<input id="Pres" type="number"></p><br><p>Taxa mensal(%):<input id="taxa" type="number" placeholder="2"></p><br><p>Periodo(meses):<input id="meses" type="number"></p><br/><br/><button onclick="VF()">Calcular</button><br/>'
       document.getElementById("VF").checked = false;
    }
    verificado.innerHTML = saida;
}

function VP()
{
    let VF = parseFloat(document.getElementById("Fut").value);
    let VP = document.getElementById("calculo");
    let taxa = parseFloat(document.getElementById("taxa").value);
    let meses = parseInt(document.getElementById("meses").value);
    
    taxa = taxa / 100;

    VP.innerHTML = 'Valor Presente: R$' + VF / (1 + taxa)**meses;
 
}
function VF()
{
    let VP = parseFloat(document.getElementById("Pres").value);
    let VF = document.getElementById("calculo");
    let taxa = parseFloat(document.getElementById("taxa").value);
    let meses = parseInt(document.getElementById("meses").value);
    
    taxa = taxa / 100;

    VF.innerHTML = 'Valor Futuro: R$' + VP * (1 + taxa)**meses;
}


function binario()
{
    let resultado = document.getElementById("resultado");
    let numero = parseInt(document.getElementById("num").value);
    let binario = '';
    let parametros = [128, 64, 32, 16, 8, 4, 2, 1];

    for(i= 0; i < parametros.length; i++){
        if(numero >= parametros[i]){
            binario += '1';
            numero -= parametros[i];
        }else{
            binario += '0';
        }
    }
    resultado.innerHTML = 'Resultado binário: ' + binario;
}

function impressao()
{
    let texto = document.getElementById("frase").value;
    let resultado = document.getElementById("crazyy");
    let array = texto.split('');
    let i;
    let vazio = '';
    let impressao = '';

    for (i = 0; i < array.length; i++){
        if(i > 0){
            impressao += '<br>' + vazio + array[i];
        }else{
            impressao += array[i]; 
        }
        vazio += '&nbsp &nbsp';
    }
    resultado.innerHTML = impressao;
}

function Juros()
{
    let P = parseFloat(document.getElementById("capital").value);
    let i = parseFloat(document.getElementById("taxa").value);
    let n = parseInt(document.getElementById("periodo").value);
    let montante = document.getElementById("montante");
    let juros = document.getElementById("jurosSimples");

    i = i / 100;

    juros.innerHTML = 'Juros Simples = R$' + P * i * n;

    montante.innerHTML = 'Montante = R$' + P *(1 + (i * n));

}