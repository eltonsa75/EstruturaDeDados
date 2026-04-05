/**
 * Representa um nó da Linked List
 */
export class Node {
    constructor(element) {
        this.element = element; // valor armazenado no nó
        this.next = undefined;  // referência para o próximo nó
    }
}