const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];

let resultado = data.filter((Element) => Element.nome.indexOf("Silva") >= 0);

for (let i in resultado) {
  document.write(
    `Temos na lista com sobrenome "Silva" : ${resultado[i].nome} <br/>`
  );
  console.log(`Temos na lista com sobrenome "Silva" : ${resultado[i].nome}`);
}

console.log(resultado);
