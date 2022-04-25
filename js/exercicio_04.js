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

let resultado = data
  .filter((elemento) => elemento.sexo === "M")
  .reduce((somador, prox) => somador + prox.salario, 0);

if (resultado != null) {
  document.write(
    `A soma total de salários das pessoas do sexo masculino é: R$ ${resultado.toFixed(
      2
    )}`
  );
  console.log(
    `A soma total de salários das pessoas do sexo masculino é: R$ ${resultado.toFixed(
      2
    )}`
  );
} else {
  document.write(`Não há pessoas com o sexo masculino`);
  console.log(`Não há pessoas com o sexo masculino`);
}
