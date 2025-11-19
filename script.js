//IMC

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

//TMB

function cliqueAqui1() {
  let nome = document.getElementById("nome1").value;
  let idade = document.getElementById("idade").valueAsNumber;
  let peso = document.getElementById("peso1").valueAsNumber;
  let altura = document.getElementById("altura1").valueAsNumber;
  let sexo = document.getElementById("sexo").value;
  let resposta1 = document.getElementById("valor1");

  let tmb = 0;

  if (sexo === "M") {
    //Homens
    tmb = 88.36 + 13.4 * peso + 4.8 * altura - 5.7 * idade;
  } else if (sexo === "F") {
    //Mulheres
    tmb = 447.6 + 9.2 * peso + 3.1 * altura - 4.3 * idade;
  }

  resposta1.innerText = `${nome}, sua TMB é: ${tmb.toFixed(2)} kcal por dia.`;
}
