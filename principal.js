function calcular(binario) {
    var valorFinal = 0;
    for (var i = 0; i < binario.length; i++) {
        valorFinal += Number(binario[i]) * Math.pow(2, i);
    }
    document.getElementById("convertido").innerHTML = "Valor convertido: " + valorFinal;
}