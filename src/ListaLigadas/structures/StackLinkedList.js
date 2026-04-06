class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList(); // {1}
    }
    push(element) {
        this.items.push(element); // {2}
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1) // {3}
    }
}