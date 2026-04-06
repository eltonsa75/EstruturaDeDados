export class LinkedList {

    constructor(equalsFn = (a, b) => a === b) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    // 🔹 adiciona no final
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
        node.prev = current; // 🔥 ligação dupla
    }

    this.count++;
}

    // 🔹 pega elemento por índice
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

    // 🔹 insere em posição específica
    insert(element, index) {

        if (index < 0 || index > this.count) return false;

        const node = { element, next: undefined };

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            const previous = this.getElementAt(index - 1);
            node.next = previous.next;
            previous.next = node;
        }

        this.count++;
        return true;
    }

    // 🔹 remove por índice
removeAt(index) {

    if (index < 0 || index >= this.count) return undefined;

    let current = this.head;

    if (index === 0) {
        this.head = current.next;

        if (this.head) {
            this.head.prev = undefined;
        }

    } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;

        previous.next = current.next;

        if (current.next) {
            current.next.prev = previous;
        }
    }

    this.count--;
    return current.element;
}

    // 🔹 busca índice
    indexOf(element) {
        let current = this.head;

        for (let i = 0; i < this.count; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }

        return -1;
    }

    // 🔹 remove por valor
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    // 🔹 limpa lista
    clear() {
        this.head = undefined;
        this.count = 0;
    }

    // 🔹 tamanho
    size() {
        return this.count;
    }

    // 🔹 está vazia?
    isEmpty() {
        return this.count === 0;
    }

// 🔹 visual estilo trem 🚂 (simples - correto)
toStringDetailed() {

    if (!this.head) return '🚂 Lista vazia';

    let result = '';
    let current = this.head;

    while (current) {

        const prev = current.prev ? current.prev.element : 'NULL';
        const next = current.next ? current.next.element : 'NULL';

        result += `[${prev} ← ${current.element} → ${next}]`;

        if (current.next) {
            result += '\n';
        }

        current = current.next;
    }

    return result;
}
}