
const data = {
    frontend: 'Oscar',
    bacend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Converiones de obejos a array de strings
const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, ' -------'));
console.log('food'.padEnd(12,' -------'));

const obj = {
    name: 'Oscar',
}