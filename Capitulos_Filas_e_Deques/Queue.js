class Queue {
    constructor() {
        this.count = 0; // {1}
        this.lowestCount = 0; // {2}
        this.items = {}; // {3}
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count ++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // {1}
        delete this.items[this.lowestCount]; // {2}
        this.lowestCount++; // {3}
        return result; // {4}
    }

    items = {
        0: 5,
        1: 8
    };
    count = 2;
    lowestCount = 0;

    péek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
        }
}

class Deque {
    constructor() {
        this.count = 0;        // controla o final da fila
        this.lowestCount = 0;  // controla o início
        this.items = {};       // armazena os elementos
    }

    // adiciona no início
    addFront(element) {

        if (this.isEmpty()) { // {1}
            // se estiver vazia, usa addBack
            this.addBack(element);

        } else if (this.lowestCount > 0) { //  {2}
            // se houver espaço antes do início
            this.lowestCount--;
            this.items[this.lowestCount] = element;

        } else {
            // move todos os elementos uma posição para frente
            for (let i = this.count; i > this.lowestCount; i--) { // [3]
                this.items[i] = this.items[i - 1];
            }

            this.count++;
            this.items[this.lowestCount] = element; // {4}
        }
    }

    // adiciona no final
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // remove do início
    removeFront() {
        if (this.isEmpty()) { 
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    // remove do final
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];

        return result;
    }

    // retorna o primeiro elemento
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // retorna o último elemento
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // verifica se está vazia
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    // tamanho da deque
    size() {
        return this.count - this.lowestCount;
    }

    // limpa a estrutura
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // visualização
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}

const deque = new Deque();

deque.addBack(5);
deque.addBack(10);

console.log(deque.toString()); // 5,10

deque.addFront(1);

console.log(deque.toString()); // 1,5,10

deque.removeBack();

console.log(deque.toString()); // 1,5

deque.removeFront();

console.log(deque.toString()); // 5

deque.addFront(1)
deque.addBack(5)
deque.addBack(10)

items = {
  0: 1,
  1: 5,
  2: 10
}

count = 3
lowestCount = 1;

/*============================================*/

const queue = new Queue();

queue.enqueue('Jhon');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.toString()); // Jhon, Jack
console.log(queue.size()); // exibe 3
console.log(queue.isEmpty()); // false
queue.dequeue(); // remove Jhon
queue.dequeue(); // remove Jack
console.log(queue.toString()); // Camila

//console.log(queue.isEmpty()); // exibe true