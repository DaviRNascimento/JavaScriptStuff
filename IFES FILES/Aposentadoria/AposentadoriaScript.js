/*
    Elabore um programa para que leia a idade, o tempo de serviço e o valor do último salário recebido de um trabalhador. Como resultado escreva se ele pode ou não se aposentar. E caso ele possa se aposentar calcule e mostre o valor de seu salário de aposentadoria.
*/

// definição de variáveis
var idade, tempoServico, ultimoSalario, salarioAposentado;

// recebimento de input para armezar dentro das variáveis
idade = parseInt(prompt("Qual sua idade: "));
tempoServico = parseInt(prompt("Tempo de Serviço: "));
ultimoSalario = parseFloat(prompt("Valor do seu último salário: "));

if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && idade >= 25)) {
    if (tempoServico > 20) {
        salarioAposentado = ultimoSalario * 0.8;

        if (salarioAposentado < 1212.0) {
            salarioAposentado = 1212.00;
            console.log("Seu salário pode ser de até 80% do seu último salário, mas por ser abaixo do piso salarial, ele corresponde ao mínimo: " + (salarioAposentado))
        }
        else if (salarioAposentado > 7087.22) {
            salarioAposentado = 7087.22;
            console.log("Seu salário pode ser de até 80% do seu último salário, mas por atingir o teto salarial, ele corresponde ao máximo: " + (salarioAposentado))
        }
        else {
            console.log("Seu salário pode ser de até 80% do seu último salário, o que corresponde a: " + (salarioAposentado));
        }
    }
    else if (tempoServico <= 20) {
        salarioAposentado = ultimoSalario * 0.6;

        if (salarioAposentado < 1212.00) {
            salarioAposentado = 1212.00;
            console.log("Seu salário pode ser de até 60% do seu último salário, mas por ser abaixo do piso salarial, ele corresponde ao mínimo: R$" + (salarioAposentado))
        }
        else if (salarioAposentado > 7087.22) {
            salarioAposentado = 7087.22;
            console.log("Seu salário pode ser de até 60% do seu último salário, mas por atingir o teto salarial, ele corresponde ao máximo: " + (salarioAposentado))
        }
        else {
            console.log("Seu salário pode ser de até 60% do seu último salário, o que corresponde a: " + (salarioAposentado));
        }
    }
}
else {
    console.log("Não pode se aposentar");
}