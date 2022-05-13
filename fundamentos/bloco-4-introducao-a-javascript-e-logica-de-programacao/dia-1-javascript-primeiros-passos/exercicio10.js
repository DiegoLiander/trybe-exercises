const custoProd = -1;
const valorVendaProd = 2.5;

if (custoProd<0 || valorVendaProd<0) {
    console.log("Valor informado é invalido.");
}else {
    console.log(((valorVendaProd-(custoProd+custoProd*(20/100)))*1000));
}