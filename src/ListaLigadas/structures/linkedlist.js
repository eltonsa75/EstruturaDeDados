export class LinkedList {
    constructor(equalsFn = (a, b) => a === b) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = { element, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        this.count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }

    insert(element, index) {
        if (index < 0 || index > this.count) return false;
        const node = { element, next: undefined, prev: undefined };
        if (index === 0) {
            if (!this.head) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
        } else {
            const previous = this.getElementAt(index - 1);
            const current = previous.next;
            node.next = current;
            node.prev = previous;
            previous.next = node;
            if (current) current.prev = node;
        }
        this.count++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.count) return undefined;
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            if (this.head) this.head.prev = undefined;
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = current.next;
            if (current.next) current.next.prev = previous;
        }
        this.count--;
        return current.element;
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            if (this.equalsFn(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    isEmpty() { return this.count === 0; }
    size() { return this.count; }
    
    toString() {
        if (!this.head) return '';
        let objString = `🚂 [${this.head.element}]`;
        let current = this.head.next;
        while (current) {
            objString += ` → [${current.element}]`;
            current = current.next;
        }
        return objString + ' → 🚃';
    }
}