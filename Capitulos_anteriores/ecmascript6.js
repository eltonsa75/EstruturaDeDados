//Utilizando o objeto @@iterator para iterar sobre elementos

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (const n of numbers) {
//     console.log(n % 2 === 0 ? 'even' : 'odd');
// }

iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}

// let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

//==============================================================================

// Métodos entries, keys e values de array ES2015

let aEntries = numbers.entries(); // obtém um iterador de chave/valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1
console.log(aEntries.next().value); // [1, 2] - posição 0, valor 2
console.log(aEntries.next().value); // [2, 3] - posição 0, valor 3
console.log('*Método Entries*');

aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}
console.log('*Método Key*');
// Método Key

const aKeys = numbers.keys(); // obtém um iterador de chaves
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false }


const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }

// Método From

let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, x => (x % 2 == 0));

// Usando o método Array.of

// let numbers3 = Array.of(1);
// let numbers4 = Array.of(1,2,3,4,5,6);

let numbers3 = [1];
let numbers4= [1,2,3,4,5,6];

//let numbersCopy = Array.of(...numbers4);
let numbersCopy = Array.of(1,2,3,4,5,6);

numbersCopy.fill(0);
numbersCopy.fill(2, 1);
numbersCopy.fill(1, 3, 5);
console.log(numbersCopy);


let ones = Array(6).fill(1);
console.log(ones);

let copyArray = [1, 2, 3, 4, 5, 6]
console.log(copyArray);

copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray);

// Ordenando elementos, usando o Reverse, Sort

numbers.reverse();
console.log('*reverse*');
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

function compare(a, b) {
    if(a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }

    // a deve ser igual a b
    return 0;
}
numbers.sort(compare);

console.log('compare', numbers);

// Ordenação Personalizada comparando as idades

const friends = [
    {name: 'Jhon', age: 30 },
    {name: 'Ana', age: 20 },
    {name: 'Chris', age: 25 }, // virgula no final: ES2017
];
function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));


// Ordenando Strings 
let names = ['Ana', 'ana', 'jhon', 'Jhon'];
console.log(names.sort());


names = ['Ana', 'ana', 'jhon', 'Jhon']; // inicia o array com o estado original
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return - 1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}));

names.sort((a, b) => a.localeCompare(b));
console.log(names);

const names2 = ['Maéve', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));

//====================================================================
numbers.push(10);
console.log(numbers.indexOf(10));
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

//=====================================================================
// ECMAScript 2015 - os métodos find e findIndex
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multiple0f13(element, index, array) {
    return (element % 13 == 0);
}

console.log(numeros.find(multiple0f13));
console.log(numeros.findIndex(multiple0f13));


// ECMAScript 2016 - usando o método includes
console.log(numbers.includes(15));
console.log(numbers.includes(20));

let numbers6 = [7,6,5,4,3,2,1];
console.log(numbers6.includes(4,5));

// Convertendo um array em uma string

console.log(numbers.toString());

const numbersstring = numbers.join('-');
console.log(numbersstring);

// ClasseArray

let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i=0; i<length; i++) {
    int16[i] = i+1;
}
console.log(int16);

// Refatorando o Array Friends

// interface Person {
//     name: string;
//     age: number;
// }

// // const friends: {name: string, age: number}[]
// const friends = [
//     { name: 'Jhon', age: 30}
//     { name: 'Ana', age: 20}
//     { name: 'Cris', age: 25}
// ];
// function comparePerson(a: Person, b: Person) {
//     // conteúdo da função comparePerson
// }