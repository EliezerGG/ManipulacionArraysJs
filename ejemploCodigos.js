const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => (
    suma + number**2
), 0) // <- Valor inicial

console.log(reducedValue) // 145