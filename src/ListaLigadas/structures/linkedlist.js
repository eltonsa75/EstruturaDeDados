import { defaultEquals } from '../utils/defaultEquals.js';
import { Node } from '../models/Node.js';

/**
 * ============================================
 * 📌 LINKED LIST (Lista Ligada)
 * ============================================
 */
export class LinkedList {

    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }

        this.count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            for (let i = 0; i < index && current != null; i++) {
                current = current.next;
            }

            return current;
        }
        return undefined;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }
}

/**
 * ============================================
 * 📌 DOUBLY NODE (nó duplo)
 * ============================================
 */
export class DoublyNode extends Node {
    constructor(element, next = undefined, prev = undefined) {
        super(element); // Node só recebe element
        this.next = next;
        this.prev = prev; // ponteiro para trás
    }
}

/**
 * ============================================
 * 📌 DOUBLY LINKED LIST
 * ============================================
 */
export class DoublyLinkedList extends LinkedList {

    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined; // último elemento
    }

    /**
     * Adiciona no final (O(1))
     */
    push(element) {
        const node = new DoublyNode(element);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.count++;
    }

    /**
     * Inserção em qualquer posição
     */
    insert(element, index) {
        if (index >= 0 && index <= this.count) {

            const node = new DoublyNode(element);

            let current = this.head;

            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }

            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;

            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;

                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            this.count++;
            return true;
        }

        return false;
    }

    /**
     * Remove por posição
     */
    removeAt(index) {
        if (index >= 0 && index < this.count) {

            let current = this.head;

            if (index === 0) {
                this.head = current.next;

                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }

            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;

            } else {
                current = this.getElementAt(index);
                const previous = current.prev;

                previous.next = current.next;
                current.next.prev = previous;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }

    /**
     * Visualização estilo trem 🚂
     */
    toString() {
        if (!this.head) return '🚂 Lista vazia';

        let result = '🚂 ';
        let current = this.head;

        while (current != null) {
            result += `[${current.element}]`;

            if (current.next != null) {
                result += ' ⇄ ';
            }

            current = current.next;
        }

        return result + ' → 🚃';
    }
}