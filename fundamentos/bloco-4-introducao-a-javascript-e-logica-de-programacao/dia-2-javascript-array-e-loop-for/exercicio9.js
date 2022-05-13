let numbers=[];

for (let cont=1; cont<=25; cont+=1) {
    numbers.push(cont);
}
for (let cont = 0; cont < numbers.length-1; cont+=1) {
    console.log(numbers[cont]/2);
}