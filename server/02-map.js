const letters = ['a','b','c'];

const newArray= [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];

    newArray.push(element+'MasMas')
}

console.log('Original', letters);
console.log('New',newArray);

const letraElefante = letters.map(item => item + "+🐘+");

console.log(letraElefante);