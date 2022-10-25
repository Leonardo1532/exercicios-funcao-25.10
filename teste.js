/*
1. Crie uma função que pergunte o nome e o salário de um
colaborador;

2. Depois crie uma função que irá calcular o aumento de salário
conforme a seguinte tabela:
ATÉ R$1.500,00 : aumento de 20%
R$1.501,00 até R$2.000,00 : aumento de 15%
R$2.001,00 até R$3.000,00 : aumento de 10%
R$3.001,00 em diante : aumento de 5%
Essa função tem que receber dois parâmetros: o salário e a %
de aumento. E retornar o valor do salário já com o aumento.

3. Depois de calcular o aumento você deve exibir: o nome do
colaborador, o salário, a % de aumento e o salário reajustado.

4. Crie uma função que pergunte se o usuário deseja calcular
novamente com novas informações.
Para calcular o aumento, faça o valor do salário multiplicado pela
porcentagem em decimal.

Ex.: salário R$1.000,00 aumento de 10%
1000 * 1.10 = 1100
salário R$1.000,00 aumento de 15%
1000 * 1.15 = 1150
*/
var porcentagemAumento
var salario
var nome
var continuar = "s"



while (continuar == "s") {
    CadastrarNome()
    CadastrarSalario()
    Continuar()
    console.log("seu nome é: " + nome)
    console.log("Seu salário reajustado é: " + salario)
}

function Continuar() {
    continuar = prompt("Deseja calcular novamente com novas informações?  s ou n")

}

function CadastrarNome() {
    nome = prompt("Insira seu nome")
}


function CadastrarSalario() {
    salario = parseFloat(prompt("Insira seu Salario"))

    console.log("Seu salário é: " + salario)

    if (salario <= 1500) {
        salario = salario + (salario * 0.2)
        porcentagemAumento = salario
        console.log("O aumento foi de 20%")

    } else if (salario >= 1501 && salario <= 2000) {
        salario = salario + (salario * 0.15)
        porcentagemAumento = salario
        console.log("O aumento foi de 15%")

    } else if (salario >= 2001 && salario <= 3000) {
        salario = salario + (salario * 0.10)
        porcentagemAumento = salario
        console.log("O aumento foi de 10%")

    } else if (salario >= 3001) {
        salario = salario + (salario * 0.05)
        porcentagemAumento = salario
        console.log("O aumento foi de 5%")
    }
}