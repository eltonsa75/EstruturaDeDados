// Criamos um Symbol para armazenar os itens da pilha.
// Symbol cria uma chave "semi-privada", difícil de acessar externamente.
const _items = Symbol('stackItems');

class Stack {

    constructor() {
        // Armazena os elementos da pilha usando o Symbol
        // Isso evita acesso direto via stack.items
        this[_items] = [];
    }

    // Adiciona elemento no topo da pilha
    push(element) {
        this[_items].push(element);
    }

    // Remove o elemento do topo
    pop() {
        return this[_items].pop();
    }

    // Retorna o topo sem remover
    peek() {
        return this[_items][this[_items].length - 1];
    }

    // Retorna tamanho da pilha
    size() {
        return this[_items].length;
    }

    // Exibe a pilha
    print() {
        console.log(this[_items].toString());
    }
}


// ===== Execução =====

const stack = new Stack();

stack.push(5);
stack.push(8);

// Obtém as propriedades Symbol do objeto
let objectSymbols = Object.getOwnPropertySymbols(stack);

console.log(objectSymbols.length); // 1
console.log(objectSymbols);        // [Symbol(stackItems)]
console.log(objectSymbols[0]);     // Symbol(stackItems)

// Acessando diretamente via Symbol
stack[objectSymbols[0]].push(1);

// Exibe a pilha
stack.print(); // 5,8,1