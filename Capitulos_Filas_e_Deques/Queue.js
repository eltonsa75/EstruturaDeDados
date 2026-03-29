/**
 * ============================================================
 * 📚 Estruturas de Dados em JavaScript
 * Queue (Fila), Deque e Algoritmos Clássicos
 * Autor: Elton Andrade
 * ============================================================
 */

/**
 * ============================================================
 * 📌 QUEUE (FIFO - First In, First Out)
 * O primeiro elemento a entrar é o primeiro a sair
 * ============================================================
 */
class Queue {
    constructor() {
        this.count = 0;         // controla o final da fila
        this.lowestCount = 0;   // controla o início da fila
        this.items = {};        // estrutura de armazenamento
    }

    // Adiciona elemento no final da fila
    enqueue(element) {
        this.items[this.count++] = element;
    }

    // Remove o primeiro elemento da fila
    dequeue() {
        if (this.isEmpty()) return undefined;

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount++];
        return result;
    }

    // Retorna o primeiro elemento sem remover
    peek() {
        return this.isEmpty() ? undefined : this.items[this.lowestCount];
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.size() === 0;
    }

    // Retorna o tamanho da fila
    size() {
        return this.count - this.lowestCount;
    }

    // Limpa a fila
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // Converte a fila para string
    toString() {
        if (this.isEmpty()) return '';

        let result = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            result = `${result},${this.items[i]}`;
        }
        return result;
    }
}

/**
 * ============================================================
 * 📌 DEQUE (Double Ended Queue)
 * Permite inserção e remoção nas duas extremidades
 * ============================================================
 */
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    // Adiciona elemento no início
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);

        } else if (this.lowestCount > 0) {
            this.items[--this.lowestCount] = element;

        } else {
            // Reorganiza os elementos
            for (let i = this.count; i > this.lowestCount; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.items[this.lowestCount] = element;
            this.count++;
        }
    }

    // Adiciona elemento no final
    addBack(element) {
        this.items[this.count++] = element;
    }

    // Remove do início
    removeFront() {
        if (this.isEmpty()) return undefined;

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount++];
        return result;
    }

    // Remove do final
    removeBack() {
        if (this.isEmpty()) return undefined;

        const result = this.items[--this.count];
        delete this.items[this.count];
        return result;
    }

    // Retorna primeiro elemento
    peekFront() {
        return this.isEmpty() ? undefined : this.items[this.lowestCount];
    }

    // Retorna último elemento
    peekBack() {
        return this.isEmpty() ? undefined : this.items[this.count - 1];
    }

    // Verifica se está vazio
    isEmpty() {
        return this.size() === 0;
    }

    // Tamanho da deque
    size() {
        return this.count - this.lowestCount;
    }

    // Limpa a estrutura
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}

/**
 * ============================================================
 * 🎲 SHUFFLE (Algoritmo Fisher-Yates)
 * Embaralha os elementos de um array
 * ============================================================
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * ============================================================
 * 🎯 HOT POTATO (Simulação com Queue)
 * Remove elementos até restar apenas um vencedor
 * ============================================================
 */
function hotPotato(elementsList, num) {

    const queue = new Queue();
    const eliminatedList = [];

    // adiciona todos na fila
    elementsList.forEach(el => queue.enqueue(el));

    // executa o jogo
    while (queue.size() > 1) {

        // passa a "batata"
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        // remove o eliminado
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    };
}

/**
 * ============================================================
 * 🔤 PALINDROME CHECKER (usando Deque)
 * Verifica se uma palavra é igual de trás para frente
 * ============================================================
 */
function palindromeChecker(str) {

    if (!str) return false;

    const deque = new Deque();

    // normaliza string (minúscula e sem espaços)
    const formatted = str.toLowerCase().replace(/\s/g, '');

    // adiciona cada caractere na deque
    for (let char of formatted) {
        deque.addBack(char);
    }

    // compara início e fim
    while (deque.size() > 1) {
        if (deque.removeFront() !== deque.removeBack()) {
            return false;
        }
    }

    return true;
}

/**
 * ============================================================
 * 🧪 TESTES
 * ============================================================
 */
console.log("=== HOT POTATO ===");

const names = ['Jhon', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const shuffled = shuffle([...names]);
const rounds = Math.floor(Math.random() * 10) + 1;

console.log("Ordem inicial:", shuffled);
console.log("Rodadas:", rounds);

const result = hotPotato(shuffled, rounds);

result.eliminated.forEach(name => {
    console.log(`${name} foi eliminado.`);
});

console.log(`🏆 Vencedor: ${result.winner}`);

console.log("\n=== PALINDROME ===");

console.log("arara:", palindromeChecker("arara"));
console.log("elton:", palindromeChecker("elton"));