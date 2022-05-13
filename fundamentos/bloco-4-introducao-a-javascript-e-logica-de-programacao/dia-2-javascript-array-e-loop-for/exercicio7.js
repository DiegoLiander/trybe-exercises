let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor=numbers[0];

for (let cont=0; cont<=numbers.length-1; cont+=1) {
    if (menor>numbers[cont]) {
        menor=numbers[cont];
    }
}
console.log(menor)