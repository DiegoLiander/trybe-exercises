// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar=false;
let modulo=0;
let qtdImpar=0;

for (let cont=0; cont<=numbers.length-1; cont+=1) {
    modulo=numbers[cont]%2;
    if (modulo==1) {
        impar=true, qtdImpar+=1;
    }
}
if (impar=false) {
    console.log('nenhum valor ímpar encontrado')
}else {
    console.log('Quantidade de numeros impar: ',qtdImpar);
}