let pin;
var buttonVerification = document.getElementById("buttonVerification");

buttonVerification.onclick = verificarPin;

function verificarPin(){
    pin = document.getElementById("ipin").value;
    console.log(pin);
}

