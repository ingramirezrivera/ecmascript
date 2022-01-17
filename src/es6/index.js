function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

//es6
function newFunction2(name = 'oscar', age = 32, country = "MX"){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo','23','CO');

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//********************************** */

//antes
let lorem = "Quiero esccribir una frase epica \n"
+ "otra frase epica que todos necesitamos."
//es6
let lorem2 = `Otra frase epica para es6
ahora no necesitamos mas que dar el salto de linea y listo`

console.log(lorem);
console.log(lorem2);


//************************************** */
//antes
let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX'
};

console.log(person.name, person.age, person.country);
//es6
let { name , age  } = person;
console.log(name,age);

//**************************************** */
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];
//antes
let education1 = ['David', 'Oscar','Julian','Ricardo', 'Valeria','Yesica','Camila' ];
//es6 
let educationEs6 = ['David', ...team1, ...team2];

console.log(education1);
console.log(educationEs6);

var hola = 'hola';

{
    var globalVar = "Global Var"; //Se asigna de forma global
}
//nuevo en es6 variables para el scope
{
    let globalLet = 'Global Let'; //Las variables let solo permiten el acceso dentro del scope
}

console.log(globalVar);
console.log(globalLet);


//tambien en es6
const a = 'b';
a = 'a';
console.log(a);

//Propiedad de objetos mejorada

let name = 'oscar';
let age = 32;
obj = {name: name, age: age};// en vez de escribir esta linea

obj2 = {name,age};//podemos escribir esta linea
console.log(obj2);

const = [
    {name: 'Oscar',age:32},
    {name: 'Yesica', age: 27}
];
//antes recorriamos con .map()
let lisOfNames = names.map(function (item){
    console.log(item.name);
})

//en es6 con arrow function

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...//bloque de codigo que se necesita
}

const listOfNames4 = name => {
    ...

}

const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve('Hey!');
      } else {
        reject('Ups!!');
      }
    });
  }
  
  helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }
     const calc = new calculator();
     console.log(calc.sum(2,2));


//GENERADORES

import { hello } from './module';

hello();

function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    } 
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);