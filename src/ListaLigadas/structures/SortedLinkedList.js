import { LinkedList } from './linkedlist.js'; // O segredo está aqui!

export class SortedLinkedList extends LinkedList {
    constructor(equalsFn = (a, b) => a === b, compareFn = (a, b) => a - b) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    // Na lista ordenada, o insert ignora o índice e coloca na ordem correta
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getNextPosition(element);
        return super.insert(element, pos);
    }

    getNextPosition(element) {
        for (let i = 0; i < this.size(); i++) {
            const comp = this.compareFn(element, this.getElementAt(i).element);
            if (comp < 0) return i;
        }
        return this.size();
    }
}