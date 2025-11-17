function cliqueAqui() {
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").valueAsNumber;
  let altura = document.getElementById("altura").valueAsNumber;
  let resposta = document.getElementById("valor");

  if (!nome || !peso || !altura) {
    resposta.textContent = "Preencha tudo corretamente!";
    return;
  }

  let valor = peso / (altura * altura);
  let classificacao = "";

  if (valor < 18.5) {
    classificacao = "abaixo do peso";
  } else if (valor < 24.9) {
    classificacao = "com peso normal";
  } else if (valor < 29.9) {
    classificacao = "com sobrepeso";
  } else if (valor < 34.9) {
    classificacao = "com obesidade grau 1";
  } else if (valor < 39.9) {
    classificacao = "com obesidade grau 2";
  } else {
    classificacao = "com obesidade grau 3";
  }

  resposta.textContent = `${nome}, seu IMC é ${valor.toFixed(
    2
  )} e você está ${classificacao}.`;

  console.log(valor);
}
