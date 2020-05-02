function calcular(binario) {
    var valorFinal = 0;
    for (i = 0; i < binario.length; i++) {
        if (Number(binario[i]) != 1 && Number(binario[i]) != 0) {
            document.getElementById("convertido").innerHTML = "Valor inválido";
            return -1;
        }
        valorFinal += Number(binario[i]) * Math.pow(2, i);
    }
    document.getElementById("convertido").innerHTML = "Valor em Decimal: " + valorFinal;
}