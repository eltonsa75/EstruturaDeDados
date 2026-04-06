import { LinkedList } from './structures/linkedlist.js';

class StackLinkedList {
    constructor() {
        // Usamos a sua LinkedList que já possui lógica de ponteiros duplos
        this.items = new LinkedList(); 
    }

    // Adiciona no topo da pilha (final da lista)
    push(element) {
        this.items.push(element);
    }

    // Remove e retorna o elemento do topo (último da lista)
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        // Remove o elemento na última posição (count - 1)
        return this.items.removeAt(this.items.size() - 1);
    }

    // Apenas olha o elemento do topo sem remover
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.items.size() - 1).element;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        this.items.clear();
    }

    toString() {
        return this.items.toString();
    }
}

/**
 * 🧪 EXEMPLO DE TESTE
 */
const stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Pilha após pushes:", stack.toString()); 
console.log("Topo da pilha (peek):", stack.peek()); 
console.log("Removendo (pop):", stack.pop()); 
console.log("Pilha final:", stack.toString());