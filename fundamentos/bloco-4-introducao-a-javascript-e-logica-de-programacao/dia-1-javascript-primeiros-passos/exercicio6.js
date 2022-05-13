let pecaInfo = "BISPO";
let pecaInfoLC = pecaInfo.toLowerCase();

switch (pecaInfoLC) {
    case "rei":
        console.log("Rei - Uma casa em qualquer direção");
        break;
    case "dama":
        console.log("Dama - Diagonal, vertical e horizontal");
        break;
    case "bispo":
        console.log("Bispo - Diagonal");
        break;
    case "cavalo":
        console.log("Cavalo - Se move em forma de L, pode pular peças");
        break;    
    case "torre":
        console.log("Torre - Vertical e horizontal");
        break;
    case "peao":
        console.log("Peao - Uma casa para frente, destroi a peça na sua diagonal e no primeiro movimento pode avançar duas casas");
        break;

    default: "Peça informada é inválida"
        break;
}
