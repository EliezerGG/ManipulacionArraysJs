const totals = [1,2,3,4,5];

let sum = 0;

for (let index = 0; index < totals.length; index++) {
    const item = totals[index];
    sum = sum + item;
}

console.log(sum);

const rta = totals.reduce((acumlador, item) => acumlador + item, 0);

console.log('rta',rta);