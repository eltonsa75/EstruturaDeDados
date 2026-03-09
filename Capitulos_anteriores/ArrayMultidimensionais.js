let temperaturaSemana1 = [34, 34, 32, 31, 32, 31, 21, 22];
let temperaturaSemana2 = [27, 26, 23, 24, 25, 22, 27, 26];

let temperatura = [];

// same as

temperatura[0] = [34, 34, 32, 31, 32, 31, 21, 22];
temperatura[1] = [27, 26, 23, 24, 25, 22, 27, 26];

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

console.log('averageTemp two-dimensional array:');


// dia 01
temperatura[0] = [];
temperatura[0][0] = 34;
temperatura[0][1] = 34;
temperatura[0][2] = 32;
temperatura[0][3] = 31;
temperatura[0][4] = 32;
temperatura[0][5] = 31;
temperatura[0][6] = 21;
temperatura[0][7] = 22;

// dia 02

temperatura[1] = [];
temperatura[1][0] = 27;
temperatura[1][1] = 26;
temperatura[1][2] = 23;
temperatura[1][3] = 24;
temperatura[1][4] = 25;
temperatura[1][5] = 22;
temperatura[1][6] = 27;
temperatura[1][7] = 26;

// printMatrix(averageTemp);
console.table(temperatura);

//* multidimensional Matrix

// Matrix 3x3x3 - Cube

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []; // precisamos inicializar cada array
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

for (let i = 0; i < matrix3x3x3.length; i++){
    for(let j = 0; j < matrix3x3x3[i].length; j++) {
        for(let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

// user-friendly-output

const matrix3x3x3Output = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3Output[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3Output[i][j] = `[${matrix3x3x3[i][j].join(', ')}]`;
    }
}

console.log('matrix3x3x3 three-dimensional array:');
console.table(matrix3x3x3Output);