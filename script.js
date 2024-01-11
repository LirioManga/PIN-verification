let pin;
let inputPin;

let input = document.querySelector("input");
var buttonVerification = document.getElementById("buttonVerification");
let buttonTentar = document.getElementById("buttonTentar");

const pinGerado = Math.floor(Math.random()*1000+1000);
const classificacao = document.querySelector("#classificacao");

buttonVerification.onclick = verificarPin;

function verificarPin(){

    inputPin = document.getElementById("ipin").value;
    pin = parseInt(inputPin);

    console.log(pinGerado);

    if (inputPin == ""){
        input.style.borderColor ='red';
        input.focus();

    }

    if(pin > 999){

        if(pin < pinGerado){

            classificacao.textContent = 'PIN incorrecto, tente um numero maior';
            classificacao.style.display = 'block';
            input.focus();
            tenteNovamente();

        }else if(pin > pinGerado){

            classificacao.textContent = "PIN incorrecto, tente um numero menor"
            classificacao.style.display = 'block';
            input.focus();
            tenteNovamente();
        

        } else if(pin === pinGerado){
            classificacao.style.color = 'blue';
            classificacao.textContent ='Pin correcto';
            classificacao.style.display = 'block';
            buttonTentar.style.display = 'none';
            buttonVerification.style.display = 'none';
            input.style.color = 'blue';
            input.style.borderColor = 'blue'
            
        }
    } else{
        alert("Introduza um numero com 4 Dígitos");
    }

}


function tenteNovamente(){

    buttonVerification.style.display = 'none';
    buttonTentar.style.display='block';
    input.style.borderColor = 'red';
    input.style.color= 'red';
    

    buttonTentar.onclick = verificarPin;
    
}

