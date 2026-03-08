// Classe que representa uma estrutura de dados do tipo Stack (Pilha)
// Segue o princípio LIFO (Last In, First Out)
class Stack {

    constructor() {
        // Controla a quantidade de elementos na pilha
        this.count = 0;

        // Objeto usado para armazenar os elementos
        // Estamos controlando os índices manualmente
        this.items = {};
    }

    // Adiciona um elemento no topo da pilha (O(1))
    push(element) {
        this.items[this.count] = element; // armazena na posição atual
        this.count++; // incrementa o tamanho
    }

    // Remove o elemento do topo (O(1))
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--; // reduz o tamanho
        const result = this.items[this.count]; // pega o último elemento
        delete this.items[this.count]; // remove do objeto

        return result;
    }

    // Retorna o elemento do topo sem remover
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.count === 0;
    }

    // Retorna o tamanho atual
    size() {
        return this.count;
    }

    // Limpa a pilha completamente
    clear() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }

    // Converte a pilha em string (apenas para visualização)
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[0]}`; // primeiro elemento

        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}


// =======================================
// Conversão Decimal → Binário usando Stack
// =======================================

function decimalToBinary(decNumber) {

    // Caso especial: se for 0, retorna "0"
    if (decNumber === 0) {
        return '0';
    }

    const remStack = new Stack(); // pilha para armazenar os restos
    let number = Math.floor(decNumber); // garante número inteiro
    let rem;
    let binaryString = '';

    // PRIMEIRA ETAPA:
    // Divide sucessivamente por 2 e empilha os restos
    while (number > 0) {

        rem = number % 2;              // pega o resto da divisão por 2
        remStack.push(rem);            // empilha o resto
        number = Math.floor(number / 2); // divide o número por 2
    }

    // SEGUNDA ETAPA:
    // Desempilha os restos para formar o binário correto
    // (inverte a ordem automaticamente por causa do LIFO)
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}


function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';  //{6}
    let number = decNumber;
    let rem;
    let baseString = '';
    if(!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // {7}
    }
    return baseString
 }


// =======================
// Testes
// =======================


console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0

console.log(decimalToBinary(233));  // 11101001
console.log(decimalToBinary(10));   // 1010
console.log(decimalToBinary(1000)); // 1111101000