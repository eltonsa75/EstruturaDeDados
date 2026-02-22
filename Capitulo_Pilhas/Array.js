// const fibonacci = []; // {1}
// fibonacci[1] = 1; // {2}
// fibonacci[2] = 2; // {3}

// for (let i = 3; i < 20; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
// }

// for (let i = 1; i < fibonacci.length; i++) { // {5}}
//     console.log(fibonacci[i]); //{6}
// }


 let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.push(11);
// numbers.push(12, 13);

// Array.prototype.insertFirstPosition = function(value) {
//     for (let i = this.length; i >= 0; i--) {
//         this[i] = this[i - 1];
//     }
//     this[0] = value;
// };
// numbers.insertFirstPosition(-1);

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            // console.log(myArray[i]);
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

// remove a primeria posição manualmente e executa reindex
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();
