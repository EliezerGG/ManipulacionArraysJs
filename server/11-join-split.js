const elements = ["Fire","Air","Water"];

const separator ="--";
let rtaFinal = "";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
    
}

console.log('for', rtaFinal);

const rta2 = elements.join('--');

console.log('join', rta2);

const title = 'Curso de manipulacion de Arrays';
const urlFinal =title.split(' ').join('-').toLowerCase();

console.log(urlFinal);