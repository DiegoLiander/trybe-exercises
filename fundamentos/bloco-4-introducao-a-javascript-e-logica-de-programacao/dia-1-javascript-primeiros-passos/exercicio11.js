const salario = 3000;
let taxaInss;
let taxaIR;
let valorInss=0;
let valorIR=0;
let parcDeduzIR=10;
let salarioBase=0;
let salarioLiq=0;


if (salario>0) {
    // faixa INSS
    if (salario<=1556.94) {
        taxaInss = 0.08;
    } else if (salario<=2594.92) {
        taxaInss = 0.09;
    } else if (salario<=5189.82) {
        taxaInss = 0.11;
    } else{
        valorInss = 570.88;
    }
    //calcula valor Inss
    if (valorInss==0) {
        (valorInss=taxaInss*salario);
    }
    //calcula salario base
    (salarioBase=salario-valorInss);
    // faixa IR
    if (salarioBase<=1903.99) {
        taxaIR = 0, parcDeduzIR=0;
    } else if (salarioBase<=2826.65) {
        taxaIR = 0.075, parcDeduzIR=142.80;
    } else if (salarioBase<=3751.05) {
        taxaIR = 0.15, parcDeduzIR=354.80;
    } else if (salarioBase<=4664.68) {
        taxaIR = 0.225, parcDeduzIR=636.13;
    } else{
        taxaIR = 0.275, parcDeduzIR=869.36;
    }  
    //calcula valor IR
    if (taxaIR!=0) {
        (valorIR=taxaIR*salarioBase);
    }
    //deduz IR
    (salarioLiq=salarioBase-(valorIR-parcDeduzIR))
    //resultado
    console.log("Salario líquido: ", salarioLiq);

} else {
    console.log("Valor informado é invalido.");
}