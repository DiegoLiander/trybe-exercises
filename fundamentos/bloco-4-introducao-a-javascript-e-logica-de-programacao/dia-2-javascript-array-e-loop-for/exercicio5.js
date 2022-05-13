let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior=0;

for (let cont=0; cont<=numbers.length-1; cont+=1) {
    if (maior<numbers[cont]) {
        maior=numbers[cont];
    }
}
console.log(maior);