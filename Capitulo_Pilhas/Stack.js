// Classe que representa uma estrutura de dados do tipo Stack (Pilha)
// Segue o princípio LIFO (Last In, First Out)
class Stack {

    // O constructor é executado quando criamos uma nova instância da classe
    constructor() {
        // count controla quantos elementos existem na pilha
        this.count = 0;

        // items armazena os elementos
        // usamos um objeto para controlar manualmente os índices
        this.items = {};
    }

    // Método responsável por adicionar um elemento no topo da pilha
    push(element) {
        // Armazena o elemento na posição atual do contador
        this.items[this.count] = element;

        // Incrementa o contador para a próxima posição
        this.count++;
    }

    pop() {
        // Se estiver vazia, retorna undefined
        if (this.isEmpty()) {
            return undefined;
        }

        // Decrementa o contador (remove o topo)
        this.count--;

        // Guarda o valor removido
        const result = this.items[this.count];

        // Remove do objeto
        delete this.items[this.count];

        return result;
    }

    // Retorna o topo sem remover
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // Verifica se está vazia
    isEmpty() {
        return this.count === 0;
    }

    // Retorna o tamanho
    size() {
        return this.count;
    }

    // Limpa a pilha corretamente
    clear() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }
    // visualização opcional
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[0]}`; //{1}
        for (let i = 1; i < this.count; i++) { // {2}
            objString = `${objString}, ${this.items[i]}`; // {3}
        }
        return objString;
    }
}

// ===== Execução =====

const stack = new Stack();

console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2}
console.log(stack.items); // {3}

// Inserindo elementos
stack.push(5);   // items[0] = 5
stack.push(8);   // items[1] = 8
stack.push(10);  // items[2] = 10
stack.push(15);  // items[3] = 15

console.log("Count:", stack.count);
console.log("Items:", stack.items);

/*
Estado final da pilha:

count = 4

items = {
  0: 5,
  1: 8,
  2: 10,
  3: 15
}
*/