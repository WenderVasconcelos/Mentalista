var numeroSecreto = parseInt(Math.random() * 11);
var quantidadeTentativas = 3;
function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    document.getElementById("resultado").style.display = "block";

    if ((quantidadeTentativas == 1) && (chute != numeroSecreto)) {
        elementoResultado.innerHTML = "Errô... O número correto era " + numeroSecreto;
        document.getElementById("hidden").style.display = "none";
        document.getElementById("reset").style.display = "block";
        document.getElementById("erro").style.display = "block";
        document.getElementById("valor").style.display = "none";

    } else if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou!!! " + "O número é " + numeroSecreto;
        document.getElementById("parabens").style.display = "block";
        document.getElementById("valor").style.display = "none";
        document.getElementById("hidden").style.display = "none";
        document.getElementById("reset").style.display = "block";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "O número é menor";
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "O número é maior";
    } else {
        alert("Para prosseguir você deve digitar um número de 0 a 10")
        return;
    }
    quantidadeTentativas--;
}

function Reset() {
    numeroSecreto = parseInt(Math.random() * 11);
    document.getElementById("hidden").style.display = "block";
    document.getElementById("valor").style.display = "block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("erro").style.display = "none";
    document.getElementById("parabens").style.display = "none";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("valor").value = "";
    quantidadeTentativas = 3;
}