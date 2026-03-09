const friends = [
    { name: 'Elton', idade: 48 },
    { name: 'Ana', idade: 35 },
    { name: 'Chris', idade: 25 }, // vírgula no final: ES2017
];
function comparePerson(a, b) {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));
